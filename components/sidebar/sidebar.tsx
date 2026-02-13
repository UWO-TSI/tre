"use client";
import { useState } from "react";

interface SidebarProps {
  title: string;
  items: string[];
  selectedItem: string;
  onItemChange: (newItem: string) => void;
}
function Sidebar(props: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col ">
      <div
        className="flex flex-row pb-2 cursor-pointer md:cursor-default"
        onClick={() => {
          setOpen((open) => !open);
        }}
      >
        <div className="text-h2 font-medium text-secondary-grey">
          {props.title}
        </div>
        <Plus open={open}></Plus>
      </div>
      <div
        className={`${open ? "" : "hidden"} md:block animate-dropdown-appear`}
      >
        {props.items.map((item, index) => {
          const isSelected = props.selectedItem == item;
          return (
            <div
              onClick={() => {
                props.onItemChange(item);
              }}
              className={`transition-colors text-[16px] pb-2 font-medium ${isSelected ? "text-header-teal" : "text-main-grey"}  cursor-pointer`}
              key={index + item}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
function Plus(props: { open: boolean }) {
  return (
    <div
      className={`md:hidden text-main-grey flex items-center justify-center pl-3 cursor-pointer `}
    >
      <svg
        className={`transition-transform ${props.open ? "rotate-45" : "rotate-0"}`}
        width="14px"
        height="14px"
        viewBox="0 0 32 32"
        id="i-plus"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M16 2 L16 30 M2 16 L30 16" />
      </svg>
    </div>
  );
}
export default Sidebar;
