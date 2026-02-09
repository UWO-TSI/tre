"use client";
import FacebookEmbed from "@/components/embeds/FacebookEmbed";
import HeroImage from "@/components/heroImage/heroImage";
import BeholdWidget from "@behold/react";

export default function Page() {
  return (
    <div>
      <HeroImage
        title="Socials"
        alt=""
        height="260px"
        textVertialOffset="20px"
        image="/images/_DSC5337.JPG"
        imageVerticalPosition="40%"
        overlay={true}
      ></HeroImage>

      <div className="flex justify-center border bg-white py-24 px-9">
        <div className="">
          <FacebookEmbed
            url="https://www.facebook.com/Childcan"
            type="page"
          ></FacebookEmbed>
        </div>
        <div className="flex items-center w-1/2">
          <BeholdWidget feedId="HLZUhXWim7bSX8uQvac1"></BeholdWidget>
        </div>
      </div>
    </div>
  );
}
