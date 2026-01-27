import PurpleAccentButton from "../accentButton/purpleAccentButton";

export default function VolunteerNewsForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="text-h1 text-main-darkpurple">
          Sign up for Volunteer News
        </h1>
        <p className="text-body text-secondary-grey">
          Get volunteer news from Childcan in your inbox.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <label className="font-bold">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="rounded-sm w-full outline p-3"
          ></input>
        </div>
        <div>
          <label className="font-bold">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="rounded-sm w-full outline p-3"
          ></input>
        </div>
        <div>
          <label className="font-bold">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="rounded-sm w-full outline p-3"
          ></input>
        </div>
        <div>
          <label className="font-bold">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            className="rounded-sm w-full outline p-3"
          ></input>
        </div>
      </div>

      <div className="text-[11px] text-secondary-grey">
        By submitting this form, you are consenting to receive marketing emails
        from: Childcan, The Childhood Cancer Research Association, 792
        Commissioners Rd. West, London, ON, Ontario, N6K 1C2, CA,
        http://www.childcan.com. You can revoke your consent to receive emails
        at any time by using the SafeUnsubscribe® link, found at the bottom of
        every email.{" "}
        <a
          href="https://www.constantcontact.com/legal/service-provider"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Emails are serviced by Constant Contact
        </a>
        .
        <a
          href="https://childcan.com/privacy-policy"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Our Privacy Policy
        </a>
        .
      </div>

      <PurpleAccentButton>Sign Up!</PurpleAccentButton>
    </form>
  );
}
