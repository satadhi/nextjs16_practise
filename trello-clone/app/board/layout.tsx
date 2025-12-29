import { ReactNode } from "react";
import TopBar from "@/components/dashboard/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <div className="h-screen flex flex-col bg-zinc-100 dark:bg-black">
      <TopBar />
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
