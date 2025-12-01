
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

### For error.tsx

This works opposite to how layout works.It wil take the nearest `error.tsx` to the route where the error occured 

### serverComponenetHMRCache


1. **Automatic request deduplication** server side fetching automatically handles fetch deduplication handling
2. Reduce network water fall


### Caching 

In nextjs there is 3 ways  caching happens 

1. Browser cache : saves static files locally
2. Server Cache : Stores pre-rendered pages and API responses
3. Data Cache : Remembers fetched data to avoid repeat requests 

## Use cache

`'use cache'` can be a server level component or a method look more into it please 