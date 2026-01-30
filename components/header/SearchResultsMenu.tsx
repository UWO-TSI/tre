import { SearchResult } from "@/hooks/useSearch";
import PageContent from "../pageLayout/PageContent";
import Link from "next/link";
import { PageElement } from "../pageLayout/PageElement";

export default function SearchResultsMenu(props: {
  searchResults: SearchResult[];
}) {
  const nextElement = (
    ele: PageElement,
    layout: PageElement[],
  ): PageElement[] => {
    const findIndex = layout.findIndex((searchEle) => {
      return searchEle == ele;
    });
    if (findIndex == undefined) {
      return [];
    }
    let currIndex = findIndex + 1;
    while (currIndex < layout.length && layout[currIndex].type != "Paragraph") {
      currIndex++;
    }
    if (currIndex == layout.length) {
      return [];
    }
    return [layout[currIndex]];
  };
  return (
    <div
      className={`flex flex-col absolute top-15 z-100 transition-transform ${props.searchResults.length != 0 ? "animate-dropdown-appear duration-75" : "scale-y-0"} w-full bg-white`}
    >
      {props.searchResults
        .filter((e, index) => {
          if (index < 3) {
            return e;
          }
        })
        .map((e, index) => {
          return (
            <div key={e.route + index} className="flex flex-col border-b p-4">
              <Link href={e.route}>
                <h1 className="text-h2 text-header-purple">
                  <PageContent pageLayout={[e.element]}></PageContent>
                </h1>
              </Link>

              <p className="text-[12px] text-foo  ter-grey">{e.route}</p>
              <div className="text-[12px] text-footer-grey">
                <PageContent
                  pageLayout={nextElement(e.element, e.layout)}
                ></PageContent>
              </div>
            </div>
          );
        })}
    </div>
  );
}
