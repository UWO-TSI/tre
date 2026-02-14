import QuickNavSection from "./_components/quickNavSection";
import ResponsiveSupport from "./_components/responsiveSupport";
import QuoteBanner from "./_components/quoteBanner";
import SearchBar from "@/components/header/SearchBar";
import SectionBox from "./_components/sectionBox";
import Event from "./_components/Event";
import ImageCarousel from "./_components/imageCarousel";
import { client } from "@/sanity/lib/client";
import { Event as TypeEvent } from "./events/event";
import { QueryParams } from "sanity";
import { FamilyStory } from "./our-families-stories/story";
import HomePageFeaturedFamily from "./homePageFeaturedFamily";

const fetchClient = (query: string, opts?: QueryParams) => {
  return client.fetch(query, opts);
};
const fetchData = async (): Promise<[TypeEvent[], FamilyStory]> => {
  const events = fetchClient(
    '*[_type == "event" && startDate > $currentDate] | order(startDate asc) [0...3]',
    {
      currentDate: new Date().toISOString(),
    },
  );
  const featuredFamily = fetchClient(
    '*[_type == "homepage" ]{..., featuredFamily->}[0]',
  );
  const data: [
    TypeEvent[],
    { featuredFamily: FamilyStory; carousel: unknown },
  ] = await Promise.all([events, featuredFamily]);
  const family: FamilyStory = data[1].featuredFamily;

  return [data[0], family];
};

export default async function Home() {
  const [events, family] = await fetchData();
  console.log(family);
  return (
    <>
      <SearchBar />
      <ImageCarousel></ImageCarousel>
      {/* The quick links title section */}
      <h1 className="text-h1 text-center p-10 bg-white">Quick Links</h1>

      {/* The menu section */}
      <div className="grid md:grid-rows-2 md:grid-cols-3 xl:grid-cols-5 xl:grid-rows-1 grid-rows-1  bg-white">
        <QuickNavSection
          title={"Newly Diagnosed?"}
          buttonText="Find Support Here"
        ></QuickNavSection>

        <QuickNavSection
          title={"Existing Childcan Family?"}
          buttonText="For Families"
        ></QuickNavSection>

        {/* <div className="flex flex-col items-center pb-20 pt-5">
          <h3 className="text-h3 pb-5 font-semibold">Looking to support?</h3>
          <YellowAccentButton>Ways to Give</YellowAccentButton>
        </div> */}

        <QuickNavSection
          title={"Looking to support?"}
          buttonText="Ways to Give"
        ></QuickNavSection>

        <QuickNavSection
          title={"Looking to Help?"}
          buttonText="Volunteering"
        ></QuickNavSection>

        <QuickNavSection
          title={"Curious about Us?"}
          buttonText="About Us"
        ></QuickNavSection>
      </div>
      <ResponsiveSupport></ResponsiveSupport>
      <HomePageFeaturedFamily family={family}></HomePageFeaturedFamily>

      {/* Section descriptions and images */}
      <div className="flex flex-col w-full gap-4 p-10 bg-white" id="test">
        <SectionBox
          title="For Families"
          imgSrc="/images/ChildcanWalk2023-304.jpg"
          altText="family"
        />
        <SectionBox
          title="For Donors"
          imgSrc="/images/ChildcanWalk2023-108.jpg"
          altText="donors"
        />
        <SectionBox
          title="For Parents"
          imgSrc="/images/ChildcanWalk2023-12.jpg"
          altText="parents"
        />
      </div>

      <QuoteBanner
        imageVerticalPosition="0%"
        altText="child walking with parent"
        imageSrc="/images/child.webp"
        author="Childcan Family"
        quote="We are walking forward in hope, forever changed by this experience."
      ></QuoteBanner>

      {/* Upcoming events */}
      <div className="flex flex-col w-full gap-4 p-20 py-15 bg-white">
        <h1 className="text-h1 text-main-darkpurple text-center">
          Get Connected. <strong>Get Involved.</strong>
        </h1>
        <p className="text-body-small text-secondary-grey">Upcoming Events</p>
        <div className="flex justify-between gap-4">
          {events.map((event, index) => {
            return (
              <Event
                key={index + "home page events"}
                title={event.title}
                description={event.shortSummary}
                date={new Date(event.startDate)}
                route={event.slug.current}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
