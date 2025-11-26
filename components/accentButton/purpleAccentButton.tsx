interface PurpleAccentButonProps {
  children?: React.ReactNode;
}

function PurpleAccentButton(props: PurpleAccentButonProps) {
  return (
    <button className="hover:bg-btn-purple transition duration-100 bg-btn-purple text-body cursor-pointer rounded-full font-semibold h-12 px-6 mx-4">
      {props.children}
    </button>
  );
}

export default PurpleAccentButton;
