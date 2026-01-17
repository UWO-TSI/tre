interface Header {
  type: "Header";
  content: React.ReactNode;
}
interface Subheader {
  type: "Subheader";
  content: React.ReactNode;
}
interface TertiaryHeader {
  type: "TertiaryHeader";
  content: React.ReactNode;
}
interface Paragraph {
  type: "Paragraph";
  content: React.ReactNode;
}
interface Button {
  type: "Button";
  text: string;
  href: string;
}
interface List {
  type: "List";
  items: string[];
}
interface DoubleList {
  type: "DoubleList";
  list: DoubleListElement;
}
interface DoubleListElement {
  type: "DoubleListElement";
  title: string;
  items: string[];
}

export type PageElement =
  | Header
  | Button
  | Paragraph
  | Subheader
  | List
  | DoubleList
  | TertiaryHeader;

const hereForYouPage: PageElement[] = [
  {
    type: "Header",
    content: (
      <>
        Here For <strong>You</strong>
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Hearing the words “your child has cancer” is life-changing. Childcan is
        here to help you rebalance and establish a new normal. We’re here to ask
        you what you need, what supports would make a difference for you, right
        now. And then to answer with programs that provide assistance in even
        more ways than you might expect. Our services have all been developed to
        respond to the families we’ve supported for the past 50 years, to
        address the needs they have identified and experienced. And to remind
        you that you are not alone.
      </>
    ),
  },
];

const financialSupportPage: PageElement[] = [
  {
    type: "Header",
    content: <>Financial Support</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Childhood cancer is expensive. Costs such as hospital parking, meals
        away from home, and travel to and from appointments are immediate,
        ongoing and can really add up. Time away from work, caring for your
        child, can make even everyday household expenses overwhelming. Childcan
        is here to help. If your child has been diagnosed or is receiving
        treatment at Children’s Hospital, London Health Sciences Centre or
        Windsor Regional Hospital’s Paediatric Oncology Satellite Clinic, and
        you would like to access any of these supports, please contact our
        office at{" "}
        <a href="tel:519-685-3500" className="text-link-blue">
          519-685-3500
        </a>{" "}
        or{" "}
        <a href="mailto:info@childcan.com" className="text-link-blue">
          info@childcan.com
        </a>{" "}
        or
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=GJ_2kAOFsEqmtRcUIF577HxhnHPJybtPjITj_N2TfJhUQzhESzRBOFIyU0FRV1ZFRVMwSlQ1RlRWOS4u"
          className="text-link-blue"
        >
          apply for support
        </a>
        . Our family support team is here for you.
      </>
    ),
  },
];

const emotionalSupportPage: PageElement[] = [
  {
    type: "Header",
    content: <>Emotional Support</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Childhood cancer can be isolating. As wonderfully supportive as they may
        be, it is difficult for family and friends to truly comprehend the
        impact of childhood cancer on every area of a family’s life. Childcan’s
        family support staff offer an open, confidential and non-judgmental
        source of emotional support, available throughout your childhood cancer
        journey. If your child has been diagnosed or is receiving treatment at
        Children’s Hospital, London Health Sciences Centre or Windsor Regional
        Hospital’s Paediatric Oncology Satellite Clinic, and you would like to
        access any of these supports, please contact our office at{" "}
        <a href="tel:519-685-3500" className="text-link-blue">
          519-685-3500
        </a>{" "}
        or{" "}
        <a href="mailto:info@childcan.com" className="text-link-blue">
          info@childcan.com
        </a>{" "}
        or
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=GJ_2kAOFsEqmtRcUIF577HxhnHPJybtPjITj_N2TfJhUQzhESzRBOFIyU0FRV1ZFRVMwSlQ1RlRWOS4u"
          className="text-link-blue"
        >
          apply for support
        </a>
        . Our family support team is here for you.
      </>
    ),
  },
];

const socialSupportPage: PageElement[] = [
  {
    type: "Header",
    content: <>Social Support</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan’s programs help build community, facilitating the sharing of
        experience through connection with other Childcan families. They help to
        re-establish normalcy under circumstances that have caused an upheaval
        in a family’s and a child’s life. If your child has been diagnosed or is
        receiving treatment at Children’s Hospital, London Health Sciences
        Centre or Windsor Regional Hospital’s Paediatric Oncology Satellite
        Clinic, and you would like to access any of these supports, please
        contact our office at{" "}
        <a href="tel:519-685-3500" className="text-link-blue">
          519-685-3500
        </a>{" "}
        or{" "}
        <a href="mailto:info@childcan.com" className="text-link-blue">
          info@childcan.com
        </a>{" "}
        or
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=GJ_2kAOFsEqmtRcUIF577HxhnHPJybtPjITj_N2TfJhUQzhESzRBOFIyU0FRV1ZFRVMwSlQ1RlRWOS4u"
          className="text-link-blue"
        >
          apply for support
        </a>
        . Our family support team is here for you.
      </>
    ),
  },
];

const researchSupportPage: PageElement[] = [
  {
    type: "Header",
    content: <>Research Support</>,
  },
  {
    type: "Paragraph",
    content: (
      <>Childcan’s research investments are bringing hope closer to home.</>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Working with the pediatric oncology research unit at London’s Children’s
        Hospital, we are helping to increase accessibility to clinical trials by
        funding novel research right here at home. Without this, children and
        families from our region had to travel to Toronto or more distant
        centres to participate in any such trial – participation that could be
        economically and logistically difficult, if not impossible.
      </>
    ),
  },
];

const upcomingEventsPage: PageElement[] = [
  {
    type: "Header",
    content: <>Upcoming Family Events</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        Family time together, away from cancer… Childcan family events are
        organized at varying times throughout the year and include holiday
        gatherings, outdoor events, and trips to Kusterman’s Adventure Farm and
        Colasanti’s.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan families will be notified of upcoming events via email so
        please{" "}
        <a href="#footer" className="text-link-blue">
          ensure you are on our mailing list
        </a>
        , as well as following us on our social media platforms or keeping an
        eye on listings on this page.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        In addition, members of our community organize a variety of different
        activities in order to raise funds to support our programs and services,
        and Childcan-hosted fundraising events also typically attract many of
        our families and friends. We hope you’ll participate in some of these.
      </>
    ),
  },
  {
    type: "Button",
    text: "See all upcoming events",
    href: "https://childcan.com/events",
  },
];

const qaPage: PageElement[] = [
  {
    type: "Paragraph",
    content: <>Potential questions to ask your healthcare team</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        This page shows the basic guideline for parents to prepare their
        consultation with healthcare teams, effectively communicate with the
        healthcare team, and help parents better understand their children’s
        diagnosis, treatment preparation, treatment options, and follow-up
        cares.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>Here are some sample questions you can ask for your healthcare team:</>
    ),
  },
  {
    type: "DoubleList",
    list: {
      type: "DoubleListElement",
      title: "Phase I: after diagnosis",
      items: [
        "Can you explain my child’s pathology report to me?",
        "What do my children need to prepare physically and mentally for this diagnosis?",
        "What stage is cancer? What is the prognosis?",
      ],
    },
  },
];

export const pageLayouts: Record<string, PageElement[]> = {
  "Here for You": hereForYouPage,
  "Financial Support": financialSupportPage,
  "Emotional Support": emotionalSupportPage,
  "Social Support": socialSupportPage,
  "Research Support": researchSupportPage,
  "Upcoming Family Events": upcomingEventsPage,
  "Q&A": qaPage,
};
