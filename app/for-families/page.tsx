"use client";
import PageLayout from "@/components/familiesAndHelp/familiesAndHelp";
import usePageState from "@/hooks/usePageState";

function Page() {
  const pages = [
    "Here for You",
    "Financial Support",
    "Emotional Support",
    "Social Support",
    "Research Support",
    "Upcoming Family Events",
    "Q&A",
  ];

  const { selectedPage, onPageChange } = usePageState(pages, "Here for You");

  return (
    <PageLayout
      pages={pages}
      selectedPage={selectedPage}
      onPageChange={onPageChange}
      pageTitle="For Families"
      bannerHref="/images/child-and-family.webp"
      bannerAlt="image of family"
    ></PageLayout>
  );
}

export default Page;
