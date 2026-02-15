import HeroImage from "@/components/heroImage/heroImage";
import { Event } from "./event";
import EventCard from "./EventCard";
import { client } from "@/sanity/lib/client";

export default async function Page() {
  const events: Event[] = await client.fetch(
    '*[_type == "event" && startDate > $currentDate ] | order(startDate asc)',
    {
      currentDate: new Date().toISOString(),
    },
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
        {events != undefined ? (
          events.map((event) => {
            return (
              <EventCard
                key={event.title}
                name={event.slug.current}
                event={event}
              ></EventCard>
            );
          })
        ) : (
          <div className="w-full text-center text-h3 text-header-teal py-20">
            Oops, something went wrong on our end,<br></br> Unable to fetch
            events...
          </div>
        )}
      </div>
    </div>
  );
}
