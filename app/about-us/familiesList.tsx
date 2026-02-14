import { client, urlForImage } from "@/sanity/lib/client";
import { FamilyStory } from "../our-families-stories/story";
import OurFamiliesSection from "./ourFamiliesSection";

async function FamiliesList() {
  const families: FamilyStory[] = await client.fetch(`*[_type == "family" ]`);

  return (
    <>
      {families.map((family, index) => {
        return (
          <OurFamiliesSection
            image={urlForImage(family.heroImage).url()}
            alt={""}
            content={family.shortSummary}
            link={family.slug.current}
            key={index + "family list"}
            title={family.title}
          ></OurFamiliesSection>
        );
      })}
    </>
  );
}
export default FamiliesList;
