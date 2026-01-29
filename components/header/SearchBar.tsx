"use client";
import { useState, useEffect, useRef } from "react";

import MagnifyingGlass from "../magnifyingGlass";
import SearchResultsMenu from "./SearchResultsMenu";
import useSearch, { SearchResult } from "@/hooks/useSearch";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const search = useSearch();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchTimeout = useRef<NodeJS.Timeout>(null);


  useEffect(() => {
    const executeSearch = () => {
      setSearchResults(search.search(query));
    };
    if(searchTimeout.current != null) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(executeSearch, 500);
    console.log(query);
  }, [query]);

  return (
    <div className="flex flex-col">
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
      <SearchResultsMenu searchResults={searchResults}></SearchResultsMenu>
  </div>
  );
}
