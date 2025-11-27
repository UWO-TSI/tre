"use client";
import Link from "next/link";
import { useState } from "react";

interface HeaderLinkDropdownItem {
  label: string;
  link: string;
}

interface HeaderLinkProps {
  title: string;
  items?: HeaderLinkDropdownItem[];
}

function HeaderLink(props: HeaderLinkProps) {
  const [hover, setHover] = useState(false);
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
      <div className="cursor-pointer text-body text-main-grey font-semibold mx-4 my-auto text-[18px] hover:text-header-purple transition-colors">
        {props.title}
      </div>
      {props.items != undefined ? (
        <div
          className={`${hover ? "animate-dropdown-appear" : ""} transform-[scale(1,0)] absolute flex flex-col items-start bg-white py-3 px-6 left-[-0.5em] top-10`}
        >
          {props.items.map((item: HeaderLinkDropdownItem) => {
            return (
              <Link
                key={item.link + item.label + " Drop down"}
                href={item.link}
                className={`text-nowrap ${hover ? "animate-dropdown-text-appear" : ""} opacity-0  text-main-grey font-semibold  text-[1em] py-1 hover:text-header-purple`}
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
