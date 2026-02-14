import Image from "next/image";

interface HeroImageProps {
  title: string;
  image: string;
  alt: string;
  imageVerticalPosition?: string;
  height?: string;
  textVertialOffset?: string;
  textAlignment?: React.CSSProperties["textAlign"];
  overlay?: boolean;
}

function HeroImage(props: HeroImageProps) {
  return (
    <div
      style={{ gridTemplateAreas: '"area"' }}
      className="relative grid items-center w-full"
    >
      <div
        style={{ height: props.height, gridArea: "area" }}
        className="relative w-full h-110"
      >
        <Image
          className="animate-image-appear"
          fill
          style={{
            objectPosition: `center ${props.imageVerticalPosition ?? "center"}`,
            objectFit: "cover",
          }}
          alt={props.alt}
          src={props.image}
          priority
          sizes="100vw"
        />
        {props.overlay && (
          <div className="absolute inset-0 bg-linear-to-r from-[#575757]/90 to-[#575757]/10"></div>
        )}
      </div>
      <h1
        style={{
          marginTop: props.textVertialOffset,
          gridArea: "area",
          textAlign: props.textAlignment,
        }}
        className="text-white text-[40px] md:text-[70px] md:text-nowrap animate-hero-appear z-20 text-start mx-[20%]  mt-2"
      >
        {props.title}
      </h1>
    </div>
  );
}

export default HeroImage;
