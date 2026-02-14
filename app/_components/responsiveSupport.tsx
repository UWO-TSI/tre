import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";

function ResponsiveSupport() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:items-start pt-20 pb-20 bg-main-yellow px-10">
      <div className="pb-4 text-center md:text-left md:pl-0">
        <h1 className="text-h1 text-main-darkpurple">Responsive</h1>
        <h1 className="text-h1 font-bold text-main-darkpurple">
          family support
        </h1>
      </div>
      <div className="md:pl-10 text-center md:text-left">
        <p className="text-body text-main-grey mb-12 max-w-170 md:pr-10">
          We are here to support you, to provide financial assistance, to offer
          a shoulder to lean on, to do whatever we can to make this difficult
          time a little easier for you. You are not alone; don't hesitate to
          reach out and let us know how we can help.
        </p>
        <PurpleAccentButton>Find Support</PurpleAccentButton>
      </div>
    </div>
  );
}

export default ResponsiveSupport;
