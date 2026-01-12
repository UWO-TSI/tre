export type Event = {
  title: string;
  startDate: Date;
  endDate: Date;
  location: string;
  googleCalenderLink: string;
  ICSCalenderLink: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
  mainHeroImage: string;
  images: EventImage[];
  source: string;
};

export type EventImage = {
  imageUrl: string;
  alt: string;
};

export const eventList: Record<string, Event> = {
    default: {
    source: "some child can link",
    mainHeroImage: "/images/PJDay.webp",
    title: "PJ Day 2026",
    startDate: new Date(),
    endDate: new Date(),
    location: "loc",
    googleCalenderLink: "L",
    ICSCalenderLink: "l",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non sem in ipsum dignissim cursus. Cras vel odio vestibulum, vehicula libero at, pulvinar tellus. Proin ac faucibus lectus. Etiam luctus placerat maximus. Ut arcu ante, ultrices non auctor vel, tincidunt in orci. Cras quis quam at purus malesuada vulputate non et risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis imperdiet quam eget diam congue, quis semper ante efficitur. Nunc auctor volutpat scelerisque. Suspendisse potenti. Vivamus in congue neque, nec bibendum neque. Sed eleifend tincidunt turpis, non feugiat diam pellentesque sit amet. Pellentesque ac euismod leo. Pellentesque vehicula, quam ac convallis congue, orci ipsum pharetra leo, at pharetra justo massa finibus lorem. Proin diam nulla, suscipit nec sem ac, fermentum auctor quam. Duis massa nisi, viverra et augue a, venenatis feugiat purus. Curabitur id nisi neque. Ut euismod bibendum hendrerit. Integer vel sapien eros.Sed dolor ipsum, auctor eget felis id, mattis faucibus mi. Morbi eu posuere est. Praesent et felis dui. Phasellus eu feugiat nisi. Donec quis consequat orci, dictum convallis lectus. Integer non ante interdum, feugiat augue pulvinar, ultricies lacus. Nunc eget ante imperdiet, viverra leo quis, rutrum lacus. Duis varius nisl augue, id faucibus nunc consectetur in.",
    buttonTitle: "this is a big button",
    buttonLink: "link",
    images: [
      {
        imageUrl: "/images/running.webp",
        alt: "children running",
      },
      {
        imageUrl: "/images/running.webp",
        alt: "children running",
      },
    ],
  },
  "pj-day-2026": {
    source: "some childcan link",
    mainHeroImage: "/images/PJDay.webp",
    title: "PJ Day 2026",
    startDate: new Date(2026, 1, 15), // Feb, 15, 2026
    endDate: new Date(2026, 1, 15),
    location: "",
    googleCalenderLink: "https://calendar.google.com/calendar/u/0/r/eventedit?text=PJ+Day+2026&dates=20260215T050100Z/20260216T045900Z",
    ICSCalenderLink: "https://childcan.com/events/pj-day-2026?format=ical",
    description: "Help us to celebrate International Childhood Cancer Day by rocking your PJs all day long! Children affected by cancer wear their PJs every day. By wearing your PJs, you will show them that they are not alone. Get your school or business involved for more support and solidarity! As February 15 falls on a Sunday this year, show some love to children affected by cancer by wearing your PJs on February 13 - or any day in February that works for you! We have some tools at your disposal, so tell us you’re taking part and we’ll take it from there.",
    buttonTitle: "Learn more about PJ Day and see the toolkit",
    buttonLink: "https://childcan.com/pj-day",
    images: [],
  },
  "dip-2026-thomas": {
    source: "some childcan link",
    mainHeroImage: "/images/PJDay.webp",
    title: "Childcan's Polar Bear Dip 2026",
    startDate: new Date(2026, 2, 7), // March 7, 2026
    endDate: new Date(2026, 1, 15),
    location: "145 Division St S. Kingsville, ON N9Y 1P8, Canada",
    googleCalenderLink: "http://www.google.com/calendar/event?action=TEMPLATE&text=Childcan%27s%20Polar%20Bear%20Dip%202026&dates=20260307T140000Z/20260307T180000Z&location=42703%20Fruit%20Ridge%20Line%2C%20St%20Thomas%2C%20ON%20N5P%203S9%2C%20Canada",
    ICSCalenderLink: "https://childcan.com/events/dip-2026?format=ical",
    description: "Take the plunge for children facing childhood cancer. It’s time to be Freezin’ for a Reason! The much-loved Port Stanley Polar Bear Dip is back!On Saturday, March 7, 2026, we'll be welcoming you and your team of adventure-seekers back into the chilly waters at Little Beach. Note, check in is at the Masonic Centre of Central Elgin, please do not go directly to Little Beach without checking in to the Masonic Centre first to receive your wristband. Only those with the special wristband will be granted entry into the water. Buses will be provided to shuttle everyone to and from the beach. All of the proceeds support Childcan and the families we serve throughout Western Ontario, providing direct financial assistance, social and emotional support, and funding research at Children’s Hospital in London. ",
    buttonTitle: "Register now!",
    buttonLink: "https://childcan.akaraisin.com/ui/ChildcanPolarBearDip2026",
    images: [],
  },
  "dip-2026-kingsville": {
    source: "some childcan link",
    mainHeroImage: "/images/PJDay.webp",
    title: "Childcan's Polar Bear Dip Kingsville 2026",
    startDate: new Date(2026, 2, 28),
    endDate: new Date(2026, 2, 28),
    location: "Masonic Centre of Elgin 42703 Fruit Ridge Line, St Thomas, ON N5P 3S9, Canada",
    googleCalenderLink: "http://www.google.com/calendar/event?action=TEMPLATE&text=Childcan%27s%20Polar%20Bear%20Dip%20Kingsville%202026&dates=20260328T140000Z/20260328T200000Z&location=145%20Division%20St%20S%2C%20Kingsville%2C%20ON%20N9Y%201P8%2C%20Canada",
    ICSCalenderLink: "https://childcan.com/events/dip-2026-kingsville?format=ical",
    description: "SAVE THE DATE! Take the plunge for children facing childhood cancer. Get ready to do the Dip in Kingsville! On Saturday, March 28, 2026, we'll be welcoming you and your team of adventure-seekers into the chilly waters at Cedar Island Beach, Kingsville, ON. Note, check in is at the Kingsville Legion, please do not go directly to Cedar Island Beach without checking in at the Legion first to receive your wristband. Only those with the special wristband will be granted entry into the water. Buses will be provided to shuttle everyone to and from the beach. All of the proceeds support Childcan and the families we serve throughout Western Ontario, providing direct financial assistance, social and emotional support, and funding research at the University of Windsor.",
    buttonTitle: "Registration opens January 23, 2026",
    buttonLink: "",
    images: [],
  },
};
