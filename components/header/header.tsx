"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLink from "./headerLink";
import YellowAccentButton from "../accentButton/yellowAccentButton";

function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [wasSticky, setWasSticky] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

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

  // Add class to body when mobile menu is open for slide effect
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const getHeaderAnimation = () => {
    // scrollY is below 100 (top of page)
    if (!isSticky && !wasSticky) return "relative";

    // scrollY is past 1100
    if (isSticky) return "sticky animate-header-reveal";

    // scrolly is between 100 and 1100
    return "sticky animate-header-hide";
  };

  return (
    <>
      <div
        className={`bg-white transition-transform duration-300 top-0 flex flex-row justify-between items-center px-4 w-full h-auto py-2 md:h-22 z-40 ${getHeaderAnimation()}`}
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

          {/* Hamburger menu button - visible on mobile only */}
          <button
            className="md:hidden flex items-center relative w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-main-darkpurple transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2.25" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-main-darkpurple transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-main-darkpurple transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.25" : ""
                }`}
              />
            </div>
          </button>

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
                { link: "about-us?page=Report of hope", label: "Report of Hope" },
                { link: "about-us?page=Careers", label: "Careers" },
              ]}
            ></HeaderLink>
            <HeaderLink link="/support" title="Need Support?"></HeaderLink>
            <HeaderLink
              link="/for-families"
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
              link="how-to-help"
              items={[
                { link: "/how-to-help?page=Ways to Give", label: "Ways to Give" },
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

      {/* Mobile menu drawer */}
      <div
        className="absolute top-0 right-0 h-screen w-4/5 max-w-sm bg-white shadow-2xl z-50 md:hidden translate-x-full"
      >
        <div className="flex flex-col h-full overflow-y-auto items-center pt-20">
          {/* Mobile navigation links */}
          <nav className="flex flex-col w-full px-12 pb-6 space-y-1 items-center">
            {/* About - expandable */}
            <div className="w-full">
              <button
                onClick={() => setExpandedSections({...expandedSections, about: !expandedSections.about})}
                className="flex items-center justify-start w-full text-left text-h3 text-header-purple py-3 font-normal"
              >
                <span className="mr-2 text-base">+</span>
                <span>About</span>
              </button>
              {expandedSections.about && (
                <div className="pl-8 space-y-1 pb-2">
                  <a href="/about-us?page=About Us" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                  <a href="/about-us?page=Our Families" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Families</a>
                  <a href="/about-us?page=Our News" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Our News</a>
                  <a href="/about-us?page=Our Team" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Team</a>
                  <a href="/about-us?page=Report of hope" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Report of Hope</a>
                  <a href="/about-us?page=Careers" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
                </div>
              )}
            </div>

            {/* Need Support - simple link */}
            <a
              href="/support"
              className="block w-full text-h3 text-header-purple py-3 font-normal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Need Support?
            </a>

            {/* For Families - expandable */}
            <div className="w-full">
              <button
                onClick={() => setExpandedSections({...expandedSections, families: !expandedSections.families})}
                className="flex items-center justify-start w-full text-left text-h3 text-header-purple py-3 font-normal"
              >
                <span className="mr-2 text-base">+</span>
                <span>For Families</span>
              </button>
              {expandedSections.families && (
                <div className="pl-8 space-y-1 pb-2">
                  <a href="/for-families?page=Here for You" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Here for You</a>
                  <a href="/for-families?page=Financial Support" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Financial Support</a>
                  <a href="/for-families?page=Emotional Support" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Emotional Support</a>
                  <a href="/for-families?page=Social Support" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Social Support</a>
                  <a href="/for-families?page=Research Support" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Research Support</a>
                  <a href="/for-families?page=Upcoming Family Events" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Upcoming Family Events</a>
                  <a href={`/for-families?page=${encodeURIComponent("Q&A")}`} className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Q&A</a>
                </div>
              )}
            </div>

            {/* How to Help - expandable */}
            <div className="w-full">
              <button
                onClick={() => setExpandedSections({...expandedSections, help: !expandedSections.help})}
                className="flex items-center justify-start w-full text-left text-h3 text-header-purple py-3 font-normal"
              >
                <span className="mr-2 text-base">+</span>
                <span>How to Help</span>
              </button>
              {expandedSections.help && (
                <div className="pl-8 space-y-1 pb-2">
                  <a href="/how-to-help?page=Ways to Give" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Ways to Give</a>
                  <a href="/how-to-help?page=PJ Day" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>PJ Day</a>
                  <a href="/how-to-help?page=Gold" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Gold</a>
                  <a href="/how-to-help?page=Host an Event" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Host an Event</a>
                  <a href="/how-to-help?page=Marketplace" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Marketplace</a>
                  <a href="/how-to-help?page=Merchandise" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Merchandise</a>
                  <a href="/how-to-help?page=Volunteer" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Volunteer</a>
                  <a href="/how-to-help?page=Our Supporters" className="block text-body text-secondary-grey py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Supporters</a>
                </div>
              )}
            </div>

            {/* Simple links */}
            <a href="/events" className="block w-full text-h3 text-header-purple py-3 font-normal" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
            <a href="/dip" className="block w-full text-h3 text-header-purple py-3 font-normal" onClick={() => setIsMobileMenuOpen(false)}>Dip</a>
            <a href="/hands-of-hope" className="block w-full text-h3 text-header-purple py-3 font-normal" onClick={() => setIsMobileMenuOpen(false)}>Hands of Hope</a>
            <a href="/contact" className="block w-full text-h3 text-header-purple py-3 font-normal" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>

            {/* Donate button */}
            <div className="pt-10 pb-4 w-full flex justify-center">
              <YellowAccentButton>Donate</YellowAccentButton>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;