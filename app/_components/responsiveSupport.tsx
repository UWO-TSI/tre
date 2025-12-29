import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";

function ResponsiveSupport() {
  return (
    <div className="flex justify-center pt-20 pb-20 bg-main-yellow">
      <div className="pr-10">
        <h1 className="text-h1 text-main-darkpurple">Responsive</h1>
        <h1 className="text-h1 font-bold text-main-darkpurple">
          family support
        </h1>
      </div>
      <div>
        <p className="text-body text-main-grey mb-12 w-170">
          We are here to support you, to provide financial assistance, to offer
          a shoulder to lean on, to do whatever we can to make this difficult
          time a little easier for you. You are not alone; don’t hesitate to
          reach out and let us know how we can help.
        </p>
        <PurpleAccentButton>Find Support</PurpleAccentButton>
      </div>
    </div>
  );
}

export default ResponsiveSupport;
