"use client";

import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import BoardColumn from "@/components/dashboard/BoardColumn";

const COLUMNS = [
  { id: "TODO", title: "Todo" },
  { id: "ONGOING", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_CARDS = [
  { id: "1", title: "Task 1", status: "TODO", order: 1000 },
  { id: "2", title: "Task 2", status: "TODO", order: 2000 },
  { id: "3", title: "Task 3", status: "ONGOING", order: 1000 },
];

export default function DashboardPage() {
  const [cards, setCards] = useState(INITIAL_CARDS);

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setCards((prev) => {
      const activeCard = prev.find((c) => c.id === active.id);
      const overCard = prev.find((c) => c.id === over.id);

      if (!activeCard || !overCard) return prev;

      // ❌ Ignore cross-column for now
      if (activeCard.status !== overCard.status) return prev;

      const columnCards = prev
        .filter((c) => c.status === activeCard.status)
        .sort((a, b) => a.order - b.order);

      const oldIndex = columnCards.findIndex((c) => c.id === active.id);
      const newIndex = columnCards.findIndex((c) => c.id === over.id);

      const reordered = arrayMove(columnCards, oldIndex, newIndex);

      // 🔥 Reassign orders (simple version)
      return prev.map((card) => {
        const index = reordered.findIndex((c) => c.id === card.id);
        if (index === -1) return card;

        return {
          ...card,
          order: (index + 1) * 1000,
        };
      });
    });
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="h-full overflow-x-auto p-6">
        <div className="flex gap-4 min-w-max">
          {COLUMNS.map((col) => (
            <BoardColumn
              key={col.id}
              column={col}
              items={cards
                .filter((c) => c.status === col.id)
                .sort((a, b) => a.order - b.order)}
            />
          ))}
        </div>
      </div>
    </DndContext>
  );
}
