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
    "Careers",
  ];

  return (
    <Suspense>
      <PageLayout
        pageLayout={aboutUsPageLayout}
        pages={pages}
        pageTitle="About Childcan"
        bannerHref="/images/boyImage.webp"
        bannerVertialPosition="70%"
        bannerAlt="image of family"
      ></PageLayout>
    </Suspense>
  );
}

export default Page;
