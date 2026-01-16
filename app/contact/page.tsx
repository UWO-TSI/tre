import HeroImage from "@/components/heroImage/heroImage";


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
        <div className="max-w-[1020px] mx-[168px] px-[32px] py-[96px] bg-white ">
            <div>
                {/* add space */}
                <p className="bodyText">Are you interested in getting involved with Childcan? Or are you a local family in need of some of the supportive programs and services we provide?  We are here to help in ways you might not expect. </p>
                <p className="bodyText">Please don’t hesitate to get in touch. </p>
                <h1 className="heading1 font-normal mt-[32px] mb-[0px] font-[32px]">Head Office</h1> 
                {/* change ^^ margins */}
            </div>
            <div className="grid grid-cols-3 auto-rows-min py-[17px] gap-[34px]">
                <div>
                    <p className="bodyText"> 
                        792 Commissioners Road W. <br />
                        London, Ontario, Canada, <br />
                        N6K 1C2 <br />
                    </p>

                </div>
                <div className="col-span-2 row-span-2">
                    <div>
                        <p className="bodyText"> 792 Commissioners Road W. London, Ontario, Canada, N6K 1C2 </p>
                        {/* no top margin */}
                    </div>
                </div>
                <div>
                    <p className="bodyText mt-[0px]"> Phone: 519-685-3500  </p>
                    <p className="bodyText"> Toll Free: 1-800-966-0631  </p>
                    <p className="bodyText"> Fax: 519-685-3549  </p>
                    <p className="bodyText mb-[0px]"> E-mail: info@childcan.com   </p>
                </div>
            </div>  

            <div className="py-[17px]">
                <p>icons</p>
            </div>
        </div>

    </div>
  );
}
