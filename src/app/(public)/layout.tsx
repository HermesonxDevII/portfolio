'use client'

import "../globals.css";

import { usePathname } from "next/navigation";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function PublicLayout({ children }: Readonly<{children: React.ReactNode}>) {
  const pathname = usePathname();

  const hideLayoutRoutes = [
    '/login'
  ];

  const showLayout = () => !hideLayoutRoutes.includes(pathname)

  return (
    <div>
      {showLayout() && <Header />}
      {children}
      {showLayout() && <Footer />}
    </div>
  );
}
