"use client";
import Sidebar from "@/components/sidebar/sidebar";
import ForFamilies from "./forFamilies";
import { hereForYouPage } from "./pageLayout";
import HeroImage from "@/components/heroImage/heroImage";
import { useState } from "react";
import { useParams } from "next/navigation";

function Page() {
  const { page } = useParams();
  const [selectedPage, setSelectedPage] = useState(
    page?.toString() ?? "Here for You",
  );
  const pages = [
    "Here for You",
    "Financial Support",
    "Emotional Suport",
    "Soical Support",
    "Research Support",
    "Upcoming Family Events",
    "Q&A",
  ];
  const onPageChange = (newPage: string) => {
    window.history.pushState({}, "", `/for-familes?page=${newPage}`);
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
        <ForFamilies pageLayout={hereForYouPage}></ForFamilies>
      </div>
    </div>
  );
}

export default Page;
