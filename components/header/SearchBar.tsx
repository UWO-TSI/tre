"use client";
import { useState, useEffect, useRef } from "react";

import MagnifyingGlass from "../magnifyingGlass";
import SearchResultsMenu from "./SearchResultsMenu";
import useSearch, { SearchResult } from "@/hooks/useSearch";

export default function SearchBar() {
  const search = useSearch();
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const searchTimeout = useRef<NodeJS.Timeout>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const setResultsVisibility = () => {
    if (query != "") setDropdownVisible(true);
    else setDropdownVisible(false);
  };

  // handles blurring from searchbar and results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // debounce for search results
  useEffect(() => {
    const executeSearch = () => {
      setSearchResults(search.search(query));
      setResultsVisibility();
    };
    if (searchTimeout.current != null) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(executeSearch, 500);
  }, [query]);

  return (
    <div className="flex flex-col relative">
      <div className="bg-btn-yellow w-full h-15 flex flex-row items-center pl-5">
        <MagnifyingGlass />
        <input
          className="w-full h-full text-body p-2 pl-3 text-black font-bold outline-none"
          type="text"
          placeholder="Find what you're looking for..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setResultsVisibility()}
        />
      </div>
      <SearchResultsMenu
        dropdownRef={dropdownRef}
        isDropdownVisible={isDropdownVisible}
        searchResults={searchResults}
      />
    </div>
  );
}
