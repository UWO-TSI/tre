import { defineType, defineField } from "sanity";

export const guide = defineType({
  name: "guide",
  title: "Help & Guides",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Guide Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Name of the guide (e.g., 'How to Add Events')",
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
      description: "Organize guides by topic",
    }),
    defineField({
      name: "content",
      title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
      description: "Step-by-step instructions using the rich text editor",
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
    },
    prepare(selection) {
      const { title, category } = selection;
      return {
        title: title,
        subtitle: category ? `Category: ${category}` : "No category",
      };
    },
  },
});
