"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-6 h-14 border-b bg-white dark:bg-zinc-900">
      {/* Left: User Name */}
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-sm">Satadhi Halder</span>
      </div>

      {/* Middle: Search */}
      <Input placeholder="Search boards..." className="max-w-sm" />

      {/* Right: Add Board */}
      <Button>
        <Plus className="h-4 w-4 mr-2" />
        Add Board
      </Button>
    </header>
  );
}
