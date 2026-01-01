import Image from "next/image";
import HeaderLink from "./headerLink";
import YellowAccentButton from "../accentButton/yellowAccentButton";

function Header() {
  return (
    <div className="bg-white flex flex-row justify-between align-middle px-4 h-[88px] z-50">
      <Image
        className="pl-1 "
        alt={""}
        height={110}
        width={210}
        src={"/images/Childcan-Logo.png.webp"}
      ></Image>
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
        <HeaderLink
          title="Need Support?"
          items={[
            { link: "", label: "Here for You" },
            { link: "", label: "Financial Support" },
            { link: "", label: "Emotional Support" },
            { link: "", label: "Social Support" },
            { link: "", label: "Research Support" },
            { link: "", label: "Upcoming Family Events" },
            { link: "", label: "Q&A" },
          ]}
        ></HeaderLink>
        <HeaderLink title="For Families"></HeaderLink>
        <HeaderLink
          title="How to Help"
          items={[
            { link: "", label: "Ways to Give" },
            { link: "", label: "PJ Day" },
            { link: "", label: "Gold" },
            { link: "", label: "Host an Event" },
            { link: "", label: "Marketplace" },
            { link: "", label: "Merchandise" },
            { link: "", label: "Volunteer" },
            { link: "", label: "Our Supporters" },
          ]}
        ></HeaderLink>
        <HeaderLink title="Events"></HeaderLink>
        <HeaderLink title="Star"></HeaderLink>
        <HeaderLink title="Hands of Hope"></HeaderLink>
        <HeaderLink title="Contact"></HeaderLink>
        <YellowAccentButton>Donate</YellowAccentButton>
      </nav>
    </div>
  );
}

export default Header;
