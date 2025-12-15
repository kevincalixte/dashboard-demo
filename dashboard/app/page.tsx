import { Dashboard } from "@/components/Dashboard/Dashboard";
import { Sidebar } from "@/components/Sidebar/Sidebar";
// https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin"
export default function Home() {
  return (
    <main className="grid gap-4 p-4 grid-cols-[240px_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
