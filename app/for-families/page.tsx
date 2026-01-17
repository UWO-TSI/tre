"use client";
import Sidebar from "@/components/sidebar/sidebar";
import ForFamilies from "./forFamilies";
import { pageLayouts } from "./pageLayout";
import HeroImage from "@/components/heroImage/heroImage";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const [selectedPage, setSelectedPage] = useState(
    searchParams.get("page") ?? "Here for You",
  );
  const pages = [
    "Here for You",
    "Financial Support",
    "Emotional Support",
    "Social Support",
    "Research Support",
    "Upcoming Family Events",
    "Q&A",
  ];

  // for handling URL changes to link to page
  useEffect(() => {
    const page = searchParams.get("page"); // gets page query
    if (page && pages.includes(page)) {
      setSelectedPage(page);
    }
  }, [searchParams]);

  const onPageChange = (newPage: string) => {
    window.history.pushState({}, "", `/for-families?page=${newPage}`);
    setSelectedPage(newPage);
  };
  return (
    <div className="flex flex-col items-center w-full bg-white ">
      <HeroImage
        image="/images/child-and-family.webp"
        title="For Families"
        alt="image of family"
        imageVerticalPosition="15%"
      ></HeroImage>
      <div className="max-w-250 grid grid-rows-1 grid-cols-[1fr_3fr] gap-4 pt-25 pb-25">
        <Sidebar
          onItemChange={onPageChange}
          selectedItem={selectedPage}
          title="For Families"
          items={pages}
        ></Sidebar>
        <ForFamilies pageLayout={pageLayouts[selectedPage]}></ForFamilies>
      </div>
    </div>
  );
}

export default Page;
