import { SearchResult } from "@/hooks/useSearch";
import PageContent from "../pageLayout/PageContent";

export default function SearchResultsMenu(props: {
  searchResults: SearchResult[];
}) {
  return (
    <div
      className={`flex flex-col static z-10 transition-transform ${props.searchResults.length != 0 ? "animate-dropdown-appear scale-100 max-h-100 duration-75" : "scale-y-0 max-h-0"} w-full bg-white`}
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
              <h1 className="text-h2 text-header-purple">
                <PageContent pageLayout={[e.element]}></PageContent>
              </h1>
              <p className="text-[12px] text-footer-grey">{e.route}</p>
              <div className="text-[12px] text-footer-grey">
                <PageContent pageLayout={[e.layout[1]]}></PageContent>
              </div>
            </div>
          );
        })}
    </div>
  );
}
