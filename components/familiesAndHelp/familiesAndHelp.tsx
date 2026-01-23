"use client";
import Sidebar from "@/components/sidebar/sidebar";
import ForFamilies from "@/components/familiesAndHelp/PageElement";
import { pageLayouts } from "@/components/familiesAndHelp/pageLayout";
import HeroImage from "@/components/heroImage/heroImage";
import usePageState from "@/hooks/usePageState";


interface PageLayoutProps {
  pages: string[];
  pageTitle: string;
  bannerHref: string;
  bannerAlt: string;
}

export default function PageLayout(props: PageLayoutProps) {

  const { selectedPage, onPageChange } = usePageState(props.pages, props.pages[0]);
  
  return (
    <div className="flex flex-col items-center w-full bg-white ">
      <HeroImage
        image={props.bannerHref}
        title={props.pageTitle}
        alt={props.bannerAlt}
        imageVerticalPosition="15%"
      ></HeroImage>
      <div className=" pl-6 pr-6 max-w-250 grid grid-rows-1 grid-cols-[1fr_3fr] gap-8 pt-25 pb-25">
        <Sidebar
          onItemChange={onPageChange}
          selectedItem={selectedPage}
          title={props.pageTitle}
          items={props.pages}
        ></Sidebar>
        <ForFamilies
          pageLayout={pageLayouts[selectedPage] ?? props.pages[0]}
        ></ForFamilies>
      </div>
    </div>
  );
}
