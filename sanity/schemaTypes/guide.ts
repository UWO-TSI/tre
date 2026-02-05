import { defineType, defineField } from "sanity";

export const guide = defineType({
  name: "guide",
  title: "Guides",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Guide Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Events", value: "events" },
          { title: "Images", value: "images" },
          { title: "General", value: "general" },
        ],
      },
    }),
    defineField({
      name: "content",
      title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
