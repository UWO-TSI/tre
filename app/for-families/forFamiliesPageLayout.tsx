import { PageElement } from "@/components/pageLayout/PageElement";

export const hereForYouPage: PageElement[] = [
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
  {
    type: "Paragraph",
    content: (
      <>
        Our strong relationship with our hospital partners allows Childcan to
        connect families with the resources, information, and people that can
        offer relief in the face of childhood cancer. Our programs and services
        are designed specifically for families living with childhood cancer and
        are all made possible by donors.{" "}
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        If your child has been diagnosed or is receiving treatment at Children’s
        Hospital, London Health Sciences Centre or Windsor Regional Hospital’s
        Paediatric Oncology Satellite Clinic, and you would like to access any
        of these supports, please contact our office at{" "}
        <a className="text-link-blue" href="tel:15196853500">
          519-685-3500
        </a>{" "}
        or{" "}
        <a className="text-link-blue" href="info@childcan.com">
          info@childcan.com
        </a>
        . Our family support team is here for you.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        If you have not already been registered as a Childcan family, you can
        now also apply for support.
      </>
    ),
  },
  {
    type: "Button",
    text: "Apply for support",
    href: "https://forms.office.com/Pages/ResponsePage.aspx?id=GJ_2kAOFsEqmtRcUIF577HxhnHPJybtPjITj_N2TfJhUQzhESzRBOFIyU0FRV1ZFRVMwSlQ1RlRWOS4u",
  },
  {
    type: "Button",
    text: "Learn more about support available",
    href: "https://childcan.com/financial-support",
  },
];

export const financialSupportPage: PageElement[] = [
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
        or{" "}
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
  { type: "Subheader", content: <>Childcan Care Package</> },
  {
    type: "Paragraph",
    content: (
      <>
        Soon after receiving a childhood cancer diagnosis, a family will be
        referred to Childcan by Children’s Hospital or the Paediatric Oncology
        Satellite Clinic. This allows support to begin right away. A member of
        our family support team will be in touch with the family as soon as
        possible to discuss the supports Childcan can provide. In addition, a
        package of information and resources is given to each newly diagnosed
        family. The packages include:
      </>
    ),
  },
  {
    type: "List",
    items: [
      "A detailed explanation of all programs and support services offered by Childcan;",
      "A Children’s Hospital parking pass to cover parking costs for the entire time their child is on active treatment;",
      "A special hand-made quilt donated by quilters from our region;",
      "Gas, restaurant, or other gift cards to help with immediate costs of treatment; and",
      "Information about other available support resources.",
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        Families can also self-refer, but please note that the services we
        provide are for families who have been diagnosed and/or are being
        treated at Children’s Hospital, LHSC and/or Windsor’s satellite clinic.
        Unfortunately, with current funding and resources, we cannot support
        families from other regions.
      </>
    ),
  },
  { type: "Subheader", content: <>Max’s Passes Parking Program</> },
  {
    type: "Paragraph",
    content: (
      <>
        In addition to the Children’s Hospital parking pass provided in the
        Childcan Care Package, our Parking Program provides:
      </>
    ),
  },
  {
    type: "List",
    items: [
      "Parking tokens for the satellite clinics at Windsor Regional Hospital and Kitchener’s Grand River Hospital for those receiving treatment at either location; and",
      "Parking reimbursement for families travelling from the region to Toronto’s SickKids Hospital for treatment unavailable locally.",
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        We are extremely grateful to all involved with{" "}
        <a className="text-link-blue" href="https://miraclemaxsminions.ca/">
          Miracle Max’s Minions
        </a>{" "}
        for their support of our Max’s Passes parking passes.
      </>
    ),
  },
  { type: "Subheader", content: <>Family Meal Voucher Program</> },
  {
    type: "Paragraph",
    content: (
      <>
        This program provides two meal vouchers per day, per family, while their
        child is an inpatient at Children’s Hospital, LHSC, or at the Windsor
        Regional Hospital satellite clinic, alleviating one more
        treatment-related expense.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        At both centres, the hospital meal vouchers are available from our
        family support staff.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Thank you to{" "}
        <a className="text-link-blue" href="http://preferred-ins.com/">
          Preferred Insurance
        </a>
        , who ensure that every family is covered through this meal program.
      </>
    ),
  },
  { type: "Subheader", content: <>Family Financial Assistance Program</> },
  {
    type: "Paragraph",
    content: (
      <>
        This program helps with urgent and everyday financial needs made
        untenable by the costs associated with treatment or long-term care.
        Direct financial support is available for each family to assist with
        expenses such as:
      </>
    ),
  },
  {
    type: "List",
    items: [
      "Assitive devices;",
      "Medication;",
      "Rent and mortgage payments;",
      "Utility bills;",
      "Grocery costs;",
      "Travel costs; or",
      "Whatever expenses are most burdensome for the family.",
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        Bills and expenses can be submitted through our family support staff,
        with each family being able to access up to $1,750 in direct financial
        support. For the purposes of this program, a relapse is treated as a new
        diagnosis, meaning the family can access a further $1,750 in financial
        support.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Where possible, we are striving to make payments electronically. If
        cheques are still required, please anticipate a 2-3 week turnaround, and
        potential mailing delays.
      </>
    ),
  },
  { type: "Subheader", content: <>Treatment-Related Travel Program</> },
  {
    type: "Paragraph",
    content: (
      <>
        Many of the families we support travel significant distances to get
        their children the treatment they need. For qualifying families, we help
        to offset the accompanying expenses with a gas reimbursement program and
        support with hotel costs. The intention of our gas reimbursement program
        is to assist families for whom the Canadian Cancer Society’s medical
        transportation program is not applicable.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Through our travel program, we have negotiated very favourable rates at
        a couple of London accommodations. We further assist by offsetting a
        portion of the discounted cost. This program is available for families
        who don’t qualify to stay at London’s Ronald McDonald House — for
        example, those who are coming for an early morning outpatient
        appointment. We also provide support for our families who receive
        treatment at SickKids by offsetting a portion of hotel or Toronto’s
        Ronald McDonald House stays while they are there for their child’s care.
      </>
    ),
  },
  { type: "Subheader", content: <>Post-Secondary Bursaries</> },
  {
    type: "Paragraph",
    content: (
      <>
        Childhood cancer survivors who are attending post-secondary education
        are eligible for a one-time bursary of $1,000. An annual application
        process opens in April, with successful recipients announced in
        mid-summer and bursaries awarded before the beginning of the fall
        semester.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: <>The application period for bursaries will open in April.</>,
  },
  {
    type: "Button",
    text: "Learn more about Childcan Bursaries",
    href: "https://childcan.com/bursary",
  },
  { type: "Subheader", content: <>Funeral Costs</> },
  {
    type: "Paragraph",
    content: (
      <>
        When the worst imaginable outcome is the unfortunate reality, Childcan
        provides support with funeral costs, usually directly to the funeral
        home, to help our families cover these expenses and ensure financial
        circumstances are not a barrier to the family’s preferred way of
        honouring their child.
      </>
    ),
  },
];

export const emotionalSupportPage: PageElement[] = [
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
        or{" "}
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
  { type: "Subheader", content: <>Recreational Therapy Program</> },
  {
    type: "Paragraph",
    content: (
      <>
        This program will guide families through play with purpose, and will
        explore creativity, nurture curiosity, and build meaningful connections.
        Spaces for this program are limited.
      </>
    ),
  },
  {
    type: "Button",
    text: "Learn more",
    href: "https://childcan.com/recreational-therapy",
  },
  { type: "Subheader", content: <>Ongoing Family Support</> },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan staff are here to help families and children through a journey
        they should never have to face. Our family support team has personal,
        lived experience with childhood cancer and is available to listen,
        support, and guide.
      </>
    ),
  },
  { type: "Subheader", content: <>Bereavement Counselling</> },
  {
    type: "Paragraph",
    content: (
      <>
        This program supports families whose child has earned their “angel
        wings” much too soon and includes:
      </>
    ),
  },
  {
    type: "List",
    items: [
      "Group, couple or individual bereavement counselling for parents; and",
      "Group or individual bereavement counselling for siblings.",
    ],
  },
  { type: "Subheader", content: <>Sibling Support</> },
  {
    type: "Paragraph",
    content: (
      <>
        Childhood cancer affects the entire family, including siblings. Because
        of this, we have developed programs for the brothers and sisters of the
        diagnosed child. This includes the Recreational Therapy program
        mentioned above, and our Super Star Sibs program.
      </>
    ),
  },
  {
    type: "Button",
    text: "Learn more about Super Star Sibs",
    href: "https://childcan.com/superstarsibs",
  },
  { type: "Subheader", content: <>Healthy Mind, Body & Support</> },
  {
    type: "Paragraph",
    content: (
      <>
        Childcan has partnered with the YMCA of Southwestern Ontario to provide
        greatly discounted memberships to our families! With programs for all
        ages, the Y focuses on a healthy mind, body and spirit, and this
        partnership offers a 20% on YMCASWO “Everything” membership tiers. If
        you’re interested, feel free to{" "}
        <a className="text-link-blue" href="mailto:info@childcan.com">
          contact us
        </a>{" "}
        and we’ll be in touch to advise about the necessary steps for you to
        start your membership.
      </>
    ),
  },
];

export const socialSupportPage: PageElement[] = [
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
        or{" "}
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
  { type: "Subheader", content: <>Educational Support</> },
  {
    type: "Paragraph",
    content: (
      <>
        Because each Childcan family is unique, we offer personalized support
        that creates solutions for every family, and every situation. This
        includes information about navigating the new normal, and school, as one
        of the mainstays of a child’s life, is an important part of this.
        Treatment can cause significant disruptions to a child’s learning and
        the goal of our Education, Volunteer Tutoring and Early Years Programs
        is to help a child successfully catch up to their peers and maximize
        their potential.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        An important part of ensuring success is working with teachers so they
        understand the unique challenges that can be present for childhood
        cancer survivors. Experts from Childcan and Children's Hospital spent
        some time with student teachers, explaining how cancer and its treatment
        can affect children's learning and school success. Two videos were
        created from this session which provide information which could be
        valuable to educators and parents in helping their children succeed.
        View these videos on our Video Resources page.
      </>
    ),
  },
  {
    type: "Button",
    text: "Video Resources",
    href: "https://childcan.com/video-resources",
  },
  { type: "TertiaryHeader", content: <>Volunteer Tutoring Program</> },
  {
    type: "Paragraph",
    content: (
      <>
        The Volunteer Tutoring Program is a no-cost tutoring program for
        students in grades 1 through 10 who are off treatment and back in
        school. The tutoring targets mathematics and/or English as well as
        offering homework assistance, helping students to catch up on schooling
        missed during treatment. Tutors are trained, qualified educators –
        retired, working and student teachers, principals and early childhood
        educators – who volunteer their time and work one-on-one with the child.
        Children in need of support are referred to Childcan by Children’s
        Hospital’s School Liaison. Our Volunteer Tutoring Program Coordinator
        then makes every effort to find a suitable tutor close to the child.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        If you are an educator who can volunteer your time, please reach out or
        complete this form. We have particular needs in:
      </>
    ),
  },
  {
    type: "List",
    items: ["Chatham", "Dashwood", "London", "St. Thomas", "West Lorne"],
  },
  {
    type: "Button",
    text: "Want to become a Volunteer Tutor? Please complete this form",
    href: "https://forms.gle/gexC3gbg8mejrHp79",
  },
  { type: "TertiaryHeader", content: <>Early Years Program</> },
  {
    type: "Paragraph",
    content: (
      <>
        The Early Years Program is designed to help young children to overcome
        delays resulting from their cancer and prepare them for school entry or
        re-entry. The program's focus is on social, emotional, literacy,
        numeracy and motor skills development.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        To provide at-home assistance, Occupational Therapy students from
        Western University have helped us to put together a series of{" "}
        <a
          className="text-link-blue"
          href="https://childcan.com/video-resources"
        >
          School Skills Videos
        </a>{" "}
        which help early learners to improve their handwriting, memory,
        attention and other skills. These helpful videos offer tips to help
        parents work with their children, and can be viewed on our{" "}
        <a
          className="text-link-blue"
          href="https://childcan.com/video-resources"
        >
          Video Resources page
        </a>
        .
      </>
    ),
  },
  { type: "TertiaryHeader", content: <>Dolly Parton Imagination Library</> },
  {
    type: "Paragraph",
    content: (
      <>
        In partnership with the Dolly Parton Imagination Library, all of our on-
        and off-treatment children will receive a book each month, delivered
        directly to their door, until they reach the age of five. The learning
        opportunities from these storybooks can be maximized using the
        guidelines and suggestions our dedicated volunteer educators have
        developed.{" "}
      </>
    ),
  },
  { type: "Button", text: "Learn more", href: "https://childcan.com/dolly" },
  { type: "Subheader", content: <>Family Fun Days</> },
  {
    type: "Paragraph",
    content: (
      <>
        At various points throughout the year, Childcan organizes family events
        and activities to provide important social support and connection and
        allow kids to be kids and families to have time together, away from
        cancer. These events have included our:
      </>
    ),
  },
  {
    type: "List",
    items: [
      "Annual holiday parties in London and Windsor; and",
      "Outings to local attractions such as Kustermans Berry Farm, or Pepe’s Pumpkin Patch.",
    ],
  },
  {
    type: "Paragraph",
    content: (
      <>
        As plans are announced, events and activities will be listed on our
        website and shared through our social media channels, email and
        e-newsletters. ,
      </>
    ),
  },
  { type: "Subheader", content: <>Information and Resources</> },
  {
    type: "Paragraph",
    content: (
      <>
        Families whose children are diagnosed and living with cancer are always
        seeking information to better understand the disease and their options.
        Knowledge can be empowering, but too often searches reveal inaccurate or
        irrelevant information which can be hard to distinguish. Our family
        support staff help steer families in the right direction when looking
        for support agencies, existing government programs, or credible
        resources.{" "}
      </>
    ),
  },
  { type: "Subheader", content: <>Advocacy and Awareness</> },
  {
    type: "Paragraph",
    content: (
      <>
        Working in collaboration with individuals and organizations locally,
        regionally, provincially and nationally, Childcan advocates for children
        with cancer and supports awareness-raising activities during September,
        officially recognized as Childhood Cancer Awareness Month, and
        throughout the year. We encourage our families and supporters to share
        our social media posts and to proudly “glow gold” during September (and
        year-round).{" "}
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Through our online store, we have different ways to show support
        including gold ribbon magnets and pins, gold ribbon and branded
        clothing, and other items. All proceeds help us to provide our programs
        and services.{" "}
      </>
    ),
  },
];

export const researchSupportPage: PageElement[] = [
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
  {
    type: "Paragraph",
    content: (
      <>
        We have been able to successfully support the Paediatric Oncology
        Research Unit for several years now, helping these investigators
        initiate many clinical trials and studies, including several local and
        provincial “firsts”.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        This research is ensuring our kids can access novel treatments and
        therapies when there are no other options.{" "}
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        We know that there are now Childcan kids on therapies that doctors would
        not have thought or known to offer because of the findings from the
        PROFYLE research we have helped fund.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Since 2013, Childcan has invested a total of $560,000, including two
        investments into research at the University of Windsor.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        None of this would be possible without the support from our circle of
        community.
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        If you are interested in other newly published paediatric research, see{" "}
        <a
          className="text-link-blue"
          href="https://childcan.com/pediatric-research"
        >
          this page
        </a>
        .{" "}
      </>
    ),
  },
  {
    type: "Paragraph",
    content: (
      <>
        Looking for research that YOU can participate in? See{" "}
        <a
          className="text-link-blue"
          href="https://childcan.com/research-opportunities"
        >
          this page
        </a>
        .
      </>
    ),
  },
];

export const upcomingEventsPage: PageElement[] = [
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

export const qaPage: PageElement[] = [
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
    type: "List",
    items: [
      "Phase I: after diagnosis",
      {
        type: "InnerList",
        items: [
          "Can you explain my child’s pathology report to me?",
          "What do my children need to prepare physically and mentally for this diagnosis?",
          "What stage is cancer? What is the prognosis?",
        ]
      },
      "Phase II: treatment options/selection",
      {
        type: "InnerList",
        items: [
          "Pros and cons of different treatments",
          "What is the goal of the treatment? What are the success rate and relapse rate? ",
          "What are the possible side effects of each treatment (short and long-term)? ",
          "Will the treatment affect my child’s normal growth and development?",
          "How will the treatment affect my child’s life? Can they still go to school or require special activities?",
          "How to cooperate with the healthcare team to finish the treatment? ",
          "What support services are available to my child and my family? ",
        ]
      },
      "Phase III: treatment preparation",
      {
        type: "InnerList",
        items: [
          "Can you describe my children’s recovery from the surgery?",
          "Potential side effects of different treatments, preparation, and minimize influence? ",
          "How long will the surgery take and how long will my children be in the hospital? ",
          "Will my children receive the treatment at a hospital, clinic, or at home? And what’s the difference? ",
          "How to communicate with my children effectively and notice any side effects in time? ",
          "What can I do to relieve the side effects? ",
        ]
      },
      "Phase IV: aftercare",
      {
        type: "InnerList",
        items: [
          "What is the cancer relapse rate? How should I observe for any special signs or symptoms? ",
          "After receiving treatment, how long the side effects will last?",
          "What follow-up tests will my children need, and how often?",
          "How do I get a treatment summary and survivorship care plan to keep in my personal records?",
        ]
      },
    ]
  }
];
export const forFamilesPageLayout: Record<string, PageElement[]> = {
  "Here for You": hereForYouPage,
  "Financial Support": financialSupportPage,
  "Emotional Support": emotionalSupportPage,
  "Social Support": socialSupportPage,
  "Research Support": researchSupportPage,
  "Upcoming Family Events": upcomingEventsPage,
  "Q&A": qaPage,
};
