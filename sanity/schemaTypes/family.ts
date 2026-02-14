import { defineField, defineType } from "sanity";

export const family = defineType({
  name: "family",
  title: "Family",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Family Name / Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g., Tara "Boom"',
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortSummary",
      title: "Short Summary",
      type: "text",
      rows: 3,
      description: "A brief summary for previews",
    }),
    defineField({
      name: "text",
      title: "Story Content",
      type: "text",
      description: "Paragraphs of the story.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Additional Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
});
