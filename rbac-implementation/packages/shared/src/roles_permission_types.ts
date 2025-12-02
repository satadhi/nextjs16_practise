export const Permission = {
  USER_READ: "user:read",
  USER_WRITE: "user:write",
  USER_DELETE: "user:delete",

  ORDER_READ: "order:read",
  ORDER_UPDATE: "order:update",

  ADMIN_ALL: "admin:all",
} as const;

export type Permission = typeof Permission[keyof typeof Permission];

export enum Role {
  ADMIN = "admin",
  MANAGER = "manager",
  USER = "user",
}


export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  [Role.ADMIN]: [
    Permission.USER_READ,
    Permission.USER_WRITE,
    Permission.USER_DELETE,
    Permission.ORDER_READ,
    Permission.ORDER_UPDATE,
    Permission.ADMIN_ALL,
  ],

  [Role.MANAGER]: [
    Permission.USER_READ,
    Permission.ORDER_READ,
    Permission.ORDER_UPDATE,
  ],

  [Role.USER]: [
    Permission.USER_READ,
  ],
};
