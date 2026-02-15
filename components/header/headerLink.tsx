"use client";
import Link from "next/link";
import { useState } from "react";

interface HeaderLinkDropdownItem {
  label: string;
  link: string;
}

interface HeaderLinkProps {
  title: string;
  link: string;
  items?: HeaderLinkDropdownItem[];
}

function HeaderLink(props: HeaderLinkProps) {
  const [hover, setHover] = useState(false);
  const putLeadingSlash = (route: string) => {
    return (route.startsWith("/") ? "" : "/") + route;
  };
  return (
    <div
      className="flex align-middle relative z-50"
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <Link
        href={putLeadingSlash(props.link)}
        className="cursor-pointer text-body text-[16px] text-main-grey font-semibold mx-4 my-auto hover:text-header-purple transition-colors z-10"
      >
        {props.title}
      </Link>
      {props.items != undefined ? (
        <div
          className={`${hover ? "animate-dropdown-appear" : ""} transform-[scale(1,0)] absolute flex flex-col items-start bg-white py-3 px-6 left-[-0.5em] pt-10 z-0`}
        >
          {props.items.map((item: HeaderLinkDropdownItem) => {
            return (
              <Link
                key={item.link + item.label + " Drop down"}
                href={putLeadingSlash(item.link)}
                className={`text-nowrap ${hover ? "animate-dropdown-text-appear" : ""}   text-main-grey font-semibold  text-[1em] py-1 hover:text-header-purple`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
}
export default HeaderLink;
