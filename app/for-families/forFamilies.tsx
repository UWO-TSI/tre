import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";
import { PageElement } from "./pageLayout";
interface ForFamiliesProps {
  pageLayout: PageElement[];
}

function ForFamilies(props: ForFamiliesProps) {
  return (
    <div className="flex flex-col gap-4 bg-white">
      {props.pageLayout &&
        props.pageLayout.map((element: PageElement) => {
          switch (element.type) {
            case "Header":
              return (
                <h1 className="w-2/3 text-h1 text-header-purple">
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
                <p className="w-2/3 text-body text-secondary-grey font-light">
                  {element.content}
                </p>
              );
            case "Button":
              return (
                <PurpleAccentButton onClick={() => window.open(element.href)}>
                  {element.text}
                </PurpleAccentButton>
              );
            case "List":
              return (
                <ul className="text-body text-secondary-grey">
                  {element.items.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              );
            case "DoubleList":
              return (
                <ul>
                  <li>
                    {element.list.title}
                    <ul>
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

export default ForFamilies;
