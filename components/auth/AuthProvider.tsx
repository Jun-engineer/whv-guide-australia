"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Session } from "@supabase/supabase-js";
import { GUEST_PROFILE, type Profile } from "@/types/user";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

type AuthContextValue = {
  session: Session | null;
  profile: Profile;
  loading: boolean;
  isLoggedIn: boolean;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function loadProfile(userId: string, email: string | undefined): Promise<Profile> {
  if (!supabase) return GUEST_PROFILE;

  const { data, error } = await supabase
    .from("profiles")
    .select("id, display_name, avatar_url, bio, role, status")
    .eq("id", userId)
    .single();

  if (error || !data) {
    return {
      id: userId,
      displayName: email ?? "User",
      role: "user",
      status: "active",
    };
  }

  return {
    id: data.id,
    displayName: data.display_name,
    avatarUrl: data.avatar_url ?? undefined,
    bio: data.bio ?? undefined,
    role: data.role,
    status: data.status,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const hasDb = hasSupabaseEnv && Boolean(supabase);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile>(GUEST_PROFILE);
  const [loading, setLoading] = useState(hasDb);

  const applySession = useCallback(async (nextSession: Session | null) => {
    setSession(nextSession);
    if (nextSession?.user) {
      const nextProfile = await loadProfile(nextSession.user.id, nextSession.user.email ?? undefined);
      setProfile(nextProfile);
    } else {
      setProfile(GUEST_PROFILE);
    }
    setLoading(false);
  }, []);

  const refresh = useCallback(async () => {
    if (!hasSupabaseEnv || !supabase) {
      setLoading(false);
      return;
    }
    const {
      data: { session: current },
    } = await supabase.auth.getSession();
    await applySession(current);
  }, [applySession]);

  const signOut = useCallback(async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setSession(null);
    setProfile(GUEST_PROFILE);
  }, []);

  useEffect(() => {
    if (!hasDb || !supabase) {
      return;
    }

    let active = true;

    supabase.auth.getSession().then(({ data: { session: current } }) => {
      if (active) {
        void applySession(current);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void applySession(nextSession);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [applySession, hasDb]);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      profile,
      loading,
      isLoggedIn: Boolean(session?.user),
      refresh,
      signOut,
    }),
    [session, profile, loading, refresh, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
