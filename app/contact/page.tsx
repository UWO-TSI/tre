import HeroImage from "@/components/heroImage/heroImage";
import SocialIcons from "../_components/socialIcons";
import MyMap from "../_components/Map";

export default function Contact() {
  // TODO: UPDATE CONTACT US PAGE LINK

  return (
    <div className="bg-white">
      <HeroImage
        title=""
        alt=""
        height="40em"
        textVertialOffset="5em"
        image="/images/family.jpg"
        imageVerticalPosition="20%"
      ></HeroImage>
      <div className="place-self-center max-w-[1020px] mx-[168px] px-[32px] py-[96px] bg-white ">
        <div>
          {/* add space */}
          <p className="bodyText mt-[38.3px]">
            Are you interested in getting involved with Childcan? Or are you a
            local family in need of some of the supportive programs and services
            we provide? We are here to help in ways you might not expect.{" "}
          </p>
          <p className="bodyText">Please don’t hesitate to get in touch. </p>
          <h1 className="heading1 font-normal mt-[32px] mb-[0px] font-[32px]">
            Head Office
          </h1>
        </div>
        <div className="grid grid-cols-3 auto-rows-min py-[17px] gap-[34px]">
          <div className="self-center">
            <p className="bodyText">
              792 Commissioners Road W. <br />
              London, Ontario, Canada, <br />
              N6K 1C2 <br />
            </p>
          </div>
          <div className="col-span-2 row-span-2">
            <div className="self-start">
              <MyMap></MyMap>
              {/* there's a way to make this black and white in the google cloud console - TODO*/}
            </div>
          </div>
          <div>
            <p className="bodyText mt-[0px]">
              {" "}
              Phone:{" "}
              <a href="tel:519-685-3500" className="text-link-blue">
                519-685-3500
              </a>{" "}
            </p>
            <p className="bodyText">
              {" "}
              Toll Free:{" "}
              <a href="tel:1-800-966-0631" className="text-link-blue">
                1-800-966-0631{" "}
              </a>
            </p>
            <p className="bodyText">
              {" "}
              Fax:{" "}
              <a href="tel:519-685-3549" className="text-link-blue">
                519-685-3549{" "}
              </a>
            </p>
            <p className="bodyText mb-[0px]">
              {" "}
              E-mail:{" "}
              <a href="mailto:info@childcan.com" className="text-link-blue">
                info@childcan.com{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="py-[17px]">
          <div className="flex gap-2 items-center group">
            <SocialIcons
              name="facebook"
              link="https://www.facebook.com/Childcan/"
              width="28"
              height="28"
              colour="[#222]"
              viewbox="-143 145 512 512"
              path={
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3 v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2 c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path>
              }
            ></SocialIcons>
            <SocialIcons
              name="linkedin"
              link="https://www.linkedin.com/in/childcan/"
              width="28"
              height="28"
              colour="[#222]"
              viewbox="-143 145 512 512"
              path={
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>
              }
            ></SocialIcons>
            <SocialIcons
              name="instagram-new"
              link="https://www.instagram.com/childcan/"
              width="28"
              height="28"
              colour="[#222]"
              viewbox="0 0 19.2 19.2"
              // author daniel bruce
              path={
                <>
                  <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.03 2.02.03s1.493-.006 2.02-.03a2.766 2.766 0 0 0 .929-.172 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.03-.685.03-2.02s-.006-1.493-.03-2.02a2.766 2.766 0 0 0-.172-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6z"></path>
                  <circle cx="9.6" cy="9.6" r="1.667"></circle>
                  <path d="M9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.662a3.67 3.67 0 0 1-.233 1.213 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .233-1.213 2.556 2.556 0 0 1 1.462-1.462 3.67 3.67 0 0 1 1.213-.233c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.233 2.556 2.556 0 0 1 1.462 1.462 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path>
                </>
              }
            ></SocialIcons>
          </div>
        </div>
      </div>
    </div>
  );
}
