import { SearchResult } from "@/hooks/useSearch";
import PageContent from "../pageLayout/PageContent";
import Link from "next/link";

export default function SearchResultsMenu(props: {
  searchResults: SearchResult[];
}) {
  return (
        <div className={`flex flex-col absolute top-15 z-100 transition-transform ${props.searchResults.length != 0 ? "animate-dropdown-appear duration-75" : "scale-y-0"} w-full bg-white`}>
        {props.searchResults
            .filter((e, index) => {
            if (index < 3) {
                return e;
            }
            })
            .map((e, index) => {
            return (
                    <div key={e.route + index}  className="flex flex-col border-b p-4">
                        <Link href={e.route}>
                            <h1 className="text-h2 text-header-purple">
                                <PageContent pageLayout={[e.element]}></PageContent>
                            </h1>
                        </Link>

                        <p className="text-[12px] text-foo  ter-grey">{e.route}</p>
                        <div className="text-[12px] text-footer-grey">
                            <PageContent pageLayout={[e.layout[1]]}></PageContent>
                        </div>
                    </div>
            );
            })}
        </div>
    
  );
}
