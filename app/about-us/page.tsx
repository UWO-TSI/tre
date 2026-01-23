"use client";
import PageLayout from "@/components/familiesAndHelp/familiesAndHelp";
import usePageState from "@/hooks/usePageState";

function Page() {
  const pages = [
    "About Us",
    "Our Families",
    "Our News",
    "Our Team",
    "Report of Hope",
    "Career",
  ];

  const { selectedPage, onPageChange } = usePageState(pages, "About Us");

  return (
    <PageLayout
      pages={pages}
      selectedPage={selectedPage}
      onPageChange={onPageChange}
      pageTitle="About"
      bannerHref="/images/boyImage.webp"
      bannerAlt="image of family"
    ></PageLayout>
  );
}

export default Page;
