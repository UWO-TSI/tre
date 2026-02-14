import { FamilyStory, familyStories } from "../story";
import FamilyStoryPage from "./familyStoryPage";

export default async function Page({
  params,
}: {
  params: Promise<{ family_story: string }>;
}) {
  const { family_story } = await params;
  const familyStory: FamilyStory = familyStories[family_story];

  return <FamilyStoryPage family={familyStory}></FamilyStoryPage>;
}
