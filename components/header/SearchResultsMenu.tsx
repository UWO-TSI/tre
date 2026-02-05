import { SearchResult } from "@/hooks/useSearch";
import PageContent from "../pageLayout/PageContent";
import Link from "next/link";
import { PageElement } from "../pageLayout/PageElement";

export default function SearchResultsMenu(props: {
  searchResults: SearchResult[];
  isDropdownVisible: boolean;
  dropdownRef: React.Ref<HTMLDivElement>;
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
      ref={props.dropdownRef}
      className={`flex flex-col absolute top-15 z-100 transition-transform duration-75 origin-top ${props.isDropdownVisible ? "scale-y-100" : "scale-y-0"} w-full bg-white`}
    >
      {props.searchResults.length > 0 ? (
        props.searchResults
          .filter((e, index) => {
            if (index < 3) {
              return e;
            }
          })
          .map((e, index) => {
            e.element.type = "Subheader"; // make all headers look the same on the search results
            return (
              <div key={e.route + index} className="flex flex-col border-b p-4">
                <Link href={e.route}>
                  <PageContent pageLayout={[e.element]}></PageContent>
                </Link>
                <p className="text-[12px] text-footer-grey">{e.route}</p>
                <PageContent
                  pageLayout={nextElement(e.element, e.layout)}
                ></PageContent>
              </div>
            );
          })
      ) : (
        <div className="text-secondary-grey text-body">No Results</div>
      )}
    </div>
  );
}
