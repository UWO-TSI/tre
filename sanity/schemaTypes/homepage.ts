import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      hidden: true,
      initialValue: "Homepage Configuration",
    }),
    defineField({
      name: "carousel",
      title: "Image Carousel",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "text",
              title: "Button Text / Overlay Text",
              type: "string",
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "slug",
              validation: (Rule) => Rule.required(),
              description: "Where will the button link to...",
            }),
            defineField({
              name: "offset",
              title: "Vertical Offset",
              type: "string",
              description: "CSS object-position percentage (e.g., '20%')",
              initialValue: "20%",
            }),
          ],
          preview: {
            select: {
              title: "text",
              media: "image",
            },
            prepare(selection) {
              return {
                title: selection.title || "No text",
                media: selection.media,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "featuredFamily",
      title: "Featured Family",
      type: "reference",
      to: [{ type: "family" }],
      description: "Select the family to feature on the main page",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Homepage Configuration",
      };
    },
  },
});
