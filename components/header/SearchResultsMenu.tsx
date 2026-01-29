import { SearchResult } from "@/hooks/useSearch";

export default function SearchResultsMenu(props: {
  searchResults: SearchResult;
}) {
  return (
    <div className="flex flex-col sticky animate-dropdown-appear z-10 top-34 w-full bg-white">
      <div className="flex flex-col border-b p-4">
        <h1 className="text-h2 text-header-purple">Search Result</h1>
        <p className="text-[12px] text-footer-grey">
          https://childcan.com/here-for-you
        </p>
        <p className="text-body-small text-secondary-grey w-3/5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="flex flex-col border-b p-4">
        <h1 className="text-h2 text-header-purple">Search Result</h1>
        <p className="text-[12px] text-footer-grey">
          https://childcan.com/here-for-you
        </p>
        <p className="text-body-small text-secondary-grey w-3/5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="flex flex-col border-b p-4">
        <h1 className="text-h2 text-header-purple">Search Result</h1>
        <p className="text-[12px] text-footer-grey">
          https://childcan.com/here-for-you
        </p>
        <p className="text-body-small text-secondary-grey w-3/5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
