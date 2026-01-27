import PageLayout from "@/components/pageLayout/PageLayout";
import { forFamilesPageLayout } from "./forFamiliesPageLayout";
import { Suspense } from "react";

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

  return (
    <Suspense>
      <PageLayout
        pageLayout={forFamilesPageLayout}
        pages={pages}
        pageTitle="For Families"
        bannerHref="/images/child-and-family.webp"
        bannerAlt="image of family"
      ></PageLayout>
    </Suspense>
  );
}

export default Page;
