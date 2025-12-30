"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import createBoardForUser from "@/app/actions/createBoard";

export default function TopBar() {
  const [userId, setUserId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Safe localStorage access
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserId(JSON.parse(storedUser)._id);
    }

    const boardDetail = localStorage.getItem("boardDetail");
    if (boardDetail) {
      setBoardName(JSON.parse(boardDetail).boardName);
    }
  }, []);

  async function handleCreateBoard() {
    if (!userId || !boardName.trim()) return;

    setLoading(true);
    try {
      const { boardId } = await createBoardForUser(userId, boardName);
      localStorage.setItem(
        "boardDetail",
        JSON.stringify({ boardId, boardName })
      );
      setOpen(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <header className="flex items-center justify-between px-6 h-14 border-b bg-white dark:bg-zinc-900">
        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm">Board Name :</span>
          <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            {boardName}
          </span>
        </div>

        {/* Middle */}
        <Input placeholder="Search boards..." className="max-w-md" />

        {/* Right */}
        <Button onClick={() => setOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Board
        </Button>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm">Satadhi Halder</span>
        </div>
      </header>

      {/* ✅ Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Board</DialogTitle>
          </DialogHeader>

          <Input
            placeholder="Board name"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />

          <DialogFooter>
            <Button
              onClick={handleCreateBoard}
              disabled={!boardName.trim() || loading}
            >
              {loading ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
