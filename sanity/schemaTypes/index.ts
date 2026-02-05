import { type SchemaTypeDefinition } from "sanity";

import { event } from "./event";
import { guide } from "./guide";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, guide],
};
