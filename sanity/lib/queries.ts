import { groq } from "next-sanity";

/**
 * GROQ queries for fetching event data from Sanity
 * These queries can be used in your frontend when you're ready to integrate
 */

// Get all published events, sorted by date (newest first)
export const allEventsQuery = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    description,
    mainImage,
    featured,
    buttonTitle,
    buttonLink
  }
`;

// Get a single event by slug
export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    description,
    mainImage,
    imageGallery[] {
      asset,
      alt
    },
    buttonTitle,
    buttonLink,
    googleCalendarLink,
    icsCalendarLink,
    source,
    featured
  }
`;

// Get featured events only
export const featuredEventsQuery = groq`
  *[_type == "event" && featured == true] | order(date desc) {
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    description,
    mainImage,
    featured,
    buttonTitle,
    buttonLink
  }
`;

// Get upcoming events (future dates only)
export const upcomingEventsQuery = groq`
  *[_type == "event" && date > now()] | order(date asc) [0...10] {
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    description,
    mainImage,
    featured,
    buttonTitle,
    buttonLink
  }
`;

// Get next and previous events relative to a given date
export const adjacentEventsQuery = groq`
{
  "previous": *[_type == "event" && date < $currentDate] | order(date desc) [0] {
    _id,
    title,
    slug,
    date
  },
  "next": *[_type == "event" && date > $currentDate] | order(date asc) [0] {
    _id,
    title,
    slug,
    date
  }
}
`;
