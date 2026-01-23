import PageLayout from "@/components/familiesAndHelp/familiesAndHelp";

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
    <PageLayout
      pages={pages}
      pageTitle="For Families"
      bannerHref="/images/child-and-family.webp"
      bannerAlt="image of family"
    ></PageLayout>
  );
}

export default Page;
