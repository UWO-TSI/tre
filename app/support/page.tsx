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

      <div className="place-self-center max-w-[1020px] mx-[168px] px-[32px] py-[96px] bg-white ">
        <div className="pb-[17px]">
          <h1 className="heading1 font-thin mt-[0px] mb-[16px] font-[32px]">
            Childcan is here to help.
          </h1>
          <p className="bodyText">
            If your child has been diagnosed with childhood cancer at Children’s
            Hospital, London Health Sciences Centre, Childcan is here with
            financial, emotional, and social support, all personalized to your
            family’s needs.{" "}
          </p>
          <p className="bodyText mb-[0px]">
            If you are not already registered as a Childcan family, you can now
            apply for support.
          </p>
        </div>
        <div className="py-[17px] flex justify-center">
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=GJ_2kAOFsEqmtRcUIF577HxhnHPJybtPjITj_N2TfJhUQzhESzRBOFIyU0FRV1ZFRVMwSlQ1RlRWOS4u">
            <PurpleAccentButton className="py-[21px] px-[34px]">
              Apply for Support
            </PurpleAccentButton>
          </a>
        </div>
        <div className="py-[17px]">
          <video width="956" height="537.75" controls>
            <source src="/support-video.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="py-[17px] flex justify-center">
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
