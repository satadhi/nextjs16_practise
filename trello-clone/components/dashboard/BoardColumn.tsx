import { Card } from "@/components/ui/card";

export default function BoardColumn({ title }: { title: string }) {
  return (
    <div className="w-72 shrink-0">
      <h3 className="mb-3 font-semibold text-sm">{title}</h3>

      <Card className="min-h-[500px] p-3 bg-zinc-50 dark:bg-zinc-800">
        {/* Cards will go here */}
      </Card>
    </div>
  );
}
