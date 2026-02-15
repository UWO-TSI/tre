import Link from "next/link";
import Image from "next/image";
import { FamilyStory } from "./our-families-stories/story";
import { urlForImage } from "@/sanity/lib/client";

function HomePageFeaturedFamily(props: { family: FamilyStory }) {
  const content = () => {
    const split = props.family.shortSummary.split("\n");

    return split.map((para, index) => {
      return (
        <p
          className="text-main-grey text-body pb-1"
          key={index + props.family.title}
        >
          {para}
        </p>
      );
    });
  };
  const route = "/our-families-stories/" + props.family.slug.current;
  return (
    <div className="bg-white flex flex-col items-center py-25">
      <h1 className="text-header-purple text-h1 pb-5">
        Learn more about our families:
      </h1>
      <div className="grid grid-cols-2 gap-12 mt-5 mb-5 max-w-250">
        {/* left side */}
        <div className="relative w-full">
          <Image
            height={3000}
            width={3000}
            src={urlForImage(props.family.heroImage).url()}
            alt={props.family.heroImage.alt}
          ></Image>
        </div>
        {/* right side */}
        <div>
          {/* 11 lines */}
          <Link
            href={route}
            className="mb-2 text-header-teal text-h1 hover:text-link-blue cursor-pointer"
          >
            {props.family.title}
          </Link>
          <div className="mb-4 mt-3">{content()}</div>
          <Link
            href={route}
            className="text-link-blue text-body-small cursor-pointer"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePageFeaturedFamily;
