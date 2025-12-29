import BoardColumn from "@/components/dashboard/BoardColumn";

const COLUMNS = ["Todo", "In Progress", "Done"];

export default function DashboardPage() {
  return (
    <div className="h-full overflow-x-auto p-6">
      <div className="flex gap-4 min-w-max">
        {COLUMNS.map((col) => (
          <BoardColumn key={col} title={col} />
        ))}
      </div>
    </div>
  );
}
