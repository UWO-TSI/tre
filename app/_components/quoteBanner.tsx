import Image from "next/image";

interface QuoteBannerProps {
  quote: string;
  imageSrc: string;
  altText: string;
  author: string;
  imageVerticalPosition?: string;
  height?: string;
}

function QuoteBanner(props: QuoteBannerProps) {
  return (
    <div className="grid  w-fill " style={{ gridTemplateAreas: '"area"' }}>
      <div
        className="w-fill h-110 relative"
        style={{ height: props.height, gridArea: "area" }}
      >
        <Image
          style={{
            objectFit: "cover",
            objectPosition: `center ${props.imageVerticalPosition ?? "center"}`,
          }}
          alt={props.altText}
          src={props.imageSrc}
          fill
        ></Image>
      </div>

      <div
        className="relative h-fill w-fit pl-10 pr-10 flex flex-col justify-center justify-self-center"
        style={{ gridArea: "area" }}
      >
        <h1 className="text-h1 text-white text-center font-bold mb-5">
          {props.quote}
        </h1>
        <h3 className="text-h2 text-white text-right">{"- " + props.author}</h3>
      </div>
    </div>
  );
}

export default QuoteBanner;
