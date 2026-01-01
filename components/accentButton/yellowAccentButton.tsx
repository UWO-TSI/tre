interface YellowAccentButonProps {
  children?: React.ReactNode;
}

function YellowAccentButton(props: YellowAccentButonProps) {
  return (
    <button className="hover:bg-btn-yellow/80 transition duration-100 bg-btn-yellow text-header-purple cursor-pointer rounded-full font-semibold h-12 px-6">
      {props.children}
    </button>
  );
}

export default YellowAccentButton;
