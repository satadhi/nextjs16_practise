From monorepo root (important — not inside frontend folder):

`pnpm turbo run dev --filter backend`


or to run all services in parallel:

`pnpm turbo run dev --parallel`


## Rbac implementation

Here is a clean, professional **README.md** you can drop into your repo:

---

# 🚀 RBAC Implementation (Fullstack Monorepo)

This repository demonstrates a fullstack **Role-Based Access Control (RBAC)** system using a **Turborepo monorepo** structure.
Both the **backend (Express + TypeScript)** and **frontend (Next.js)** share the same RBAC logic using a centralized package.

---

## 📁 Monorepo Structure

```
rbac-implementation/
│
├── apps/
│   ├── backend/     # Express + TypeScript API
│   └── frontend/    # Next.js frontend
│
├── packages/
│   └── shared/      # Shared RBAC logic (roles, permissions, utils)
│
└── turbo.json       # Turborepo build configuration
```

---

## 🔐 Shared RBAC Module

All RBAC logic is defined in:

```
packages/shared
```

The module contains:

* **Role definitions**
* **Permission definitions**
* **Mapping of role → permissions**
* **Utility function:** `hasPermission(user, permission)`
* **Shared TypeScript types**

This package is imported by both backend & frontend using the workspace alias:

```ts
import { Role, Permission, hasPermission } from "@rbac/shared";
```

### ✅ Benefits of a shared RBAC module

* Single source of truth
* Consistent permission checks across frontend & backend
* No duplicate logic
* Easy to maintain & extend

---

## 🧩 How to Use (Example)

### **Backend (Express) example**

```ts
import { hasPermission, Permission } from "@rbac/shared";

app.get("/comments", (req, res) => {
  if (!hasPermission(req.user, Permission.USER_READ)) {
    return res.status(403).json({ message: "Forbidden" });
  }

  res.json({ comments: [] });
});
```

### **Frontend (Next.js) example**

```tsx
import { hasPermission, Permission } from "@rbac/shared";

export function CommentSection({ user }) {
  if (!hasPermission(user, Permission.USER_READ)) {
    return <p>You do not have permission to view comments.</p>;
  }

  return <CommentsList />;
}
```

---

## ▶️ Getting Started

### Install dependencies

```
pnpm install
```

### Run backend

```
pnpm --filter backend dev
```

### Run frontend

```
pnpm --filter frontend dev
```

---

## 🏗️ Tech Stack

* **Turborepo**
* **Next.js 15+**
* **Express + TypeScript**
* **pnpm workspaces**
* **Shared RBAC library**

---

## 📝 Summary

This repo showcases how **modern monorepos** allow clean code-sharing across backend and frontend.
RBAC rules are maintained in a single shared package, ensuring consistency and reducing bugs.

---