import { defineType, defineField } from "sanity";

export const news = defineType({
  name: "news",
  title: "Manage News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "News Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The title for the news",
    }),
    defineField({
      name: "link",
      title: "Link to news",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
      description: "Short description of the news",
    }),
    defineField({
      name: "date",
      title: "Date",
      description: "Date of news",
      type: "datetime",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: "Image that will show on the news card",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for SEO and Accessibility",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "image",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
});
