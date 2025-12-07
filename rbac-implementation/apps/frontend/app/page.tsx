import { User, Permission, Role, ROLE_PERMISSIONS } from "@rbac/shared";

export function hasPermission(user: User, permission: Permission) {
  return user.roles.some((role) =>
    (ROLE_PERMISSIONS[role] as readonly Permission[]).includes(permission)
  );
}

export default async function RBACDemo({ user }: { user: User }) {
  const p = await fetch("http://localhost:4000/api/permission/user"); // this is not used now but during login it should be used.
  const data2 = await p.json();
  console.log(data2);

  user = { roles: [Role.USER], id: "231" };
  const canViewAdminPanel = hasPermission(user, "comments:read");
  const canViewReports = hasPermission(user, "comments:delete");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-semibold">RBAC Demo</h1>
        <span className="text-sm">Roles: {user.roles.join(", ")}</span>
      </div>

      <div className="p-6 space-y-4">
        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">General Dashboard</h2>
          <p className="text-gray-600">Visible to all logged-in users.</p>
        </div>

        {canViewReports && (
          <div className="p-4 bg-white rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Reports Panel</h2>
            <p className="text-gray-600">
              Users with delete permission can access reports.
            </p>
          </div>
        )}

        {canViewAdminPanel && (
          <div className="p-4 bg-white rounded-xl shadow border border-red-300">
            <h2 className="text-lg font-semibold text-red-600 mb-2">
              Admin Panel
            </h2>
            <p className="text-gray-600">
              Only users with update permission can access this.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
