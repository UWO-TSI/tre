"use client";
import { useState } from "react";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex flex-col">
      <div className="bg-btn-yellow w-full h-15">
        <input
          className="w-full h-full text-body p-2 pl-6 text-black font-bold outline-none"
          type="text"
          placeholder="Find what you're looking for..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <SearchResults></SearchResults>
    </div>
  );
}
