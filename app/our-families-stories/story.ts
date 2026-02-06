export type FamilyStory = {
  title: string;
  date: Date;
  text: string[];
  heroImage: string;
  images: string[];
};

export const familyStories: Record<string, FamilyStory> = {
  tara: {
    title: 'Tara "Boom"',
    date: new Date(2025, 11, 1),
    text: [
      "Some stories are etched in your heart long after you hear them. Stories of courage, love, and a kind of hope that refuses to fade, even in the face of heartbreak. This is one of those stories where sorrow is transformed into something extraordinary. ",
      "It’s the story of a little girl named Tara “Boom” Houston. A bright, vibrant seven-year-old who adored her family, friends, and horses more than anything else in the world. It’s a story that begins with laughter and ends with lasting light and though we wish we could rewrite the middle, what remains is a legacy that continues to bring hope to countless others.",
    ],
    heroImage: "/images/_DSC5337.JPG",
    images: [],
  },
};
