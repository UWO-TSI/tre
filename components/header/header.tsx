"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLink from "./headerLink";
import YellowAccentButton from "../accentButton/yellowAccentButton";

function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [wasSticky, setWasSticky] = useState<boolean>(false);

  useEffect(() => {
    // let scrollDebounce: NodeJS.Timeout | undefined; // debounce timer

    const handleScroll = () => {
      // past threshhold for showing header, must animate to show
      if (window.scrollY > 1100) {
        setIsSticky(true);
        setWasSticky(true);
      }

      // ALWAYS show header here with clear animations
      else if (window.scrollY <= 100) {
        setIsSticky(false);
        setWasSticky(false);
      }

      // between 100 and 1100, must animate to hide
      else setIsSticky(false);
    };

    // scroll listener
    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getHeaderAnimation = () => {
    // scrollY is below 100 (top of page)
    if (!isSticky && !wasSticky) return "relative";

    // scrollY is past 1100
    if (isSticky) return "sticky animate-header-reveal";

    // scrolly is between 100 and 1100
    return "sticky animate-header-hide";
  };

  return (
    <div
      className={`bg-white transition-transform duration-300 top-0 flex flex-row justify-between align-middle px-4 w-full h-22 z-50  ${getHeaderAnimation()}`}
    >
      <div className="w-full flex flex-row justify-between align-middle bg-white animate-header-appear">
        <a href="/">
          <Image
            className="pl-1 "
            alt={""}
            height={110}
            width={210}
            src={"/images/Childcan-Logo.png.webp"}
          ></Image>
        </a>
        <nav className="flex flex-row items-center">
          <HeaderLink
            title="About"
            items={[
              { link: "", label: "About Us" },
              { link: "", label: "Our Families" },
              { link: "", label: "Our News" },
              { link: "", label: "Our Team" },
              { link: "", label: "Report of Hope" },
              { link: "", label: "Careers" },
            ]}
          ></HeaderLink>
          <HeaderLink title="Need Support?"></HeaderLink>
          <HeaderLink
            title="For Families"
            items={[
              { link: "for-families?page=Here for You", label: "Here for You" },
              {
                link: "for-families?page=Financial Support",
                label: "Financial Support",
              },
              {
                link: "for-families?page=Emotional Support",
                label: "Emotional Support",
              },
              {
                link: "for-families?page=Social Support",
                label: "Social Support",
              },
              {
                link: "for-families?page=Research Support",
                label: "Research Support",
              },
              {
                link: "for-families?page=Upcoming Family Events",
                label: "Upcoming Family Events",
              },
              {
                link: `for-families?page=${encodeURIComponent("Q&A")}`,
                label: "Q&A",
              },
            ]}
          ></HeaderLink>
          <HeaderLink
            title="How to Help"
            items={[
              { link: "/how-to-help?page=Ways to Give", label: "Ways to Give" },
              { link: "/how-to-help?page=PJ Day", label: "PJ Day" },
              { link: "/how-to-help?page=Gold", label: "Gold" },
              { link: "/how-to-help?page=Host an Event", label: "Host an Event" },
              { link: "/how-to-help?page=Marketplace", label: "Marketplace" },
              { link: "/how-to-help?page=Merchandise", label: "Merchandise" },
              { link: "/how-to-help?page=Volunteer", label: "Volunteer" },
              { link: "/how-to-help?page=Our Supporters", label: "Our Supporters" },
            ]}
          ></HeaderLink>
          <HeaderLink title="Events"></HeaderLink>
          <HeaderLink title="Star"></HeaderLink>
          <HeaderLink title="Hands of Hope"></HeaderLink>
          <HeaderLink title="Contact"></HeaderLink>
          <YellowAccentButton>Donate</YellowAccentButton>
        </nav>
      </div>
    </div>
  );
}

export default Header;
