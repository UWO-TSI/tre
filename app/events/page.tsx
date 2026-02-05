import HeroImage from "@/components/heroImage/heroImage";
import { eventList } from "./event";
import EventCard from "./EventCard";

export default function Page() {
    
    
    return (
        <div className="flex flex-col">
            <HeroImage
                title="Upcoming Events"
                image="/images/contact-us-pic.jpg"
                alt="Upcoming Events"
                overlay={true}
            />
            <div className="flex flex-col bg-white py-24 px-8 gap-20">
                {
                    
                    Object.entries(eventList).map((event) => {
                        return (
                            <EventCard key={event[0]} name={event[0]} event={event[1]}></EventCard>
                        );
                    })
                }
            </div>
            
        </div>
    );
}