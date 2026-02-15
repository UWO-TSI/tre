import { defineField, defineType } from "sanity";

defineField({
  name: "pdf",
  type: "file",
  options: {
    accept: "application/pdf",
  },
});
export const reportOfHope = defineType({
  name: "reportofhope",
  title: "Report of Hope",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year of the Report",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "report",
      title: "Report of Hope File",
      type: "file",
      validation: (Rule) => Rule.required(),
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "finance",
      title: "Financial Statement File",
      type: "file",
      validation: (Rule) => Rule.required(),
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image that will show on the side of the page ",
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
      title: "year",
    },
  },
});
