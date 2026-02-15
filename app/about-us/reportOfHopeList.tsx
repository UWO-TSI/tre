import { client, urlForImage } from "@/sanity/lib/client";
import ReportOfHopeDocs, { Report } from "./reportOfHopeDocs";
import Image from "next/image";

const fetchReports = async () => {
  const reports: Report[] = await client.fetch(
    `*[_type == "reportofhope" ]{..., "reportUrl": report.asset->url, "financeUrl": finance.asset->url } | order(year desc)`,
  );
  console.log(reports);
  return reports;
};
async function ReportList() {
  const reports: Report[] = await fetchReports();

  if (reports == undefined) {
    return (
      <div className="w-full text-center text-h3 text-header-teal py-20">
        Oops, something went wrong on our end,<br></br> Unable to fetch
        reports...
      </div>
    );
  }

  return (
    <>
      {reports.map((report, index) => {
        return (
          <ReportOfHopeDocs
            key={index + "report" + report.year}
            report={report}
          ></ReportOfHopeDocs>
        );
      })}
    </>
  );
}
export async function ReportImages() {
  const reports: Report[] = await fetchReports();

  if (reports == undefined) {
    return <></>;
  }
  return reports.map((report, index) => {
    if (report.image == undefined) {
      return "";
    }
    return (
      <Image
        alt={report.image.alt}
        src={urlForImage(report.image).url()}
        width={2000}
        height={2000}
        className=" mb-5 mt-20"
        key={index + "report image"}
      ></Image>
    );
  });
}
export default ReportList;
