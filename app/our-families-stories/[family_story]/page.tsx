import { client } from "@/sanity/lib/client";
import { FamilyStory } from "../story";
import FamilyStoryPage from "./familyStoryPage";

// this is default object to merge with the sanity object to ensure that all properties are set, this is mostly for the arrays
const defualtFamily = {
  title: "",
  date: undefined,
  text: [],
  heroImage: undefined,
  slug: undefined,
  images: [],
};
export default async function Page({
  params,
}: {
  params: Promise<{ family_story: string }>;
}) {
  const { family_story } = await params;

  const family: FamilyStory = await client.fetch(
    `*[_type == "family" && slug.current == "${family_story}" ][0]`,
  );

  if (family == undefined) {
    return <div>404 idk</div>;
  }

  const mergedFamily = { ...defualtFamily, ...family };
  return <FamilyStoryPage family={mergedFamily}></FamilyStoryPage>;
}
