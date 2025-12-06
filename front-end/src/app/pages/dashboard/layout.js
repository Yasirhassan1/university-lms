"use client";
import { useState } from "react";
import Header from "@/app/components/header/Header";
import Sidebar from "@/app/components/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className="
        grid min-h-screen
        grid-cols-1 lg:grid-cols-[320px_1fr]
        grid-rows-[80px_1fr]
      "
    >
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Content */}
      <main className="col-start-1 lg:col-start-2 row-start-2 p-6 bg-gray-100 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
