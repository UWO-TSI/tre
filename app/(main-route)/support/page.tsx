import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";
import HeroImage from "@/components/heroImage/heroImage";

export default function Support() {
  return (
    <div className="bg-white">
      <HeroImage
        title=""
        alt=""
        height="260px"
        textVertialOffset="20px"
        image="/images/_DSC5337.JPG"
        imageVerticalPosition="40%"
        overlay={true}
      ></HeroImage>

      <div className="place-self-center max-w-[1020px] mx-4 md:mx-42 px-4 md:px-8 py-8 md:py-24 bg-white">
        <div className="pb-4 md:pb-4.25">
          <h1 className="text-h1 text-header-purple font-light mt-0 mb-4">
            Childcan is here to help.
          </h1>
          <p className="text-body text-secondary-grey mb-4">
            If your child has been diagnosed with childhood cancer at Children's
            Hospital, London Health Sciences Centre, Childcan is here with
            financial, emotional, and social support, all personalized to your
            family's needs.{" "}
          </p>
          <p className="text-body text-secondary-grey mb-0">
            If you are not already registered as a Childcan family, you can now
            apply for support.
          </p>
        </div>
        <div className="py-4 md:py-4.25 flex justify-center">
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=GJ_2kAOFsEqmtRcUIF577HxhnHPJybtPjITj_N2TfJhUQzhESzRBOFIyU0FRV1ZFRVMwSlQ1RlRWOS4u">
            <PurpleAccentButton className="py-[21px] px-[34px]">
              Apply for Support
            </PurpleAccentButton>
          </a>
        </div>
        <div className="py-4 md:py-4.25">
          <video className="w-full md:w-239 h-auto md:h-[537.75px]" controls>
            <source src="/support-video.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="py-4 md:py-4.25 flex justify-center">
          <a href="/for-families?page=Financial%20Support">
            <PurpleAccentButton className="py-[21px] px-[34px]">
              Learn more about the types of support available
            </PurpleAccentButton>
          </a>
        </div>
      </div>
    </div>
  );
}
