import { PageElement } from "@/components/pageLayout/PageElement";
import NewsBlerb, { newsItems } from "./newBlerb";

export const aboutUs: PageElement[] = [
  { type: "Header", content: <>About Us</> },
  {
    type: "Paragraph",
    content: (
      <>
        Faced with the news that their child has cancer, families from across
        western Ontario have turned to Childcan for direct support since 1974.
        Financial assistance, emotional support, social programs, research
        funding – it’s all supported solely by donors who get involved because
        they know that childhood cancer is an experience that nobody thinks they
        will face, let alone one that families can prepare for. They know that
        Childcan makes a very real difference to those families by:
      </>
    ),
  },
  {
    type: "List",
    items: [
      "Helping cover unexpected expenses;",
      "Providing a truly listening ear;",
      "Offering activities and information designed specifically for each family’s new reality; ",
      "Funding research closer to home; and ",
      "Leading advocacy and awareness building so that long lasting change can be achieved.",
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan mirrors the catchment area of Children’s Hospital, London
        Health Sciences Centre, supporting families from Windsor-Essex to
        Kitchener-Waterloo, from the shores of Lake Erie north to Grey-Bruce and
        beyond.
      </>
    ),
  },
  { type: "Subheader", content: <>Our Mission</> },
  {
    type: "Paragraph",
    content: (
      <>
        To raise awareness and funds to provide personalized, responsive, and
        compassionate programs and services to families facing the childhood
        cancer journey from diagnosis, through treatment, post-treatment care,
        or bereavement.
      </>
    ),
  },
  { type: "Subheader", content: <>Our Vision</> },
  {
    type: "Paragraph",
    content: (
      <>
        To make childhood cancer a health priority, fund innovative research,
        and expand family supports until childhood cancer is eliminated.
      </>
    ),
  },
  { type: "Subheader", content: <>Our Core Values</> },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>Family-Centred</strong> - Our families are at the heart of
        everything we do.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>Empathy</strong> - We listen to understand with caring and
        compassion.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>Hope</strong> - Hope means different things to different people;
        we strive to ease the burden and bring light to our kids and families.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>Inclusive Support</strong> - We respect the unique strengths,
        vulnerabilities, and values of our kids and families by delivering
        personalized and compassionate support.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>Accountability</strong> - We are dedicated to fulfilling our
        legal, moral, and ethical obligations with integrity and we report back
        to our stakeholders in a timely manner.
      </>
    ),
  },
  { type: "Subheader", content: <>Our Beginnings</> },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan was born in 1974 during a late-night conversation between a
        bereaved parent, David Cohen, and Dr. L.L. Barrie DeVeber,
        Immunologist/Oncologist.{" "}
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Legend has it that Dr. DeVeber was up late working on a grant to find
        support for the challenges he saw families facing that no one was
        meeting: financial, emotional and social support, as well as funding
        research.{" "}
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        David Cohen and Dr. DeVeber’s approach – identifying the stressors and
        frustrations that families were experiencing and working to address them
        is still the foundation for our work 50 years later.
      </>
    ),
  },
];
export const ourFamilies: PageElement[] = [
  { type: "Header", content: <>Our Families</> },
  {
    type: "Paragraph",
    content: (
      <>
        Each year, far too many children are newly diagnosed with childhood
        cancer or experience relapse. Every one of them touches us; they are our
        inspiration, the reason why we give our all to raising funds and
        providing programs and services that will make a difference. We’d like
        to introduce you to a few of them.
      </>
    ),
  },
];
export const ourNews: PageElement[] = [
  { type: "Header", content: <>Our News</> },
  {
    type: "Paragraph",
    content: (
      <>
        If you have missed any of our news within the last year, click on the
        image to learn more:
      </>
    ),
  },
  {
    type: "MiscElement",
    content: (
      <>
        <div className="flex flex-col gap-12">
          {newsItems.map((item, index) => {
            return (
              <NewsBlerb key={"MiscElement" + index} {...item}></NewsBlerb>
            );
          })}
        </div>
      </>
    ),
  },
];
export const ourTeam: PageElement[] = [
  { type: "Header", content: <>Our Team</> },
  {
    type: "Paragraph",
    content: (
      <>
        Our small staff team and Board of Directors are privileged to be able to
        assist the children and families we serve and grateful to have a strong
        community of donors, volunteers and supporters standing with us. Please
        don’t hesitate to contact us, whether you are a family living with
        childhood cancer, a volunteer interested in getting involved, or a donor
        looking to make a real difference when it’s needed most.
      </>
    ),
  },
  {
    type: "Image",
    src: "/images/Team+hearts+pic+w+Amy+RoH.webp",
    alt: "",
    className: "w-full,",
  },
  { type: "Subheader", content: <>Staff</> },
  {
    type: "Paragraph",
    content: <>Suzanne Fratschko Elliott, Executive Director</>,
  },
  {
    type: "Paragraph",
    content: <>Todd Goold, Family Support Program Manager</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Lorraine Jewell, Windsor Family Support and Community Engagement Liaison
      </>
    ),
  },
  {
    type: "Paragraph",
    content: <>Barbara Tucker, Finance and Operations Manager (p/t)</>,
  },
  {
    type: "Paragraph",
    content: (
      <>Amy Mathias, Community Engagement & Communications Associate (p/t)</>
    ),
  },
  {
    type: "Paragraph",
    content: <>Sarah Dimitropoulos, Community Fundraising & Events Associate</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        To contact any of our team, please email <a>info@childcan.com</a>. This
        email is monitored during business hours. Or you can call{" "}
        <a>519-685-3500</a>.
      </>
    ),
  },
  { type: "Subheader", content: <>Board of Directors</> },
  { type: "Paragraph", content: <>Susan Marshall, Chair</> },
  { type: "Paragraph", content: <>Lisa Pearlman, Vice-Chair and Secretary</> },
  { type: "Paragraph", content: <>Elaine Tzagadouris, Treasurer</> },
  { type: "Paragraph", content: <>Dennis Carnegie, Director</> },
  { type: "Paragraph", content: <>Tracey Bailey, Director</> },
  { type: "Paragraph", content: <>Izak Hersch, Director</> },
  {
    type: "Paragraph",
    content: (
      <>
        Should you wish to join our Board of Directors, please <a>learn more</a>
        .
      </>
    ),
  },
];
export const reportOfHope: PageElement[] = [
  { type: "Header", content: <>Report of Hope</> },
  {
    type: "Paragraph",
    content: (
      <>Our 2024 Report of Hope celebrates the many brave faces of Childcan.</>
    ),
  },
  {
    type: "Paragraph",
    content: <>Thank you for facing childhood cancer together.</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Please flip through the report, using the square icon to make the report
        full screen:
      </>
    ),
  },
];
export const careers: PageElement[] = [
  { type: "Header", content: <>Careers</> },
  { type: "TertiaryHeader", content: <>Childcan’s Board of Directors</> },
  {
    type: "Paragraph",
    content: (
      <>
        We currently have openings on our Board of Directors. As a member of the
        Board, you will provide governance, financial and strategic oversight to
        advance the mission of Childcan.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        You will participate in regular Board meetings (7 meetings annually),
        support fundraising and signature events, develop and foster stakeholder
        relationships to promote and advance Childcan within the community while
        helping meet and sustain its annual fundraising goals. Attendance at
        Board and Committee meetings can be in-person or virtual.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>The Qualifications:</strong>
      </>
    ),
  },
  {
    type: "Paragraph",
    content: <>We are looking for Board Members who have</>,
  },
  {
    type: "List",
    items: [
      "A passion for the mission of Childcan",
      "Over 18 years of age",
      "Ideally located in Essex County and/or Grey County",
      "Able to leverage social capital within regions",
      "Able to give a minimum commitment of one 3-year term, 4 hours/month",
    ],
  },
  {
    type: "DoubleList",
    list: {
      type: "DoubleListElement",
      title:
        "Experience in any or all the following to complement the current board structure:",
      items: [
        "Prior non-profit/Governance Board experience",
        "Leadership/Project Management attributes",
        "Financial/Accounting expertise (CPA)",
        "Fundraising/Development experience",
        "Governance expertise",
        "Past/present affiliation in healthcare sector",
        "Experience with childhood cancer",
      ],
    },
  },

  {
    type: "Paragraph",
    content: (
      <>
        <strong>Time Commitment:</strong>
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Long-term (term of 3 years, renewable for 2 terms, for a total of 6
        years). Board meetings held 7 times a year. Annual General Meeting held
        in June.
      </>
    ),
  },
  { type: "Paragraph", content: <>How to apply:</> },
  {
    type: "Paragraph",
    content: (
      <>
        Please forward your resume, together with a cover letter explaining your
        key attributes and interest in serving on Childcan’s Board of Directors,
        to the attention of Susan Marshall, Board Chair at{" "}
        <a>info@childcan.com</a>. Any questions can be directed to Suzanne
        Fratschko Elliott at <a>info@childcan.com</a>.{" "}
      </>
    ),
  },
  {
    type: "TertiaryHeader",
    content: <>There are currently no other vacant positions.</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Should you be interested in volunteering, please contact{" "}
        <a>info@childcan.com</a>.{" "}
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan is a registered charity that provides responsive and
        compassionate support services for families facing the challenging
        journey through childhood cancer - from diagnosis, through treatment,
        post-treatment care or bereavement.{" "}
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Learn more about{" "}
        <a>Childcan, our Vision, Mission, and Core Values here.</a>
      </>
    ),
  },
];
export const aboutUsPageLayout: Record<string, PageElement[]> = {
  "About Us": aboutUs,
  "Our Families": ourFamilies,
  "Our News": ourNews,
  "Our Team": ourTeam,
  Careers: careers,
};
