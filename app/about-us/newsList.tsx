import { client, urlForImage } from "@/sanity/lib/client";
import { Image } from "@sanity/types";
import NewsBlerb from "./newsBlerb";

interface News {
  title: string;
  link: string;
  description: string;
  date: string;
  image: { image: Image; alt: string };
}
async function NewsList() {
  const news: News[] = await client.fetch(
    '*[_type == "news"] | order(date desc)',
  );

  if (news == undefined) {
    return <div>idk put something</div>;
  }

  if (news.length == 0) {
    return <div>idk put something</div>;
  }
  return news.map((newsItem, index) => {
    return (
      <NewsBlerb
        key={index + newsItem.link + newsItem.title}
        image={urlForImage(newsItem.image).url()}
        alt={newsItem.image.alt}
        title={newsItem.title}
        subtext={newsItem.description}
        link={newsItem.link}
      ></NewsBlerb>
    );
  });
}

export default NewsList;
