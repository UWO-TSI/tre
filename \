"use client";
import Link from "next/link";
import { useState } from "react";

interface HeaderLinkDropdownItem {
  label: string;
  link: string;
}

interface HeaderLinkProps {
  title: string;
  items: HeaderLinkDropdownItem[];
}

function HeaderLink(props: HeaderLinkProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex align-middle relative"
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <div className="cursor-pointer text-body text-main-grey font-semibold mx-4 my-auto text-[16px] hover:text-btn-purple transition-colors">
        {props.title}
      </div>
      {props.items.length ? (
        <div
          className={`transition-transform absolute flex flex-col items-start h-auto ${hover ? "transform-[matrix(1,0,0,1,0,0)]" : ""}  transform-[matrix(1,0,0,0,0,0)] bg-white py-4 px-6 left-[-0.5em] top-17`}
        >
          {props.items.map((item: HeaderLinkDropdownItem) => {
            return (
              <Link
                href={item.link}
                className={`transition-transform ${hover ? "matrix(1,0,0,1,0,0)" : "matrix(1,0,0,0,0,0)"} text-main-darkpurple transition delay-200 font-semibold  text-[1em] py-1 hover:text-btn-purple`}
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
