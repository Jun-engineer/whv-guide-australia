import { GUEST_PROFILE, type Profile } from "@/types/user";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

export function canUserPost(profile: Profile): boolean {
  return profile.role !== "guest" && profile.status === "active";
}

export async function getViewerProfile(): Promise<Profile> {
  if (!hasSupabaseEnv || !supabase) {
    return GUEST_PROFILE;
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    return GUEST_PROFILE;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("id, display_name, avatar_url, bio, role, status")
    .eq("id", session.user.id)
    .single();

  if (error || !data) {
    return {
      id: session.user.id,
      displayName: session.user.email ?? "User",
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
