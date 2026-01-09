import Image from "next/image";

interface EventMainImageProps {
  src: string;
  alt: string;
}
function EventMainImage(props: EventMainImageProps) {
  return (
    <div>
      <Image
        layout="fill"
        alt={props.alt}
        src={props.src}
        style={{ objectFit: "cover" }}
      ></Image>
    </div>
  );
}
export default EventMainImage;
