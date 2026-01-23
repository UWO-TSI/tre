import PageLayout from "@/components/familiesAndHelp/familiesAndHelp";
import { howToHelpLayout } from "./howToHelpPageLayout";

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
    <PageLayout
      pageLayout={howToHelpLayout}
      pages={pages}
      pageTitle="How to Help"
      bannerHref="/images/child-and-family.webp"
      bannerAlt="image of family"
    ></PageLayout>
  );
}
