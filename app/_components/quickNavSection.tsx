import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";

interface QuickNavSectionProps {
  title: string;
  buttonText: string;
}

function QuickNavSection(props: QuickNavSectionProps) {
  return (
    <div className="flex flex-col items-center pb-20 pt-5">
      <h3 className="text-h3 pb-5">{props.title}</h3>
      <PurpleAccentButton>{props.buttonText}</PurpleAccentButton>
    </div>
  );
}

export default QuickNavSection;
