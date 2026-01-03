import PurpleButton from "../accentButton/purpleAccentButton";

export default function DonateBar() {
  return (
    <div className="flex items-center justify-center gap-10 width-100% p-8 bg-main-yellow text-white">
      <h1 className="text-h1 text-header-purple font-light">
        When you're funding hope, every dollar counts.
      </h1>
      <PurpleButton>Donate</PurpleButton>
    </div>
  );
}
