import { client } from "@/sanity/lib/client";
import { Event } from "../event";
import Link from "next/link";

interface OtherEventProps {
  date: string;
  order: "BEFORE" | "AFTER";
}
async function OtherEvent(props: OtherEventProps) {
  const afterQuery = `*[_type == "event" && startDate > $date ] | order(startDate asc) [0]`;
  const beforeQuery = `*[_type == "event" && startDate < $date ] | order(startDate desc) [0]`;
  const event: Event = await client.fetch(
    props.order == "BEFORE" ? beforeQuery : afterQuery,
    {
      date: props.date,
    },
  );

  if (event == undefined) {
    return <></>;
  }

  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return new Date(event.startDate).toLocaleDateString("en-US", options);
  };

  const orderString = () => {
    switch (props.order) {
      case "AFTER":
        return "Earlier Event";
      case "BEFORE":
        return "Later Event";
    }
  };
  return (
    <div
      className={`flex flex-col ${props.order == "BEFORE" ? "items-start" : "items-end"}`}
    >
      <div className="text-body text-main-grey">{`${orderString()}: ${formatDate()}`}</div>
      <Link
        href={"/events/" + event.slug.current}
        className="cursor-pointer text-body text-main-grey"
      >
        {event.title}
      </Link>
    </div>
  );
}

export default OtherEvent;
