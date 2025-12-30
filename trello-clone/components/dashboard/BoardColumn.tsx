"use client";

import { Card } from "@/components/ui/card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import CardItem from "./CardItem";

type Props = {
  column: {
    id: string;
    title: string;
  };
  items: {
    id: string;
    title: string;
  }[];
};

export default function BoardColumn({ column, items }: Props) {
  return (
    <div className="w-72 shrink-0">
      <h3 className="mb-3 font-semibold text-sm">{column.title}</h3>

      <Card className="min-h-[500px] p-3 bg-zinc-50 dark:bg-zinc-800 space-y-2">
        <SortableContext
          items={items.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </SortableContext>
      </Card>
    </div>
  );
}
