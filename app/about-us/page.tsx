import PageLayout from "@/components/pageLayout/PageLayout";
import { aboutUsPageLayout } from "./aboutUsPageLayout";
import { Suspense } from "react";

function Page() {
  const pages = [
    "About Us",
    "Our Families",
    "Our News",
    "Our Team",
    "Report of Hope",
    "Career",
  ];

  return (
    <Suspense>
      <PageLayout
        pageLayout={aboutUsPageLayout}
        pages={pages}
        pageTitle="About"
        bannerHref="/images/boyImage.webp"
        bannerAlt="image of family"
      ></PageLayout>
    </Suspense>
  );
}

export default Page;
