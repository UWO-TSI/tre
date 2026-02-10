import HeroImage from "@/components/heroImage/heroImage";
import { FamilyStory } from "../story";
import Image from "next/image";

function FamilyStoryPage(props: { family: FamilyStory }) {
  const total = props.family.images.length + props.family.text.length;
  const imageCount = props.family.images.length;

  const imagesPerParagraph = Math.floor(total / imageCount);

  const content = () => {
    let imageIndex = 0;
    let paraIndex = 0;
    const list: React.ReactNode[] = [];
    for (let i = 0; i < total; i++) {
      if (i % imagesPerParagraph == 1) {
        const image = props.family.images[imageIndex];
        //show image
        list.push(
          <Image
            style={{
              width: "20em",
              float: image.align,
              marginLeft: image.align == "left" ? "0" : "2em",
              marginRight: image.align == "right" ? "0" : "2em",
            }}
            src={image.src}
            alt={image.alt}
            key={i + image.src}
            height={1920}
            width={1080}
          ></Image>,
        );
        imageIndex++;
      } else {
        // show paragraph
        list.push(
          <p key={i + "Para"} className="text-body text-secondary-grey pb-8">
            {props.family.text[paraIndex]}
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
        alt={props.family.title}
        textAlignment="center"
      ></HeroImage>

      <div className="flex flex-col max-w-190 gap-12 m-auto px-8 py-24 ">
        <p className="text-body text-footer-grey">
          {props.family.date.toLocaleDateString("default", {
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
