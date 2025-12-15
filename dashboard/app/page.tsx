import { Dashboard } from "@/components/Dashboard/Dashboard";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="grid gap-4 grid-cols-[15rem_1fr] mx-5 mt-5">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
