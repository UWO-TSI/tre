import HeroImage from "@/components/heroImage/heroImage";
import { FamilyStory, familyStories } from "../story";

export default async function Page({
  params,
}: {
  params: Promise<{ family_story: string }>;
}) {

  const { family_story } = await params;
  const familyStory: FamilyStory = familyStories[family_story];


  return (
    <div className="flex flex-col bg-white  ">
      <HeroImage
        image={familyStory.heroImage}
        title={familyStory.title}
        alt={familyStory.title}
        textAlignment="center"
      ></HeroImage>

      <div className="flex flex-col gap-12 w-3/5 m-auto py-24 px-9">

        <p className="text-body text-footer-grey">
          {
            familyStory.date.toLocaleDateString("default", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }
        </p>

        <div className="flex flex-col gap-4">
          {
            familyStory.text.map((paragraph, index) => {
              return (
                <p className="text-body text-secondary-grey"  key={paragraph + index}>{paragraph}</p>
              );
            }) 
          }
        </div>

      </div>
    </div>
  );  
}