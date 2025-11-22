
# Routes Groups Working
When a route like `/dashboard` is requested, Next.js:

1. **Finds the folder matching the route** → `/dashboard`
2. **Uses its `layout.tsx`** (if it exists)
3. Then **walks up the folder tree** (toward `app/`), applying any parent `layout.tsx` files in order.

It **does not go outside of the `app/` directory** — so any `layout.tsx` files in `routes/` (like your screenshot showed) are ignored because they are not part of the routing tree.

---

### 🔁 How layout tracing actually works:

If you hit `/dashboard/settings`, this is the chain:

```
app/layout.tsx      ← Root layout (always applied)
app/dashboard/layout.tsx  ← Layout for /dashboard/*
app/dashboard/settings/page.tsx ← Your final page
```

It won’t look at anything below `app/` like `routes/` or `components/`.

---

### Key takeaway

> Next.js builds the layout chain **based on folder hierarchy inside `app/`**, not by keyword names like "root".

You understood it well — the layouts are **collected up the folder tree**, not searched outside or in sibling folders.