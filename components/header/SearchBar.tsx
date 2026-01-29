"use client";
import { useState } from "react";
import MagnifyingGlass from "../magnifyingGlass";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="bg-btn-yellow w-full h-15 flex flex-row items-center pl-5">
      <MagnifyingGlass></MagnifyingGlass>
      <input
        className="w-full h-full text-body p-2 pl-3 text-black font-bold outline-none"
        type="text"
        placeholder="Find what you're looking for..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
