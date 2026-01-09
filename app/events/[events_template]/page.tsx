import HeroImage from "../../../components/heroImage/heroImage";
import { eventList } from "../event";
import EventMainImage from "./eventMainImage";

export default function Page({
  params,
}: {
  params: { events_template: string };
}) {
  const { events_template } = params;

  const event = eventList[events_template];

  if (event == undefined) {
    // have a 404 page appear here
    return <div>event does not exist</div>;
  }

  const eventDate = (): string => {
    return event.startDate.toDateString();
  };

  const eventTime = (): string => {
    return event.startDate.getTime() + " - " + event.endDate.getTime();
  };

  // this is where the event template is going to be
  return (
    <div>
      <HeroImage
        image={event.mainHeroImage}
        alt=""
        height={"20em"}
        title=""
      ></HeroImage>
      {/*  back button */}
      <div className="grid grid-cols-[1fr 2fr]">
        {/* left column */}
        <div className="flex flex-col">
          {/* Title*/}
          <div>{event.title}</div>
          {/* date */}
          <div>{eventDate()}</div>
          {/* time */}
          <div>{eventTime()}</div>
          {/* calendar */}
        </div>
        {/* right column */}
        <div className="flex flex-col">
          {/* description */}
          <div>{event.description}</div>
          {/* button */}
        </div>
      </div>
    </div>
  );
}
