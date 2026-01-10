interface PurpleAccentButonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function PurpleAccentButton(props: PurpleAccentButonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`hover:bg-btn-purple/80 transition duration-100 bg-btn-purple text-white cursor-pointer rounded-full p-3 px-8 ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default PurpleAccentButton;
