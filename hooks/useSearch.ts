import { aboutUsPageLayout } from "@/app/(main-route)/about-us/aboutUsPageLayout";
import { forFamilesPageLayout } from "@/app/(main-route)/for-families/forFamiliesPageLayout";
import { howToHelpLayout } from "@/app/(main-route)/how-to-help/howToHelpPageLayout";
import { PageElement } from "@/components/pageLayout/PageElement";
import { Id, Index } from "flexsearch";
import React, { useEffect, useRef } from "react";

export type SearchResult = {
  route: string;
  element: PageElement;
  layout: PageElement[];
};
function useSearch() {
  const searchObjects: Record<string, Record<string, PageElement[]>> = {
    "about-us": aboutUsPageLayout,
    "for-families": forFamilesPageLayout,
    "how-to-help": howToHelpLayout,
  };

  const masterList = useRef<SearchResult[]>(null);

  const searchRef = useRef<Index>(null);
  const searchPage = (
    page: string,
    section: string,
    list: PageElement[],
  ): SearchResult[] => {
    let header_list: SearchResult[] = [];
    list.forEach((ele, index) => {
      switch (ele.type) {
        case "Header":
        case "Subheader":
        case "TertiaryHeader": {
          header_list.push({
            route: "/" + page + "?page=" + section + "#" + ele.type + index,
            element: ele,
            layout: list,
          });
          break;
        }
        case "VerticalSplit": {
          const right = searchPage(page, section, ele.right);
          const left = searchPage(page, section, ele.left);

          header_list = header_list.concat(right);
          header_list = header_list.concat(left);

          break;
        }
      }
    });
    return header_list;
  };

  const extractText = (node: React.ReactNode): string => {
    let result = "";

    React.Children.forEach(node, (child) => {
      if (typeof child === "string" || typeof child === "number") {
        result += child;
      } else if (React.isValidElement(child)) {
        // @ts-expect-error TS18046
        result += extractText(child.props.children);
      }
    });

    return result;
  };

  useEffect(() => {
    searchRef.current = new Index({
      tokenize: "forward", // enables partial matches
      cache: true, // speeds up repeated queries
    });

    // add everything to an indexable master list
    let header_list: SearchResult[] = [];
    Object.entries(searchObjects).forEach(
      ([page, pageLayout]: [string, Record<string, PageElement[]>]) => {
        const list = Object.entries(pageLayout);
        list.forEach(([route, ele_list]) => {
          const found_headers = searchPage(page, route, ele_list);
          header_list = header_list.concat(found_headers);
        });
      },
    );
    console.log(header_list.length);

    // add the master list to index
    header_list.forEach((result, index) => {
      const ele = result.element;
      if (
        ele.type == "Header" ||
        ele.type == "Subheader" ||
        ele.type == "TertiaryHeader"
      ) {
        const content = extractText(ele.content);
        searchRef.current?.add(index, content);
      } else {
        console.error("Header filter did not work");
      }
    });
    masterList.current = header_list;
  }, []);
  const searchFunction = (
    query: string,
    fuzzy: boolean = true,
  ): SearchResult[] => {
    const res = searchRef.current?.search({ query: query, suggest: fuzzy });
    if (res != undefined) {
      return res
        .map((id: Id) => {
          if (typeof id === "number") {
            return masterList.current![id];
          }
        })
        .filter((ele) => {
          return ele != undefined;
        });
    } else {
      console.log("searchRef.current is undefined");
    }
    return [];
  };

  return {
    search: searchFunction,
  };
}

export default useSearch;
