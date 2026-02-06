import Socials from "./Socials";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex justify-between gap-12 p-10">
      <div className="flex flex-col gap-8 items-start">
        <Socials />
        <a
          href="/privacy-policy"
          className="text-footer-grey text-body underline"
        >
          Privacy Policy
        </a>
      </div>

      <div className="flex flex-col gap-8">
        <ContactForm />
      </div>
    </div>
  );
}
