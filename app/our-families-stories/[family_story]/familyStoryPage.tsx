import HeroImage from "@/components/heroImage/heroImage";
import { FamilyStory } from "../story";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/client";

function FamilyStoryPage(props: { family: FamilyStory }) {
  const paragraphArray = props.family.text.split("\n");
  const total = props.family.images.length + paragraphArray.length;
  const imageCount = props.family.images.length;

  const imagesPerParagraph = Math.floor(total / imageCount);

  const content = () => {
    let imageIndex = 0;
    let paraIndex = 0;
    let align: "left" | "right" = "right";
    const list: React.ReactNode[] = [];
    for (let i = 0; i < total; i++) {
      if (i % imagesPerParagraph == 1 && props.family.images.length > 0) {
        const image = props.family.images[imageIndex];
        //show image
        list.push(
          <Image
            style={{
              width: "20em",
              float: align,
              marginLeft: align == "left" ? "0" : "2em",
              marginRight: align == "right" ? "0" : "2em",
            }}
            src={urlForImage(image).url()}
            alt={image.alt}
            key={i + "lol"}
            height={1920}
            width={1080}
          ></Image>,
        );
        imageIndex++;
        align = align == "right" ? "left" : "right";
      } else {
        // show paragraph
        list.push(
          <p key={i + "Para"} className="text-body text-secondary-grey pb-8">
            {paragraphArray[paraIndex]}
          </p>,
        );
        paraIndex++;
      }
    }

    return list;
  };
  return (
    <div className="flex flex-col bg-white  ">
      <HeroImage
        image={props.family.heroImage}
        title={props.family.title}
        alt={props.family.heroImage.alt}
        textAlignment="center"
        imageVerticalPosition="20%"
      ></HeroImage>

      <div className="flex flex-col max-w-190 gap-12 m-auto px-8 py-24 ">
        <p className="text-body text-footer-grey">
          {new Date(props.family.date).toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className="block ">{content()}</div>
      </div>
    </div>
  );
}

export default FamilyStoryPage;
