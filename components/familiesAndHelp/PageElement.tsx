import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";
import { PageElement } from "./pageLayout";
import Image from "next/image";
interface PageElementProps {
  pageLayout: PageElement[];
}

export default function Element(props: PageElementProps) {
  return (
    <div className="flex flex-col gap-4 bg-white">
      {props.pageLayout &&
        props.pageLayout.map((element: PageElement, index) => {
          switch (element.type) {
            case "Header":
              return (
                <h1
                  key={element.type + index}
                  className="text-h1 text-header-purple"
                >
                  {element.content}
                </h1>
              );
            case "Subheader":
              return (
                <h2
                  key={element.type + index}
                  className="text-h2 text-header-teal font-light"
                >
                  {element.content}
                </h2>
              );
            case "TertiaryHeader":
              return (
                <h3
                  key={element.type + index}
                  className="text-h3 text-header-purple font-medium"
                ></h3>
              );
            case "Paragraph":
              return (
                <p
                  key={element.type + index}
                  className="text-body text-secondary-grey font-light"
                >
                  {element.content}
                </p>
              );
            case "Button":
              return (
                <PurpleAccentButton
                  key={element.type + index}
                  className={`${element.alignment === "center" ? "m-auto" : "mr-auto"}`}
                  onClick={() => window.open(element.href)}
                >
                  {element.text}
                </PurpleAccentButton>
              );
            case "List":
              return (
                <ul
                  key={element.type + index}
                  className="list-disc text-body text-secondary-grey font-light"
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
                  className="list-disc text-body text-secondary-grey font-light"
                >
                  <li>
                    {element.list.title}
                    <ul className="list-[circle] list-inside text-body text-secondary-grey font-light">
                      {element.list.items.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>
                  </li>
                </ul>
              );

            case "Divider":
              return <hr key={element.type + index} className="py-4"></hr>;
            case "MiscElement":
              return <div key={element.type + index}>{element.content}</div>;

            case "Image":
              return (
                <div className={`relative cover ${element.className}`}>
                  <Image
                    key={element.type + index}
                    fill
                    src={element.src}
                    alt={element.alt}
                  ></Image>
                </div>
              );
          }
        })}
    </div>
  );
}
