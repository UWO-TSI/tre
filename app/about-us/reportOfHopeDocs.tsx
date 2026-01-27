interface ReportOfHopeDocsProps {
  title: string;
  items: { title: string; link: string }[];
}
function ReportOfHopeDocs(props: ReportOfHopeDocsProps) {
  return (
    <div className="mt-4 mb-4">
      <div className="text-header-teal text-h2 mb-6">{props.title}</div>
      <div className="flex flex-col">
        {props.items.map((item, index) => {
          return (
            <a
              className="text-body text-link-blue mb-4"
              key={index + item.title + "doc list"}
              href={item.link}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default ReportOfHopeDocs;
export const reportOfHopeDocsList: ReportOfHopeDocsProps[] = [
  {
    title: "2024",
    items: [
      { title: "2024 Report of Hope", link: "" },
      { title: "2024 Audited Financial Statements", link: "" },
    ],
  },
  {
    title: "2023",
    items: [
      { title: "2023 Report of Hope", link: "" },
      { title: "2023 Audited Financial Statements", link: "" },
    ],
  },
  {
    title: "2022",
    items: [
      { title: "2022 Report of Hope", link: "" },
      { title: "2022 Audited Financial Statements", link: "" },
    ],
  },
  {
    title: "2021",
    items: [
      { title: "2021 Report of Hope", link: "" },
      { title: "2021 Audited Financial Statements", link: "" },
    ],
  },
];
