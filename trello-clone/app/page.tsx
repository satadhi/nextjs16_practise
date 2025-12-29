"use client";

import { useState } from "react";
import { createUser } from "./actions/createUser";
import { USER_ROLES } from "@/type";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Welcome to Trello Clone
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <Input name="username" placeholder="Username" required />

            <Input name="email" type="email" placeholder="Email" required />

            {/* shadcn Select DOES NOT auto-submit value → use hidden input */}
            <input type="hidden" name="role" id="role-input" />

            <Select
              defaultValue="MEMBER"
              onValueChange={(value: string) => {
                const input = document.getElementById(
                  "role-input"
                ) as HTMLInputElement;
                input.value = value;
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>

              <SelectContent>
                {USER_ROLES.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button type="submit" className="w-full">
              Enter User
            </Button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {message}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
