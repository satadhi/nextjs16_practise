"use client";

import { useState } from "react";
import { createUser } from "./actions/createUser";
import { USER_ROLES } from "@/type";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const result = await createUser(formData);

    if (result?.error) {
      setMessage(result.error);
    } else {
      setMessage("User created successfully");
    }
    localStorage.setItem(
      "user",
      JSON.stringify(Object.fromEntries(formData.entries()))
    );
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="text-5xl"> Welcome to Trello Clone</div>
        <form action={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <select
            name="role"
            defaultValue="MEMBER"
            className="w-full border p-2 rounded"
          >
            {USER_ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <Button type="submit" variant="outline">
            Enter User
          </Button>
        </form>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </main>
    </div>
  );
}
