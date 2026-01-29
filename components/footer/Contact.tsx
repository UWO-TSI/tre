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
        <div className="flex flex-col gap-4">
          <h1 className="text-h1 text-btn-yellow font-semibold">
            Stay in Touch
          </h1>
          <p className="text-white">
            Enter your email below to join our mailing list.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
