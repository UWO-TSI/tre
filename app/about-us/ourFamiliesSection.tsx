import Image from "next/image";
import Link from "next/link";

interface OurFamiliesSectionProps {
  image: string;
  alt: string;
  title: string;
  content: string;
  link: string;
}
function OurFamiliesSection(props: OurFamiliesSectionProps) {
  const content = () => {
    const split = props.content.split("\n");

    return split.map((para, index) => {
      return (
        <p
          className="text-main-grey text-body-small pb-1"
          key={index + props.title}
        >
          {para}
        </p>
      );
    });
  };
  const route = "/our-families-stories/" + props.link;
  return (
    <div className="grid grid-cols-[1fr_2.3fr] gap-8 mt-5 mb-5">
      {/* left side */}
      <div className="relative w-full h-55">
        <Image
          layout="fill"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          src={props.image}
          alt={props.alt}
        ></Image>
      </div>
      {/* right side */}
      <div>
        {/* 11 lines */}
        <Link
          href={route}
          className="mb-2 text-header-teal text-h3 hover:text-link-blue cursor-pointer"
        >
          {props.title}
        </Link>
        <div className="mb-4">{content()}</div>
        <Link
          href={route}
          className="text-link-blue text-body-small cursor-pointer"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default OurFamiliesSection;
