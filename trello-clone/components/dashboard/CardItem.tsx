"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function CardItem({
  item,
}: {
  item: { id: string; title: string };
}) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="rounded bg-white dark:bg-zinc-700 p-2 shadow cursor-grab active:cursor-grabbing"
    >
      {item.title}
    </div>
  );
}
