import Sidebar from "@/components/sidebar/sidebar";
import ForFamilies from "@/components/familiesAndHelp/PageElement";
import { pageLayouts } from "@/app/for-families/pageLayout";
import HeroImage from "@/components/heroImage/heroImage";

interface PageLayoutProps {
  pages: string[];
  selectedPage: string;
  onPageChange: (newPage: string) => void;
  pageTitle: string;
  bannerHref: string;
  bannerAlt: string;
}

export default function PageLayout(props: PageLayoutProps) {
  return (
    <div className="flex flex-col items-center w-full bg-white ">
      <HeroImage
        image={props.bannerHref}
        title={props.pageTitle}
        alt={props.bannerAlt}
        imageVerticalPosition="15%"
      ></HeroImage>
      <div className="max-w-250 grid grid-rows-1 grid-cols-[1fr_3fr] gap-4 pt-25 pb-25">
        <Sidebar
          onItemChange={props.onPageChange}
          selectedItem={props.selectedPage}
          title={props.pageTitle}
          items={props.pages}
        ></Sidebar>
        <ForFamilies
          pageLayout={pageLayouts[props.selectedPage] ?? props.pages[0]}
        ></ForFamilies>
      </div>
    </div>
  );
}
