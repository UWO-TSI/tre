interface OtherEventProps {
  date: Date;
  title: string;
  order: "BEFORE" | "AFTER";
  link: string;
}
function OtherEvent(props: OtherEventProps) {
  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return props.date.toLocaleDateString("en-US", options);
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
      <a href={props.link} className="cursor-pointer text-body text-main-grey">
        {props.title}
      </a>
    </div>
  );
}

export default OtherEvent;
