import PurpleButton from "../accentButton/purpleAccentButton";

export default function DonateBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 width-100% p-6 md:p-8 bg-main-yellow text-white">
      <h1 className="text-h1 text-header-purple font-light text-center md:text-left">
        When you're funding hope, every dollar counts.
      </h1>
      <a
        href="https://form-renderer-app.donorperfect.io/give/childcan/2025-donation-form"
        target="_blank"
        rel="noreferrer"
      >
        <PurpleButton>Donate</PurpleButton>
      </a>
    </div>
  );
}
