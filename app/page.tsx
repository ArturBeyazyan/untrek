"use client";
import { Aside } from "./components";
export default function Home() {
  return (
    <div className="Home">
      <Aside />
      <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
      </aside>
      <main className="flex-1 p-4">
      </main>
    </div>
    </div>
  );
}
