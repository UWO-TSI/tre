import { SearchResult } from "@/hooks/useSearch";
import PageContent from "../pageLayout/PageContent";

export default function SearchResultsMenu(props: {
  searchResults: SearchResult[];
}) {
  return (
    <div className="flex flex-col  animate-dropdown-appear w-full bg-white">
        {
            props.searchResults.filter((e, index) => {
                if (index <= 3) {
                    return e;
                }
            }).map((e) => {
                return (
                    <div key={e.route} className="flex flex-col border-b p-4">
                        <h1 className="text-h2 text-header-purple">
                            <PageContent pageLayout={[e.element]}></PageContent>
                        </h1>
                        <p className="text-[12px] text-footer-grey">
                        {e.route}
                        </p>
                        <div className="text-[12px] text-footer-grey">
                            <PageContent pageLayout={[e.layout[1]]}></PageContent>
                        </div>
                    </div>
                );
            })
        }




      
    </div>
  );
}
