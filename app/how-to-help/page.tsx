import PageLayout from "@/components/pageLayout/PageLayout";
import { howToHelpLayout } from "./howToHelpPageLayout";
import { Suspense } from "react";

export default function Page() {
  const pages = [
    "Ways to Give",
    "PJ Day",
    "Gold",
    "Host an Event",
    "Marketplace",
    "Merchandise",
    "Volunteer",
    "Our Supporters",
  ];

  return (
    <Suspense>
      <PageLayout
        pageLayout={howToHelpLayout}
        pages={pages}
        pageTitle="How to Help"
        bannerHref="/images/child-and-family.webp"
        bannerAlt="image of family"
      ></PageLayout>
    </Suspense>
  );
}
