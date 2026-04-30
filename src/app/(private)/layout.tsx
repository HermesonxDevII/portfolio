import "../globals.css";
import Aside from "./components/Aside";
import { projects } from "@/data/projects";

export default function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="flex h-screen overflow-hidden">
        <Aside projects={projects} />
        {children}
      </div>
    </main>
  );
}
