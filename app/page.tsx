import Header from "@/components/header/header";
import Footer from "@/components/Footer";
import HeroImage from "@/components/heroImage/heroImage";
import QuickNavSection from "./_components/quickNavSection";
import ResponsiveSupport from "./_components/responsiveSupport";
import QuoteBanner from "./_components/quoteBanner";

export default function Home() {
  return (
    <>
      <Header></Header>
      <HeroImage
        title=""
        alt=""
        height="40em"
        textVertialOffset="5em"
        image="/images/family.jpg"
        imageVerticalPosition="20%"
      ></HeroImage>
      {/* The quick links title section */}
      <h1 className="text-h1 text-center p-10 bg-white">Quick Links</h1>
      {/* The menu section */}
      <div className="grid md:grid-rows-2 md:grid-cols-3 xl:grid-cols-5 xl:grid-rows-1 grid-rows-1  bg-white">
        <QuickNavSection
          title={"Newly Diagnosed?"}
          buttonText="Find Support Here"
        ></QuickNavSection>
        <QuickNavSection
          title={"Existing ChildCan Family?"}
          buttonText="For Families"
        ></QuickNavSection>

        <QuickNavSection
          title={"Looking to Help?"}
          buttonText="Volunteering"
        ></QuickNavSection>

        <QuickNavSection
          title={"Donors?"}
          buttonText="How to Help"
        ></QuickNavSection>

        <QuickNavSection
          title={"Curious about Us?"}
          buttonText="About Us"
        ></QuickNavSection>
      </div>
      <ResponsiveSupport></ResponsiveSupport>

      <QuoteBanner
        imageVerticalPosition="0%"
        altText="child walking with parent"
        imageSrc="/images/child.webp"
        author="Childcan Family"
        quote="We are walking forward in hope, forever changed by this experience."
      ></QuoteBanner>

      <Footer></Footer>
    </>
  );
}
