import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";
import { PageElement } from "./PageElement";
import Image from "next/image";
import YoutubeEmbed from "../embeds/YoutubeEmbed";
import FacebookEmbed from "../embeds/FacebookEmbed";
interface PageContentProps {
  pageLayout: PageElement[];
}

export default function PageContent(props: PageContentProps) {
  return (
    <div className="flex flex-col gap-4 bg-white">
      {props.pageLayout &&
        props.pageLayout.map((element: PageElement, index) => {
          switch (element.type) {
            case "Header":
              return (
                <h1
                  key={element.type + index}
                  id={element.type + index}
                  className="text-h1 text-header-purple anchor"
                >
                  {element.content}
                </h1>
              );
            case "Subheader":
              return (
                <h2
                  key={element.type + index}
                  id={element.type + index}
                  className="text-h2 text-header-teal font-light anchor"
                >
                  {element.content}
                </h2>
              );
            case "TertiaryHeader":
              return (
                <h3
                  key={element.type + index}
                  id={element.type + index}
                  className="text-h3 text-header-purple font-semibold anchor"
                >
                  {element.content}
                </h3>
              );
            case "Paragraph":
              return (
                <div
                  key={element.type + index}
                  id={element.type + index}
                  className="text-body text-secondary-grey font-light"
                >
                  {element.content}
                </div>
              );
            case "Button":
              return (
                <PurpleAccentButton
                  key={element.type + index}
                  className={`${element.alignment === "center" ? "m-auto" : "mr-auto"}`}
                  href={element.href}
                >
                  {element.text}
                </PurpleAccentButton>
              );
            case "List":
              return (
                <ul
                  key={element.type + index}
                  id={element.type + index}
                  className="list-disc text-body pl-8 text-secondary-grey font-light"
                >
                  {element.items.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              );
            case "DoubleList":
              return (
                <ul
                  key={element.type + index}
                  className="list-disc pl-8 text-body text-secondary-grey font-light"
                >
                  <li>
                    {element.list.title}
                    <ul className="list-[circle] pl-12 text-body text-secondary-grey font-light">
                      {element.list.items.map((item) => {
                        return (
                          <li className="py-0.5" key={item}>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              );

            case "Divider":
              return <hr key={element.type + index} className="my-4"></hr>;
            case "MiscElement":
              return (
                <div key={element.type + index} id={element.type + index}>
                  {element.content}
                </div>
              );

            case "Image":
              return (
                <div
                  key={element.type + index}
                  id={element.type + index}
                  className={`relative ${element.className}`}
                >
                  <a href={element.href} target="_blank" rel="noreferrer">
                    <Image
                      fill
                      className="object-contain"
                      src={element.src}
                      alt={element.alt}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </a>
                </div>
              );

            case "YTEmbed":
              return (
                <YoutubeEmbed
                  key={element.url}
                  url={element.url}
                ></YoutubeEmbed>
              );

            case "FBEmbed":
              return (
                <FacebookEmbed
                  key={element.url}
                  url={element.url}
                  width={element.width}
                ></FacebookEmbed>
              );

            case "VerticalSplit":
              return (
                <div key={element.type + index} className="flex gap-8">
                  <div className="flex flex-col w-1/2 relative">
                    <PageContent pageLayout={element.left}></PageContent>
                  </div>
                  <div className="flex flex-col w-1/2 relative">
                    <PageContent pageLayout={element.right}></PageContent>
                  </div>
                </div>
              );
          }
        })}
    </div>
  );
}
