import Link from "next/link";

interface EventProps {
  title: string;
  description: string;
  date: Date;
  route: string;
}

export default function Event(props: EventProps) {
  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return props.date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="flex flex-col w-1/4 gap-4">
      <Link
        href={"/events/" + props.route}
        className="text-h3 text-header-teal"
      >
        {props.title}
      </Link>
      <p className="text-body text-secondary-grey">{props.description}</p>
      <p className="text-body-small text-footer-grey">{formatDate()}</p>
    </div>
  );
}
