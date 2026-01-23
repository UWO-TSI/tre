import PageLayout from "@/components/familiesAndHelp/familiesAndHelp";

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
    <PageLayout
      pages={pages}
      pageTitle="About"
      bannerHref="/images/boyImage.webp"
      bannerAlt="image of family"
    ></PageLayout>
  );
}

export default Page;
