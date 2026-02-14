import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { Image } from "sanity";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
export const builder = imageUrlBuilder(client);

export function urlForImage(source: Image) {
  return builder.image(source).format("webp");
}
