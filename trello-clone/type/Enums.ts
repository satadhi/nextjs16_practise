export const USER_ROLES = ["ADMIN", "MEMBER", "VIEWER"] as const;
export type UserRole = (typeof USER_ROLES)[number];
