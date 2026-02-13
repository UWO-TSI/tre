"use client";
import QuickNavSection from "./_components/quickNavSection";
import ResponsiveSupport from "./_components/responsiveSupport";
import QuoteBanner from "./_components/quoteBanner";
import SearchBar from "@/components/header/SearchBar";
import SectionBox from "./_components/sectionBox";
import Event from "./_components/Event";
import ImageCarousel from "./_components/imageCarousel";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <SearchBar />
      <ImageCarousel></ImageCarousel>
      {/* The quick links title section */}
      <h1 className="text-h1 text-center p-10 bg-white hidden md:block">
        Quick Links
      </h1>

      {/* The menu section */}
      <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 xl:grid-cols-5 xl:grid-rows-1 bg-white">
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

      {/* Section descriptions and images */}
      <div className="flex flex-col w-full gap-4 px-4 py-10 md:p-10 bg-white">
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
      <div className="flex flex-col w-full gap-4 px-4 py-10 md:p-20 md:py-15 bg-white">
        <h1 className="text-h1 text-main-darkpurple text-center">
          Get Connected. <strong>Get Involved.</strong>
        </h1>
        <p className="text-body-small text-secondary-grey">Upcoming Events</p>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Event
            title="Recreational Therapy - London, ON"
            description="Join us for Recreational Therapy sessions in London! All Childcan families are welcome to register, whether you've previously participated or not."
            date="Nov 16, 2025"
          />
          <Event
            title="Lucan’s Meet & Greet with Santa 2025"
            description="Join Chantel Vanleeuwen and Angela Roberts for Lucan’s Third Annual Meet and Greet with Santa in support of Childcan."
            date="Nov 16, 2025"
          />
          <Event
            title="South Detroit - A Tribute to Journey 2025"
            description="Don't Stop Believin'! Join us at the Kiwanis Theatre in Chatham to hear South Detroit - A Tribute to Journey."
            date="Nov 22, 2025"
          />
        </div>
      </div>
    </div>
  );
}
