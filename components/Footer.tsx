import DonateBar from "./DonateBar";
import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <div className="flex flex-col bottom-0">
        <DonateBar />
        <FooterContent />
    </div>
  );
}
