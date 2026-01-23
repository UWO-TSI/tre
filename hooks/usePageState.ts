"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function usePageState(pages: string[], defaultPage?: string) {
  const searchParams = useSearchParams();

  const initialPage = () => {
    const page = searchParams.get("page");
    if (page && pages.includes(page)) return page;
    return defaultPage ?? pages[0];
  };

  const [selectedPage, setSelectedPage] = useState(initialPage);

  // for handling URL changes to link to page
  useEffect(() => {
    const page = searchParams.get("page"); // gets page query
    if (page && pages.includes(page)) {
      setSelectedPage(page);
    }
  }, [searchParams, pages]);

  const onPageChange = (newPage: string) => {
    window.history.pushState(
      {},
      "",
      `?page=${encodeURIComponent(newPage)}`,
    );
    setSelectedPage(newPage);
  };

  return { selectedPage, onPageChange };
}
