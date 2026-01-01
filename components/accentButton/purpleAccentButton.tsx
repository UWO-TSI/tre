interface PurpleAccentButonProps {
  children?: React.ReactNode;
}

function PurpleAccentButton(props: PurpleAccentButonProps) {
  return (
    <button className="hover:bg-btn-purple/80 transition duration-100 bg-btn-purple text-white cursor-pointer rounded-full p-3 px-8">
      {props.children}
    </button>
  );
}

export default PurpleAccentButton;
