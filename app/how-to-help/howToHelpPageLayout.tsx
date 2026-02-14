import { PageElement } from "@/components/pageLayout/PageElement";
import VolunteerNewsForm from "./VolunteerNewsForm";
import SponsorsCollage from "./SponsorsCollage";
import Link from "next/link";

export const waysToGivePage: PageElement[] = [
  {
    type: "Header",
    content: <>Ways to Give</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>
          Your generosity offers hope to a family in their darkest time. The
          needs are urgent, immediate and ongoing.
        </strong>
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Receiving a diagnosis of childhood cancer is devastating – emotionally
        and financially. Support from our community immediately improves a
        Childcan family’s ability to remain emotionally and financially stable
        in the face of childhood cancer.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        When you give, you support Childcan’s direct-to-family donation
        philosophy ensuring immediate help in the hands of families who need it
        most. Your gift enables families to regain control in a time of utter
        chaos, and shows them they are not alone – support that is very much
        needed to face childhood cancer.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: <>Your generosity truly makes a difference.</>,
  },
  {
    type: "Button",
    text: "Donate",
    href: "https://form-renderer-app.donorperfect.io/give/childcan/2026-donation-form",
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>
          There are many ways you can donate to have a meaningful impact on the
          lives of Childcan families.
        </strong>
      </>
    ),
  },
  {
    type: "Subheader",
    content: <>Online</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        The easiest and most efficient way you can give is{" "}
        <a
          href="https://form-renderer-app.donorperfect.io/give/childcan/2026-donation-form"
          className="text-link-blue"
          target="_blank"
          rel="noreferrer"
        >
          online
        </a>
        . Your gift is received immediately and will be put right to work to
        help families living with their child’s cancer. Your tax receipt is also
        automatically sent to you.
      </>
    ),
  },
  {
    type: "Button",
    text: "Donate Now",
    href: "https://form-renderer-app.donorperfect.io/give/childcan/2026-donation-form",
  },
  {
    type: "Subheader",
    content: <>Monthly Gifts</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        You can become a Childcan Champion with a monthly donation. Your small,
        consistent gift can add up to a big impact, providing a steady source of
        income and ensuring we can provide unwavering support to our Childcan
        families. It’s easy and affordable with smaller, more frequent gifts
        coming right off your credit card every month. You’ll receive one tax
        receipt at the end of the year for your total monthly contributions,
        and, of course, you can change or stop your donation at any time. It’s
        easy to set up a monthly donation online.
      </>
    ),
  },
  {
    type: "Button",
    text: "Set up a monthly donation",
    href: "https://form-renderer-app.donorperfect.io/give/childcan/2026-donation-form",
  },
  {
    type: "Subheader",
    content: <>Double Your Donation</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        When you take a moment to see if your employer offers donation matching,
        you open the door for your compassion to stretch even further bringing
        double the care, double the comfort, and double the hope to kids and
        families who need it now.
      </>
    ),
  },
  {
    type: "Button",
    text: "See if your employer doubles donations",
    href: "https://childcan.com/double-your-donation",
  },
  {
    type: "Subheader",
    content: <>Donate Securities</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        When you take a moment to see if your employer offers donation matching,
        you open the door for your compassion to stretch even further bringing
        double the care, double the comfort, and double the hope to kids and
        families who need it now.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        To donate securities, please use our{" "}
        <a
          href="https://childcan.com/s/Gift-of-Securities-mn3l.pdf"
          className="font-semibold text-link-blue"
          target="_blank"
          rel="noreferrer"
        >
          Gift of Securities Donation Form.
        </a>
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        You can also donate online through{" "}
        <a
          href="https://www.canadahelps.org/en/dn/s/49268/donate"
          className="text-link-blue"
          target="_blank"
          rel="noreferrer"
        >
          Canada Helps
        </a>
        , or via{" "}
        <a
          className="text-link-blue"
          href="/pdfs/ShareTransferForm.pdf"
          target="_blank"
          rel="noreferrer"
        >
          London Community Foundation
        </a>
        , but we recommend using our form for direct donations.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        If you have any questions about the process or need assistance, please
        don’t hesitate to <strong>contact us</strong>.
      </>
    ),
  },
  {
    type: "Button",
    text: "Gift of Securities Donation Form",
    href: "https://childcan.com/s/Gift-of-Securities-mn3l.pdf",
  },
  {
    type: "Subheader",
    content: <>Legacy Giving</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        A planned gift becomes part of your life story. Childcan can offer a
        special opportunity for you to create a legacy.{" "}
        <Link className="text-link-blue" href="/legacy">
          Learn more
        </Link>{" "}
        about how your love can leave an incredible legacy for brave futures.
      </>
    ),
  },
  {
    type: "Button",
    text: "Learn more about Legacy Giving",
    href: "https://childcan.com/legacy",
  },
  {
    type: "Subheader",
    content: <>By Mail</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        If you prefer to mail your donation, please send your cheque, bank draft
        or money order, payable to Childcan, to:
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>
          Childcan
          <br />
          792 Commissioners Road W.
          <br />
          London, Ontario, Canada
          <br />
          N6K 1C2
          <br />
        </strong>
      </>
    ),
  },
  {
    type: "Subheader",
    content: <>Call Us</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        You can call us directly to make your donation at{" "}
        <a href="tel:+15196853500" className="text-link-blue">
          519-685-3500
        </a>{" "}
        in London and area, or toll-free at{" "}
        <a href="tel:+18009660631" className="text-link-blue">
          1-800-966-0631
        </a>
        .
      </>
    ),
  },
  {
    type: "Subheader",
    content: <>Partner with Us</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Does your business or organization share our community values and goal
        of helping families in crisis? Some organizations elect Childcan as
        their charity of choice for annual or monthly giving programs as part of
        their Corporate Social Responsibility endeavours. Others will choose to
        sponsor one of our events as part of their marketing plans. Some even
        organize fundraising events and activities to involve their network and
        have an even larger impact. We would be delighted to discuss any of
        these options or others that fit your organization’s strategic giving
        plans. Please get in touch at{" "}
        <a href="tel:+15196853500" className="text-link-blue">
          519-685-3500
        </a>{" "}
        or{" "}
        <a href="mailto:info@childcan.com" className="text-link-blue">
          info@childcan.com
        </a>
        .
      </>
    ),
  },

  {
    type: "Subheader",
    content: <>Donate a Car</>,
  },

  {
    type: "Paragraph",
    content: (
      <>
        Donate a Car Canada accepts{" "}
        <a
          href="https://donatecar.ca/org/donate.php?charitypage=Childcan"
          className="text-link-blue"
          target="_blank"
          rel="noreferrer"
        >
          Vehicle Donations
        </a>{" "}
        for Childcan. Free towing is provided in most areas across Canada, or
        you can drop off your vehicle to maximize your donation. When you donate
        your car, truck, RV, boat, or motorcycle to Childcan through Donate a
        Car Canada, it will either be recycled or sold at auction (depending on
        its condition, age and location). Donate a Car Canada will look after
        all the details to make it easy for Childcan to benefit. After your
        vehicle donation is complete, we will send you a tax receipt and your
        donation will be put to good use, supporting our children and families.
      </>
    ),
  },
  {
    type: "Button",
    text: "Donate a vehicle",
    href: "https://donatecar.ca/org/donate.php?charitypage=Childcan",
  },

  {
    type: "Subheader",
    content: <>Merchandise</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Support us by{" "}
        <Link
          href="https://www.collinsclothiers.com/childcan"
          className="text-link-blue"
          target="_blank"
          rel="noreferrer"
        >
          purchasing merchandise
        </Link>{" "}
        such as bracelets, hats, hoodies, and t-shirts that will also raise
        awareness. We are grateful to Collins Clothiers for hosting our
        merchandise store.
      </>
    ),
  },

  {
    type: "Button",
    text: "Purchase Merchandise",
    href: "https://www.collinsclothiers.com/childcan",
  },
  {
    type: "Divider",
  },
  {
    type: "Paragraph",
    content: (
      <>
        On behalf of our staff and board, and most importantly, our Childcan
        families, thank you!
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        We rely on the generosity of our community through individual, corporate
        and foundation donations and sponsorships. We appreciate every dollar
        donated and put it to good use in providing our direct-to-family{" "}
        <Link href="/for-families?page=Here For You" className="text-link-blue">
          programs and services
        </Link>
        .
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        On behalf of our staff and board, and most importantly, our Childcan
        families, thank you!
      </>
    ),
  },
  {
    type: "Divider",
  },
  {
    type: "Subheader",
    content: <>Tax Receipts</>,
  },

  {
    type: "Paragraph",
    content: (
      <>
        Please note that because of the administrative and mailing costs
        associated with issuing paper receipts for offline donations, we issue
        printed tax receipts for every offline donation of $20 or more. Online
        donations provide the option for the donor to cover the administrative
        costs and ensure that the total amount of the donation is going to
        support children and families coping with childhood cancer, as the donor
        intended. As there is less administration involved, receipts are issued
        for each donation made through the online donation links above. Should
        you have any concerns or questions regarding this policy, please don’t
        hesitate to{" "}
        <Link href="/contact" className="text-link-blue">
          contact us
        </Link>
        . We very much appreciate your generosity and support, and strive to
        meet the needs of our donors, as well as the children and families we
        serve. Thank you!
      </>
    ),
  },
];

export const PJDayPage: PageElement[] = [
  {
    type: "VerticalSplit",
    left: [
      {
        type: "Header",
        content: <>PJ Day for Childcan.</>,
      },
      {
        type: "Subheader",
        content: (
          <>Did you know, kids fighting cancer wear their PJs every day?</>
        ),
      },
      {
        type: "TertiaryHeader",
        content: <>Show you support them on PJ Day! Rock your PJs!</>,
      },
      {
        type: "Paragraph",
        content: (
          <>
            Children fighting cancer spend a lot of time in their pajamas. Show
            your support by wearing your PJs on February 15, International
            Childhood Cancer Awareness Day.
          </>
        ),
      },
      {
        type: "Paragraph",
        content: (
          <>
            As February 15, 2026, falls on a Sunday, encourage your school or
            business to show kids affected by cancer some love on February 13,
            or any day in February.
          </>
        ),
      },
      {
        type: "Button",
        href: "https://childcan.com/s/PJ-Day-Poster-g922.pdf",
        text: "Download a Poster",
      },
      {
        type: "Paragraph",
        content: (
          <>
            Donate to participate and help kids and their families affected by
            childhood cancer.
          </>
        ),
      },
      {
        type: "Paragraph",
        content: (
          <>
            Your involvement in PJ Day for Childcan will not only help to fund
            our direct-to-family assistance programs, it will also show these
            children and families that our community stands with them. Choose
            any day in February that works for your organization and let us know
            that you’re participating by completing this form:
          </>
        ),
      },
    ],
    right: [
      {
        type: "Image",
        src: "/images/PJDaySideBanner.webp",
        alt: "PJ Day kid",
        className: "h-150",
      },
      {
        type: "Image",
        src: "/images/PJDayButton.webp",
        alt: "PJ Day Button",
        className: "aspect-square",
      },
    ],
  },
  {
    type: "VerticalSplit",
    left: [
      {
        type: "Button",
        href: "https://forms.office.com/r/q6yrrxUhDt",
        text: "Participate in PJ Day",
        alignment: "center",
      },
    ],
    right: [
      {
        type: "Button",
        href: "",
        text: "Contact Us",
        alignment: "center",
      },
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        If you need a letter to ask your club/organization/school to get
        involved, you can download this one (Word document) or{" "}
        <Link href="/contact" className="text-link-blue">
          contact us
        </Link>
        .
      </>
    ),
  },
  {
    type: "VerticalSplit",
    left: [
      {
        type: "Button",
        href: "https://childcan.com/s/2026-PJ-Day-Request-Letter.docx",
        text: "Download a PJ Day Letter",
        alignment: "center",
      },
    ],
    right: [
      {
        type: "Button",
        href: "https://brandedbycollins.com/childcan/shop/home",
        text: "Buy a T-Shirt or Hoodie",
        alignment: "center",
      },
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        Tell people you are taking part on social media by using the hashtag
        #ChildcanPJs and tagging @childcan. We can’t wait to see your PJ Day
        pics!
      </>
    ),
  },
  {
    type: "Button",
    href: "https://form-renderer-app.donorperfect.io/give/childcan/2026-pj-day",
    text: "Donate now to show your support for PJ Day",
  },
  {
    type: "Paragraph",
    content: <strong>Thank you!</strong>,
  },
  {
    type: "VerticalSplit",
    left: [
      {
        type: "Paragraph",
        content: (
          <>
            We are also grateful to Giant 101.3 and Country 107.3 from My
            Broadcasting Corporation for their support of Childcan’s Pajama Day!
          </>
        ),
      },
      {
        type: "Paragraph",
        content: (
          <>
            Listen out for their radio ads starting in January 2026 and look out
            for photos of the announcers wearing their PJs in support!
          </>
        ),
      },
      {
        type: "Paragraph",
        content: <>Here’s last year’s radio announcement:</>,
      },
      {
        type: "FBEmbed",
        url: "https://www.facebook.com/Childcan/videos/1960829787731365/?t=0",
        width: 200,
      },
    ],
    right: [
      {
        type: "Image",
        src: "/images/MBCLogos.webp",
        alt: "MBC Logos",
        className: "h-80 aspect-square",
        href: "https://www.mybroadcastingcorp.com/",
      },
    ],
  },
];

export const goldPage: PageElement[] = [
  {
    type: "Header",
    content: <>September is Childhood Cancer Awareness Month</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        September is coming! If you would like to have your municipality fly a
        flag, light up a landmark, or proclaim September as Childhood Cancer
        Awareness Month (depending on the options available for your
        municipality), please{" "}
        <Link href="/contact" className="text-link-blue">
          contact us
        </Link>{" "}
        today!
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <div className="text-center font-semibold">
        Childhood Cancer is the number one cause of death by disease of Canadian
        children (i)
      </div>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <div className="text-center font-semibold">
        The incidence rate of childhood cancer in Ontario is increasing by
        approximately 1% per year (1986-2018) (ii)
      </div>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <div className="text-center font-semibold">
        Childcan serves 25% of all children diagnosed with childhood cancer
        across Ontario.
      </div>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        There are so many reasons why Childhood Cancer Awareness Month is
        important. September, Childhood Cancer Awareness Month is:
      </>
    ),
  },
  {
    type: "List",
    items: [
      "A time to acknowledge the thousands of children and their families who are dealing with a cancer diagnosis.",
      "A time to take notice and raise awareness about the reality of childhood cancer, and to emphasize the importance of research.",
      "A time when you can show your support by glowing GOLD! Here’s how:",
    ],
  },
  {
    type: "Image",
    src: "/images/LawnSign.webp",
    alt: "Childcan Lawn Sign",
    className: "w-full h-120",
  },
  {
    type: "Paragraph",
    content: (
      <>
        Purchase a lawn sign like this one from our{" "}
        <a
          href="https://www.collinsclothiers.com/childcan"
          className="text-link-blue"
        >
          online store
        </a>
        .
      </>
    ),
  },
  {
    type: "List",
    items: [
      <>
        Purchase a{" "}
        <a
          href="https://www.collinsclothiers.com/childcan"
          className="text-link-blue"
          target="_blank"
          rel="noreferrer"
        >
          LAWN SIGN
        </a>{" "}
        and show your support proudly. Take a photo of your sign and share it
        with us with the name of the town where it’s located. Be sure to tag
        @Childcan and use the hashtag #ChildcanGold so we can share your support
        with our families.
      </>,
      <>
        Register now to join us for the{" "}
        <a
          href="https://childcan.akaraisin.com/ui/ChildcanPJWalk2025"
          className="text-link-blue"
          target="_blank"
          rel="noreferrer"
        >
          Childcan Pyjama Walk
        </a>{" "}
        in
      </>,
      {
        type: "InnerList",
        items: [
          "Mitchell on Saturday, September 13, 2025 4-7pm",
          "London on Saturday, September 20, 2025 4-7pm",
          "LaSalle on Sunday, September 21, 2025 10-1pm",
          "Owen Sound on Sunday, September 21, 2025 11-2pm",
          "Brights Grove on Sunday, September 21, 2025 1-4pm",
          "or walk near you.",
        ],
      },
      <>
        Create your own fundraiser on our <a href="https://childcan.akaraisin.com/ui/handsofhope" className="text-link-blue" target="_blank" rel="noreferrer">Hands of Hope</a> website and fundraise with your own creative flair.
      </>,
      <>
        Show your support by purchasing Childcan <a href="https://brandedbycollins.com/childcan/shop/home" className="text-link-blue" target="_blank" rel="noreferrer">merchandise</a> or some of our signature gold ribbon items. Get your gold on by visiting the <a href="https://brandedbycollins.com/childcan/shop/home" className="text-link-blue" target="_blank" rel="noreferrer">online store</a>! 
      </>,
      "Leave your porch light on to glow gold. Take a photo and share it with #ChildcanGold and tag @Childcan so that we are amplify your show of support.",
      <>
        Join us at one of the flag raising ceremonies listed below. More details can be found on our <Link href="/events" className="text-link-blue">events</Link> page too.
      </>,
      <>
        <a href="https://form-renderer-app.donorperfect.io/give/childcan/2026-donation-form" className="text-link-blue" target="_blank" rel="noreferrer">Donate</a> to show your support to other families.
      </>,
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        These local municipalities have already pledged their support for
        Childhood Cancer Awareness Month in 2025:
      </>
    ),
  },
  {
    type: "List",
    items: [
      "Chatham-Kent will host a flag raising ceremony on Aug, 29, 2025 at 11am. Join us!",
      "Huron County will fly a flag throughout the month of September!",
      "West Perth will be flying the digital flag on Highway 8, and lighting up buildings on the Clock Tower and Outdoor Lights at the Welcome Centre from Sept 1-14.",
      "Stratford will host a flag raising ceremony on Sept 2, 2025 at 9am. Join us at 1 Wellington St. They will also proclaim September as Childhood Cancer Awareness Month.",
      "Sarnia City Hall and Sarnia sign will be illuminated in gold from Sept 2-8, 2025.",
      "London will fly a flag and buildings will be lit up from Sept 2-9, 2025, including City Hall, RBC Place, JA Taylor (Wellington & Dundas) and Canada Life Centre.",
      "Childcan’s office will host a flag raising ceremony on Sept 3, 2025 at 12 noon. Join us!",
      "LaSalle will host a flag raising ceremony on Sept 3, 2025 at 1pm. Join us!",
      "Kingsville will host a flag raising ceremony on Sept 4, 2025 at 1pm. Join us!",
      "Essex will host a flag raising ceremony on Sept 5, 2025 at 1pm at the Town of Essex Offices. Join us! They have also proclaimed September as Childhood Cancer Awareness Month.",
      "Owen Sound will host a flag raising ceremony on Sept 5, 2025 at 2pm at City Hall. Join our volunteers!",
      "Aylmer will host a flag raising ceremony on Sept 8, 2025 at 11am at Aylmer Town Hall. Join us!",
      "Big Bruce will light up in gold for Childhood Cancer Awareness Month and the Municipality of Arran-Elderslie has proclaimed September as Childhood Cancer Awareness Month.",
      "Brockton will fly a flag at their Municipal Office in Walkerton from Sept 8-12, 2025 and has proclaimed September as Childhood Cancer Awareness Month.",
      "Elgin County will light up their building and host a flag raising ceremony on Sept 9, 2025 at 10am at 450 Sunset Dr, St. Thomas. Join us!",
      "St Marys will host a flag raising ceremony on Sept 15, 2025 at 9:30am at St Marys Town Hall.",
      "Tecumseh will fly a flag and illuminate their Town Hall building from Sept 9-16, 2025.",
      "St Thomas will host a flag raising ceremony on Sept 22, 2025 at 10:30am at St Thomas City Hall.",
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        On September 17, 2025, Andrew Lawton rose in the House to acknowledge
        Childhood Cancer Awareness Month.
      </>
    ),
  },
  {
    type: "FBEmbed",
    url: "https://www.facebook.com/AndrewLawtonMedia/videos/1013715037461034/?t=0",
    width: 500,
  },
  {
    type: "Paragraph",
    content: (
      <>
        On October 1, 2025, Senator Rob Black rose in the Senate to say:
        “September has come to a close marking the end of another Childhood
        Cancer Awareness Month, but pediatric cancer does not stop with the end
        of the month. We must continue raising awareness for this disease, to
        promote more investment in research, in order to reduce the number of
        children lost - far too soon - to childhood cancer”. Listen to his
        entire speech:
      </>
    ),
  },
  {
    type: "YTEmbed",
    url: "https://youtu.be/eRah4KZRGjY",
  },
  {
    type: "Paragraph",
    content: (
      <>
        Thank you Senator Black for highlighting September as Childhood Cancer
        Awareness Month.
      </>
    ),
  },
  {
    type: "Image",
    src: "/images/EssexProclamation.webp",
    alt: "Essex Proclamation",
    className: "w-full h-200",
  },
  {
    type: "Image",
    src: "/images/FlagRaising.webp",
    alt: "Childcan Flag",
    className: "w-full h-120",
  },
  {
    type: "Paragraph",
    content: <>Where will you see the gold ribbon flag this September?</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        If you are aware of more areas that can proclaim, fly flags, or light
        up, and want to help, please contact us at{" "}
        <a href="mailto:info@childcan.com?subject=I want to help glow gold this summer" className="text-link-blue">
          info@childcan.com
        </a>
        .
      </>
    ),
  },
  {
    type: "Divider",
  },
  {
    type: "Paragraph",
    content: (
      <>
        [i]
        <a href="https://www.childhoodcancer.ca/Your-Impact/Childhood-Cancer-Statistics-Resources" className="text-link-blue" target="_blank" rel="noreferrer">https://www.childhoodcancer.ca/Your-Impact/Childhood-Cancer-Statistics-Resources</a> or, 
        <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310039401&pickMembers%5B0%5D=2.21&pickMembers%5B1%5D=3.1&cubeTimeFrame.startYear=2018&cubeTimeFrame.endYear=2022&referencePeriods=20180101%2C20220101" className="text-link-blue" target="_blank" rel="noreferrer">Statistics Canada</a>, 
        or <Link href="/pdfs/ChildhoodCancerFacts.pdf" className="text-link-blue" target="_blank" rel="noreferrer">Facts about Childhood Cancer In Ontario, July 2024 (pdf)</Link>.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        [ii] Incidence rate statistic provided by Pediatric Oncology Group of
        Ontario. Childhood Cancer in Ontario: The 2020 POGO Surveillance Report.
        Toronto: Pediatric Oncology Group of Ontario; 2020.
      </>
    ),
  },
];

export const hostAnEventPage: PageElement[] = [
  {
    type: "Header",
    content: <>Host an Event</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        What better way to show support for those affected by childhood cancer
        than to bring a community together, at a gala, a sports tournament, a
        silent auction, a bake sale, or any of an almost infinite number of
        possible activities. Whatever your passion or hobby, a fundraising event
        can take your interests and turn them into a life-changing gift for a
        family living with childhood cancer.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: <>Got your idea ready to go?</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        You can get started now with a fundraising page of your own using Hands
        of Hope.
      </>
    ),
  },
  {
    type: "Button",
    href: "https://childcan.akaraisin.com/ui/handsofhope",
    text: "Get Started!",
  },
  {
    type: "Paragraph",
    content: (
      <>
        We are here to help. Have questions? Please contact us at{" "}
        <a href="mailto:info@childcan.com" className="text-link-blue">
          info@childcan.com
        </a>
        , call <a href="tel:+15196853500" className="text-link-blue">519-685-3500</a>, or check out our
        Event Kit.
      </>
    ),
  },
  {
    type: "Button",
    href: "/pdfs/CommunityEventsToolkit.pdf",
    text: "Event Kit (pdf)",
  },
  {
    type: "Paragraph",
    content: (
      <>
        You can also complete this short online{" "}
        <a
          className="text-link-blue"
          href="https://forms.gle/7fJsziDi4unHBzuz7"
          target="_blank"
          rel="noreferrer"
        >
          Fundraising Event Form
        </a>{" "}
        or the downloadable{" "}
        <Link
          className="text-link-blue"
          href="/pdfs/CommunityEventFundraiserForm.pdf"
          target="_blank"
          rel="noreferrer"
        >
          pdf
        </Link>{" "}
        and return it to us at your convenience.
      </>
    ),
  },
  {
    type: "VerticalSplit",
    left: [
      {
        type: "Button",
        href: "https://forms.gle/7fJsziDi4unHBzuz7",
        text: "Fundraising Event Form (online)",
      },
    ],
    right: [
      {
        type: "Button",
        href: "/pdfs/CommunityEventFundraiserForm.pdf",
        text: "Fundraising Event Form (pdf)",
      },
    ],
  },
  {
    type: "Paragraph",
    content: (
      <div className="font-semibold">
        Thank you so much for your support! We can’t wait to hear from you and
        look forward to helping you bring your event to life!
      </div>
    ),
  },
];

export const volunteerPage: PageElement[] = [
  {
    type: "Header",
    content: <>Volunteer</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Volunteers make an incredible difference to what we can achieve for our
        families and children. Thank you for considering applying your passion
        in a way that will have a powerful impact.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Whether you’re interested in helping at an event, with administrative
        tasks, are a qualified educator looking to help tutor, or there is
        another area where your talents and interest lie, we’d be happy to hear
        from you. Please complete one of the forms below, either online or
        download, complete and return the Volunteer Form pdf. We’ll be in touch
        and, together, find a way for you to get involved!
      </>
    ),
  },
  {
    type: "TertiaryHeader",
    content: <>To volunteer:</>,
  },
  {
    type: "VerticalSplit",
    left: [
      {
        type: "Button",
        href: "https://forms.gle/bmLaZ7YBfjdip3FT8",
        text: "Complete the online form",
      },
    ],
    right: [
      {
        type: "Button",
        href: "https://childcan.com/s/Childcan-Volunteer-Application-Form-2024.pdf",
        text: "Download the PDF From",
      },
    ],
  },
  {
    type: "Paragraph",
    content: (
      <div className="text-main-darkpurple text-h3">
        <span className="font-semibold">For educators</span> wishing to
        volunteer for our{" "}
        <span className="font-semibold">Volunteer Tutoring Program</span>,
        please complete one of these forms:
      </div>
    ),
  },
  {
    type: "Paragraph",
    content: <>We have multiple current needs in:</>,
  },
  {
    type: "List",
    items: ["London"],
  },
  {
    type: "VerticalSplit",
    left: [
      {
        type: "Button",
        href: "https://forms.gle/FfD5W64mT9J5RH3t7",
        text: "Complete the VTP Online Form",
      },
    ],
    right: [
      {
        type: "Button",
        href: "https://childcan.com/s/Volunteer-Tutoring-Program-Application-Form-6hg4.pdf",
        text: "Download the VTP PDF Form",
      },
    ],
  },
  {
    type: "Divider",
  },
  {
    type: "MiscElement",
    content: <VolunteerNewsForm></VolunteerNewsForm>,
  },
  {
    type: "Divider",
  },
  {
    type: "Subheader",
    content: <>National Volunteer Week - April 27 - May 3, 2025</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        National Volunteer Week celebrates the incredible achievements of
        volunteers!
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <div className="font-semibold">
        The theme for 2025 is: Volunteers Make Waves.
      </div>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Our volunteers are in constant motion, always flowing, shifting, and
        transforming with every powerful wave or quiet ripple. Building on the
        tides sent out before us, waves swell with each generation of
        volunteers.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        We are so very grateful to all our volunteers, not just in National
        Volunteer Week, but every week of the year!
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        #NVW2025 #VolunteersMakeWaves #ChildcanVolunteers
        #FacingChildhoodCancerTogether 💛🎗💛
      </>
    ),
  },
];

export const ourSupportersPage: PageElement[] = [
  {
    type: "Header",
    content: <>Our Supporters</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        We couldn’t provide the programs and services that we do without the
        generosity of our community partners and allies, and we appreciate and
        celebrate the real difference that they make in the daily lives of the
        families we serve.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan’s personalized approach supports families beyond hospital
        walls. This is only possible because our partners also go beyond – above
        and beyond – to help us fund specific programs, to provide us with the
        opportunity to meet individual and collective needs, and even to make
        the families’ stays within those hospital walls more bearable.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan’s network of support is strengthened and defined by the ongoing
        generosity of these past and present contributors.
      </>
    ),
  },
  {
    type: "MiscElement",
    content: <SponsorsCollage></SponsorsCollage>,
  },
];

export const howToHelpLayout: Record<string, PageElement[]> = {
  "Ways to Give": waysToGivePage,
  "PJ Day": PJDayPage,
  Gold: goldPage,
  "Host an Event": hostAnEventPage,
  Volunteer: volunteerPage,
  "Our Supporters": ourSupportersPage,
};
