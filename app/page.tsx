import Header from "@/components/header";
import HeroImage from "@/components/heroImage";

export default function Home() {
  return (
    <>
      <Header></Header>
      <HeroImage
        title="About Childcan"
        alt=""
        image="/images/boyImage.webp"
        imageVerticalPosition="67%"
      ></HeroImage>
    </>
  );
}
