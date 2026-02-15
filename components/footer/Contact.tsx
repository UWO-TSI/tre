import Socials from "./Socials";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 p-0 md:p-10">
      <div className="flex flex-col gap-8 items-start">
        <Socials />
        <a
          href="/privacy-policy"
          className="text-footer-grey text-body underline"
        >
          Privacy Policy
        </a>
      </div>

      <div className="flex flex-col gap-8 w-full md:w-auto">
        <ContactForm />
      </div>
    </div>
  );
}
