"use client";
import { useRouter } from "next/navigation";

interface PurpleAccentButonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

function PurpleAccentButton(props: PurpleAccentButonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (props.href != undefined) router.push(props.href);
    else if (props.onClick != undefined) {
      props.onClick();
    } else {
      // redirect to 404
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`hover:bg-btn-purple/80 transition duration-100 bg-btn-purple text-white cursor-pointer rounded-full p-3 px-8 ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default PurpleAccentButton;
