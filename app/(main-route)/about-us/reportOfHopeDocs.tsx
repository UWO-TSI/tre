import { Image } from "sanity";

export interface Report {
  year: number;
  reportUrl: string;
  financeUrl: string;
  image?: { image: Image; alt: string };
}
interface ReportOfHopeDocsProps {
  report: Report;
}
function ReportOfHopeDocs(props: ReportOfHopeDocsProps) {
  return (
    <div className="mt-4 mb-4">
      <div className="text-header-teal text-h2 mb-6">{`${props.report.year}`}</div>
      <div className="flex flex-col">
        <a
          className="text-body text-link-blue mb-4"
          href={props.report.reportUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Report of Hope " + props.report.year}
        </a>
        <a
          className="text-body text-link-blue mb-4"
          href={props.report.financeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Audited Financial Statements " + props.report.year}
        </a>
      </div>
    </div>
  );
}
export default ReportOfHopeDocs;
