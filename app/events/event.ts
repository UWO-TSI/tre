export interface Event {
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
  images: string[];
}

export const eventList: Record<string, Event> = {
  default: {
    mainHeroImage: "/images/PJDay.webp",
    title: "title",
    startDate: new Date(),
    endDate: new Date(),
    location: "loc",
    googleCalenderLink: "L",
    ICSCalenderLink: "l",
    description: "des",
    buttonTitle: "title",
    buttonLink: "link",
    images: [],
  },
};
