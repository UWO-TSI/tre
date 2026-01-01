"use client";
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState<string>("");

    return (
        <div className="bg-btn-yellow w-full h-15">
            <input
                className="w-3/4 bg-white text-body-small p-2 pl-4 rounded-4xl text-[#272727]"
                type="text"
                placeholder="Find what you're looking for..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}