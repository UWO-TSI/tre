import HeroImage from "@/components/heroImage/heroImage";
import { Event } from "./event";
import EventCard from "./EventCard";
import { client } from "@/sanity/lib/client";

export default async function Page() {
  const events: Event[] = await client.fetch(
    '*[_type == "event"] | order(startDate desc)',
  );

  return (
    <div className="flex flex-col">
      <HeroImage
        title="Upcoming Events"
        image="/images/contact-us-pic.jpg"
        alt="Upcoming Events"
        overlay={true}
      />
      <div className="flex flex-col bg-white py-24 px-8 gap-20">
        {events.map((event) => {
          return (
            <EventCard
              key={event.title}
              name={event.slug.current}
              event={event}
            ></EventCard>
          );
        })}
      </div>
    </div>
  );
}
