"use client";
import { useMobileMenu } from "./MobileMenuContext";
import YellowAccentButton from "../accentButton/yellowAccentButton";

export default function MobileMenuDrawer() {
  const { setIsMobileMenuOpen, expandedSections, setExpandedSections } =
    useMobileMenu();

  return (
    <div className="mobile-menu-drawer fixed top-0 right-0 h-screen w-4/5 bg-white z-20 md:hidden">
      <div className="relative flex flex-col h-full overflow-y-auto">
        {/* Mobile navigation links */}
        <nav className="flex flex-col w-full px-8 pt-20 pb-6 space-y-1">
          {/* About - expandable */}
          <div className="w-full">
            <button
              onClick={() =>
                setExpandedSections({
                  ...expandedSections,
                  about: !expandedSections.about,
                })
              }
              className="flex items-center justify-start w-full text-left text-h3 text-header-purple py-3 font-normal"
            >
              <span className="mr-2 text-base">+</span>
              <span>About</span>
            </button>
            {expandedSections.about && (
              <div className="pl-8 space-y-1 pb-2">
                <a
                  href="/about-us?page=About Us"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="/about-us?page=Our Families"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Families
                </a>
                <a
                  href="/about-us?page=Our News"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our News
                </a>
                <a
                  href="/about-us?page=Our Team"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Team
                </a>
                <a
                  href="/about-us?page=Report of hope"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Report of Hope
                </a>
                <a
                  href="/about-us?page=Careers"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </a>
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
              onClick={() =>
                setExpandedSections({
                  ...expandedSections,
                  families: !expandedSections.families,
                })
              }
              className="flex items-center justify-start w-full text-left text-h3 text-header-purple py-3 font-normal"
            >
              <span className="mr-2 text-base">+</span>
              <span>For Families</span>
            </button>
            {expandedSections.families && (
              <div className="pl-8 space-y-1 pb-2">
                <a
                  href="/for-families?page=Here for You"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Here for You
                </a>
                <a
                  href="/for-families?page=Financial Support"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Financial Support
                </a>
                <a
                  href="/for-families?page=Emotional Support"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Emotional Support
                </a>
                <a
                  href="/for-families?page=Social Support"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Social Support
                </a>
                <a
                  href="/for-families?page=Research Support"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Research Support
                </a>
                <a
                  href="/for-families?page=Upcoming Family Events"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Upcoming Family Events
                </a>
                <a
                  href={`/for-families?page=${encodeURIComponent("Q&A")}`}
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Q&A
                </a>
              </div>
            )}
          </div>

          {/* How to Help - expandable */}
          <div className="w-full">
            <button
              onClick={() =>
                setExpandedSections({
                  ...expandedSections,
                  help: !expandedSections.help,
                })
              }
              className="flex items-center justify-start w-full text-left text-h3 text-header-purple py-3 font-normal"
            >
              <span className="mr-2 text-base">+</span>
              <span>How to Help</span>
            </button>
            {expandedSections.help && (
              <div className="pl-8 space-y-1 pb-2">
                <a
                  href="/how-to-help?page=Ways to Give"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ways to Give
                </a>
                <a
                  href="/how-to-help?page=PJ Day"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PJ Day
                </a>
                <a
                  href="/how-to-help?page=Gold"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gold
                </a>
                <a
                  href="/how-to-help?page=Host an Event"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Host an Event
                </a>
                <a
                  href="/how-to-help?page=Marketplace"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marketplace
                </a>
                <a
                  href="/how-to-help?page=Merchandise"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Merchandise
                </a>
                <a
                  href="/how-to-help?page=Volunteer"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Volunteer
                </a>
                <a
                  href="/how-to-help?page=Our Supporters"
                  className="block text-body text-secondary-grey py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Supporters
                </a>
              </div>
            )}
          </div>

          {/* Simple links */}
          <a
            href="/events"
            className="block w-full text-h3 text-header-purple py-3 font-normal"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </a>
          <a
            href="/dip"
            className="block w-full text-h3 text-header-purple py-3 font-normal"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dip
          </a>
          <a
            href="/hands-of-hope"
            className="block w-full text-h3 text-header-purple py-3 font-normal"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hands of Hope
          </a>
          <a
            href="/contact"
            className="block w-full text-h3 text-header-purple py-3 font-normal"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>

          {/* Donate button */}
          <div className="pt-10 pb-4 w-full flex justify-center">
            <YellowAccentButton>Donate</YellowAccentButton>
          </div>
        </nav>
      </div>
    </div>
  );
}
