import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";
import { PageElement } from "../../app/for-families/pageLayout";
interface PageElementProps {
  pageLayout: PageElement[];
}

export default function Element(props: PageElementProps) {
  return (
    <div className="flex flex-col gap-4 bg-white">
      {props.pageLayout &&
        props.pageLayout.map((element: PageElement) => {
          switch (element.type) {
            case "Header":
              return (
                <h1 className="text-h1 text-header-purple">
                  {element.content}
                </h1>
              );
            case "Subheader":
              return (
                <h2 className="text-h2 text-header-teal font-light">
                  {element.content}
                </h2>
              );
            case "TertiaryHeader":
              return (
                <h3 className="text-h3 text-header-purple font-medium"></h3>
              );
            case "Paragraph":
              return (
                <p className="text-body text-secondary-grey font-light">
                  {element.content}
                </p>
              );
            case "Button":
              return (
                <PurpleAccentButton
                  className="w-1/3 m-auto"
                  onClick={() => window.open(element.href)}
                >
                  {element.text}
                </PurpleAccentButton>
              );
            case "List":
              return (
                <ul className="list-disc text-body text-secondary-grey font-light">
                  {element.items.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              );
            case "DoubleList":
              return (
                <ul className="list-disc text-body text-secondary-grey font-light">
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
          }
        })}
    </div>
  );
}
