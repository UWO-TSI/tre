"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLink from "./headerLink";
import YellowAccentButton from "../accentButton/yellowAccentButton";
import MobileMenuButton from "./MobileMenuButton";

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
      className={`bg-white transition-transform duration-300 top-0 flex flex-row justify-between items-center px-4 w-full h-auto py-2 md:h-22 z-30 md:z-60 fixed md:${getHeaderAnimation()}`}
    >
      <div className="w-full flex flex-row justify-between items-center bg-white">
        <a href="/" className="flex items-center">
          <Image
            className="h-18.5 w-auto"
            alt="Childcan Logo"
            height={110}
            width={210}
            src={"/images/Childcan-Logo.png.webp"}
            priority
          ></Image>
        </a>

        {/* Mobile menu button */}
        <MobileMenuButton />

        {/* Desktop navigation - hidden on mobile */}
        <nav className="hidden md:flex flex-row items-center">
          <HeaderLink
            title="About"
            link="/about-us"
            items={[
              { link: "about-us?page=About Us", label: "About Us" },
              { link: "about-us?page=Our Families", label: "Our Families" },
              { link: "about-us?page=Our News", label: "Our News" },
              { link: "about-us?page=Our Team", label: "Our Team" },
              {
                link: "about-us?page=Report of hope",
                label: "Report of Hope",
              },
              { link: "about-us?page=Careers", label: "Careers" },
            ]}
          ></HeaderLink>
          <HeaderLink link="/support" title="Need Support?"></HeaderLink>
          <HeaderLink
            link="/for-families"
            title="For Families"
            items={[
              {
                link: "for-families?page=Here for You",
                label: "Here for You",
              },
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
            link="how-to-help"
            items={[
              {
                link: "/how-to-help?page=Ways to Give",
                label: "Ways to Give",
              },
              { link: "/how-to-help?page=PJ Day", label: "PJ Day" },
              { link: "/how-to-help?page=Gold", label: "Gold" },
              {
                link: "/how-to-help?page=Host an Event",
                label: "Host an Event",
              },
              { link: "/how-to-help?page=Marketplace", label: "Marketplace" },
              { link: "/how-to-help?page=Merchandise", label: "Merchandise" },
              { link: "/how-to-help?page=Volunteer", label: "Volunteer" },
              {
                link: "/how-to-help?page=Our Supporters",
                label: "Our Supporters",
              },
            ]}
          ></HeaderLink>
          <HeaderLink link="" title="Events"></HeaderLink>
          <HeaderLink link="" title="Star"></HeaderLink>
          <HeaderLink link="" title="Hands of Hope"></HeaderLink>
          <HeaderLink link="/contact" title="Contact"></HeaderLink>
          <YellowAccentButton className="ml-8">Donate</YellowAccentButton>
        </nav>
      </div>
    </div>
  );
}

export default Header;
