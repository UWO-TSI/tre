"use client";
import PageLayout from "@/components/familiesAndHelp/familiesAndHelp";
import usePageState from "@/hooks/usePageState";

export default function Page() {
      const pages = [
        "Ways to Give",
        "PJ Day",
        "Gold",
        "Host an Event",
        "Marketplace",
        "Merchandise",
        "Volunteer",
        "Our Supporters"
      ];
    
      const { selectedPage, onPageChange } = usePageState(pages, "Ways to Give");
    
      return (
        <PageLayout
          pages={pages}
          selectedPage={selectedPage}
          onPageChange={onPageChange}
          pageTitle="How to Help"
          bannerHref="/images/child-and-family.webp"
          bannerAlt="image of family"
        ></PageLayout>
      );
}