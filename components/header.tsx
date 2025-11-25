import Image from "next/image";
import HeaderLink from "./headerLink";

function Header() {
  return (
    <div className="bg-white flex flex-row justify-between align-middle px-4">
      <Image
        className="pl-5 pb-2 pt-1"
        alt={""}
        height={98}
        width={200}
        src={"/images/Childcan-Logo.png.webp"}
      ></Image>
      <nav className="flex flex-row align-middle">
        <HeaderLink
          title="About"
          items={[
            { link: "", label: "Link 1" },
            { link: "", label: "Link 2" },
            { link: "", label: "Link 3" },
            { link: "", label: "Link 4" },
          ]}
        ></HeaderLink>
        <HeaderLink title="Need Support?" items={[]}></HeaderLink>
        <HeaderLink title="For Families" items={[]}></HeaderLink>
        <HeaderLink title="How to Help" items={[]}></HeaderLink>
        <HeaderLink title="Events" items={[]}></HeaderLink>
        <HeaderLink title="Star" items={[]}></HeaderLink>
        <HeaderLink title="Hands of Hope" items={[]}></HeaderLink>
        <HeaderLink title="Contact" items={[]}></HeaderLink>
        <HeaderLink title="Donatejjjjju" items={[]}></HeaderLink>
      </nav>
    </div>
  );
}

export default Header;
