"use client";
import Filter from "@/components/Filter";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-[2rem] gap py-[3rem] items-center min-h-[70%] min-w-screen">
      <h1 className="text-center text-[50px]">Car Dealer App</h1>
      <Filter />
    </main>
  );
}
