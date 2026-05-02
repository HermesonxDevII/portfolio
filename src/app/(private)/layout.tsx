import "../globals.css";
import Aside from "./components/Aside";

export default function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="flex h-screen overflow-hidden">
        <Aside />

        <div className="w-full min-h-screen flex items-center justify-center px-4">
          {children}
        </div>
      </div>
    </main>
  );
}
