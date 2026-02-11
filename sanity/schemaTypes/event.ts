import { defineType, defineField } from "sanity";

export const event = defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The name of your event",
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
      description:
        "Click 'Generate' to create a URL-friendly version of the title",
    }),
    defineField({
      name: "date",
      title: "Legacy Date",
      type: "datetime",
      hidden: true,
      readOnly: true,
      deprecated: {
        reason: "Use startDate instead",
      },
    }),
    defineField({
      name: "mainImage",
      title: "Legacy Main Image",
      type: "image",
      hidden: true,
      readOnly: true,
      deprecated: {
        reason: "Use mainHeroImage instead",
      },
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      description: "When does the event start?",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      description: "When does the event end?",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Where is the event taking place?",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
      description: "Detailed information about the event",
    }),
    defineField({
      name: "shortSummary",
      title: "Short Summary",
      type: "text",
      rows: 3,
      description: "A brief summary for previews",
    }),
    defineField({
      name: "mainHeroImage",
      title: "Main Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: "The main banner image for the event",
    }),
    defineField({
      name: "previewImage",
      title: "Preview Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image used for event cards/previews",
    }),
    defineField({
      name: "images",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Describe the image for accessibility",
            },
          ],
        },
      ],
      description: "Additional images to display in the event gallery",
    }),
    defineField({
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
      description:
        "Text for the call-to-action button (e.g., 'Register Now', 'Learn More')",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description: "External website link for registration or more information",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "googleCalendarLink",
      title: "Google Calendar Link",
      type: "url",
      description: "Link to add event to Google Calendar",
    }),
    defineField({
      name: "icsCalendarLink",
      title: "ICS Calendar Link",
      type: "url",
      description: "Link to download ICS calendar file",
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description: "Attribution or source of the event information",
    }),
    defineField({
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      initialValue: false,
      description: "Toggle ON to highlight this event on the homepage",
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "startDate",
      media: "mainHeroImage",
      featured: "featured",
    },
    prepare(selection) {
      const { title, date, media, featured } = selection;
      const eventDate = date ? new Date(date).toLocaleDateString() : "No date";
      return {
        title: title,
        subtitle: `${eventDate}${featured ? " • Featured" : ""}`,
        media: media,
      };
    },
  },
});
