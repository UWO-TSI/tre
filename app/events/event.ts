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
};
