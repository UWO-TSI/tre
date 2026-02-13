import Image from "next/image";
import Link from "next/link";

interface OurFamiliesSectionProps {
  image: string;
  alt: string;
  title: string;
  content: React.ReactNode | string;
  link: string;
}
function OurFamiliesSection(props: OurFamiliesSectionProps) {
  return (
    <div className="grid grid-cols-[1fr_2.3fr] gap-8 mt-5 mb-5">
      {/* left side */}
      <Link href={props.link} className="relative w-full h-55">
        <Image
          layout="fill"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          src={props.image}
          alt={props.alt}
        ></Image>
      </Link>
      {/* right side */}
      <div>
        <Link href={props.link} className="mb-2 text-header-teal text-h3 hover:text-link-blue cursor-pointer">
          {props.title}
        </Link>
        <div className="text-main-grey text-body-small">{props.content}</div>
        <Link href={props.link} className="text-link-blue text-body-small mt-4">Read More →</Link>
      </div>
    </div>
  );
}

export const ourFamiliesFamily: OurFamiliesSectionProps[] = [
  {
    image: "/images/Tara+family+pic.webp",
    alt: "",
    title: 'Tara "Boom"',
    content: (
      <>
        <div className="mb-2">
          Some stories are etched in your heart long after you hear them.
          Stories of courage, love, and a kind of hope that refuses to fade,
          even in the face of heartbreak. This is one of those stories where
          sorrow is transformed into something extraordinary.
        </div>
        It’s the story of a little girl named Tara “Boom” Houston. A bright,
        vibrant seven-year-old who adored her family, friends, and horses more
        than anything else in the world. It’s a story that begins with laughter
        and ends with lasting light and though we wish we could rewrite the
        middle, what remains is a legacy that continues to bring hope to
        countless others.
      </>
    ),

    link: "/our-families-stories/tara",
  },
  {
    image: "/images/Ethan+collage.webp",
    alt: "",
    title: "Ethan - part of the Childcan family",
    content:
      "It was the summer of 2020 and Ethan’s family was filled with excitement and, of course, mixed with a few nerves, as Ethan prepared to start Junior Kindergarten. But in mid-August, their world was turned upside down. At the age of 4, Ethan was diagnosed with Acute Lymphoblastic Leukemia. The carefree summer days they had imagined were suddenly replaced with hospital stays, appointments, and many procedures for Ethan.",
    link: "/our-families-stories/ethan",
  },
];
export default OurFamiliesSection;
