import PageContent from "@/components/pageLayout/PageContent";
import { Event } from "./event";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/client";

export default function EventCard(props: { name: string; event: Event }) {
  return (
    <div className="flex flex-wrap m-auto w-5/6 justify-center gap-8">
      <div className="w-75 p-2 relative h-55">
        <Link href={`/events/${props.name}`}>
          <Image
            fill
            className="object-cover"
            src={urlForImage(props.event.mainHeroImage).url()}
            alt={""}
          ></Image>
          <div className="flex flex-col absolute w-17 aspect-square pt-1 bg-white top-2 right-2 text-secondary-grey">
            <p className="text-center text-body-small">
              {new Date(props.event.startDate)
                .toLocaleString("default", { month: "short" })
                .toUpperCase()}
            </p>
            <p className="text-center text-h2">
              {new Date(props.event.startDate).getDate()}
            </p>
          </div>
        </Link>
      </div>
      <div className="w-1/2">
        <PageContent
          pageLayout={[
            {
              type: "Header",
              content: (
                <Link href={`/events/${props.name}`}>{props.event.title}</Link>
              ),
            },
            {
              type: "Paragraph",
              content: (
                <>
                  {new Date(props.event.startDate).toDateString()}
                  <br />
                  {props.event.location}
                </>
              ),
            },
            {
              type: "Paragraph",
              content: <>{props.event.shortSummary}</>,
            },
          ]}
        ></PageContent>
      </div>
    </div>
  );
}
