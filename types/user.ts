export type UserRole = "guest" | "user" | "moderator" | "admin";
export type UserStatus = "active" | "suspended" | "banned";

export type Profile = {
  id: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
  role: UserRole;
  status: UserStatus;
};

export const GUEST_PROFILE: Profile = {
  id: "guest",
  displayName: "Guest",
  role: "guest",
  status: "active",
};
