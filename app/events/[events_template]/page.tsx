import Link from "next/link";
import HeroImage from "../../../components/heroImage/heroImage";
import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";
import Image from "next/image";
import OtherEvent from "./otherEvent";
import { client, urlForImage } from "@/sanity/lib/client";
import { Event } from "../event";

export default async function Page({
  params,
}: {
  params: Promise<{ events_template: string }>;
}) {
  const { events_template } = await params;

  const event: Event = await client.fetch(
    `*[_type == "event" && slug.current == "${events_template}"][0]`,
  );

  if (event == undefined) {
    // have a 404 page appear here
    return <div>event does not exist</div>;
  }

  const eventDate = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date(event.startDate);

    return date.toLocaleDateString("en-US", options);
  };

  const eventTime = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    const startTime = new Date(event.startDate).toLocaleTimeString(
      "en-US",
      options,
    );
    const endTime = new Date(event.endDate).toLocaleTimeString(
      "en-US",
      options,
    );
    return `${startTime} - ${endTime}`;
  };

  // this is where the event template is going to be
  return (
    <div className="bg-white">
      <HeroImage
        image={event.mainHeroImage}
        alt=""
        height={"20em"}
        title=""
      ></HeroImage>
      {/* main content container */}
      <div className="flex flex-col w-full items-start md:items-center pl-10 pr-10 pb-20">
        {/*  back button */}
        <div className="max-w-250 gap-10 grid grid-cols-1 md:grid-cols-[1fr_2fr]">
          <Link
            href={"/events"}
            className="text-nowrap items-start md:items-end mr-22 mt-20 mb-20 text-body text-[#18181870]"
          >
            {"← BACK TO ALL EVENTS"}
          </Link>
        </div>

        <div className="max-w-250 gap-10 grid grid-cols-1 md:grid-cols-[1fr_2fr]">
          {/* left column */}
          <div className="flex flex-col items-start md:items-end mr-15">
            <div className="flex flex-col align-start">
              {/* Title*/}
              <div className="text-header-purple text-h1 mb-8 ">
                {event.title}
              </div>
              {/* date */}
              <div className="text-secondary-grey text-body ">
                {eventDate()}
              </div>
              {/* time */}
              <div className="mb-4 text-secondary-grey text-body ">
                {eventTime()}
              </div>
              {/* calendar */}
              <div className="flex flex-row flex-nowrap">
                <a
                  className="text-secondary-grey text-body text-nowrap cursor-pointer"
                  href={event.googleCalenderLink}
                >
                  Google Calendar
                </a>
                <div className="pl-2 pr-2 text-body ">·</div>
                <a
                  className="text-secondary-grey text-body text-nowrap cursor-pointer"
                  href={event.ICSCalenderLink}
                >
                  ICS
                </a>
              </div>
            </div>
          </div>
          {/* right column */}
          <div className="flex flex-col items-start">
            {/* description */}
            <div className="text-body text-main-grey">
              {event.description.split("\n").map((content, index) => {
                return (
                  <p
                    className="text-body text-main-grey pb-2"
                    key={index + "content"}
                  >
                    {content}
                  </p>
                );
              })}
            </div>
            {/* button */}
            <PurpleAccentButton className="ml-auto mr-auto pt-5 pb-5 mt-8 mb-8 text-[20px]">
              {event.buttonTitle}
            </PurpleAccentButton>

            {/* Images */}
            {event.images != undefined
              ? event.images.map((image, index) => {
                  /* Images container */
                  return (
                    <div
                      key={index + "images"}
                      className="relative w-full mb-8"
                    >
                      <Image
                        width={1200}
                        height={800}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        src={urlForImage(image).url()}
                        alt={""}
                      ></Image>
                    </div>
                  );
                })
              : ""}

            {/* Source */}
            <div className="flex flex-row gap-2">
              <div className="text-body text-main-grey ">Source: </div>
              <a className="cursor-pointer text-body text-main-grey ">
                {event.source}
              </a>
            </div>
          </div>
        </div>
        {/* next events section */}
        <div className="max-w-250 w-full flex flex-row justify-between pt-20">
          <OtherEvent
            date={new Date(event.startDate)}
            order="BEFORE"
            title="Other event title"
            link=""
          ></OtherEvent>
          <OtherEvent
            date={new Date(event.endDate)}
            order="AFTER"
            title="Other event title"
            link=""
          ></OtherEvent>
        </div>
      </div>
    </div>
  );
}
