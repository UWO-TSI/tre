export type FamilyStory = {
  title: string;
  date: Date;
  text: string[];
  heroImage: string;
  images: {
    src: string;
    alt: string;
    align: "left" | "right";
  }[];
};

export const familyStories: Record<string, FamilyStory> = {
  tara: {
    title: 'Tara "Boom"',
    date: new Date(2025, 11, 1),
    text: [
      "Some stories are etched in your heart long after you hear them. Stories of courage, love, and a kind of hope that refuses to fade, even in the face of heartbreak. This is one of those stories where sorrow is transformed into something extraordinary. ",
      "It’s the story of a little girl named Tara “Boom” Houston. A bright, vibrant seven-year-old who adored her family, friends, and horses more than anything else in the world. It’s a story that begins with laughter and ends with lasting light and though we wish we could rewrite the middle, what remains is a legacy that continues to bring hope to countless others.",
      "Everyone called Tara “Boom” thanks to a song that Tara’s Mom & Dad would sing to her when she was little… ‘Ta-ra-ra-Boom-de-ay’.  “She was convinced that her real name was Tara Elizabeth Boomdeh Houston, Boom for short.”",
      "It was at the London Balloon Festival in August 2002 where Tara was enjoying the rides and candy floss, where her mom noticed Tara was walking funny. Mom wondered if it was the rides, heat stroke, or possibly just another ear infection from swimming in the lake, but the doctor said it was nothing to worry about. A few days later, as Dad was leaving to go to work, Tara wanted to say goodbye and stumbled out the door like she was drunk. Motherly instincts kicked in, and, as a family they headed straight to the Emergency Room. ",
      "“I noticed more and more white coats were surrounding us doing dexterity testing on Tara. Eventually, I asked what they were thinking. I was floored when I heard the words, ‘brain tumour’.”  ",
      "Tara was admitted to the hospital for five days, then sent home, and not with good news.",
      "The tumour was in Tara’s brain stem. The doctors said there was nothing they could do. Tara’s family was told they had 3-6 months. Time to go to live their best life and make more memories. ",
    ],
    heroImage: "/images/_DSC5337.JPG",
    images: [
      {
        src: "/images/Tara+family+pic.webp",
        alt: "",
        align: "right",
      },
      {
        src: "/images/Tara+family+pic.webp",
        alt: "",
        align: "left",
      },
    ],
  },
};
