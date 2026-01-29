import { aboutUsPageLayout } from "@/app/about-us/aboutUsPageLayout";
import { forFamilesPageLayout } from "@/app/for-families/forFamiliesPageLayout";
import { howToHelpLayout } from "@/app/how-to-help/howToHelpPageLayout";
import { PageElement } from "@/components/pageLayout/PageElement";
import { Id, Index } from "flexsearch";
import React, { useEffect, useRef } from "react";
function useSearch() {
  const searchObjects: Record<string, PageElement[]>[] = [
    aboutUsPageLayout,
    forFamilesPageLayout,
    howToHelpLayout,
  ];
  const masterList = useRef<PageElement[]>(null);

  const searchRef = useRef<Index>(null);
  const extractText = (node: React.ReactNode): string => {
    let result = "";

    React.Children.forEach(node, (child) => {
      if (typeof child === "string" || typeof child === "number") {
        result += child;
      } else if (React.isValidElement(child)) {
        // @ts-expect-error TS18046: value is of type 'unknown'
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
    const header_list: PageElement[] = [];
    searchObjects.forEach((pageLayout) => {
      Object.values(pageLayout).forEach((pageElementList) => {
        pageElementList.forEach((ele) => {
          if (
            ele.type == "Header" ||
            ele.type == "Subheader" ||
            ele.type == "TertiaryHeader"
          ) {
            header_list.push(ele);
          }
        });
      });
    });

    // add the master list to index
    header_list.forEach((ele, index) => {
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
  ): PageElement[] => {
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
    }
    return [];
  };

  return {
    search: searchFunction,
  };
}

export default useSearch;
