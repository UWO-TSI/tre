"use client";

import { useRouter } from "next/navigation";

interface YellowAccentButonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

function YellowAccentButton(props: YellowAccentButonProps) {
  const router = useRouter();
  const onClick = () => {
    if (props.href != undefined) {
      router.push("/" + props.href);
    }
  };
  return (
    <button
      onClick={onClick}
      className={`hover:bg-btn-yellow/80 transition duration-100 bg-btn-yellow text-header-purple cursor-pointer rounded-full font-semibold h-12 px-6 ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default YellowAccentButton;
