import Image from "next/image";

interface HeroImageProps {
  title: string;
  image: string;
  alt: string;
  imageVerticalPosition?: string;
}
function HeroImage(props: HeroImageProps) {
  return (
    <div
      style={{ gridTemplateAreas: '"area"' }}
      className="relavtive grid items-center"
    >
      <div style={{ gridArea: "area" }} className="relative w-full h-110 ">
        <Image
          className="animate-image-appear"
          layout="fill"
          objectFit="cover"
          objectPosition={`center ${props.imageVerticalPosition ?? "center"}`}
          alt={props.alt}
          src={props.image}
        ></Image>
      </div>
      <h1
        style={{ gridArea: "area" }}
        className="text-white text-[40px] md:text-[70px] md:text-nowrap animate-hero-appear z-20 text-start mx-[20%] w-full mt-2"
      >
        {props.title}
      </h1>
    </div>
  );
}

export default HeroImage;
