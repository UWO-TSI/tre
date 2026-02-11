import { type SchemaTypeDefinition } from "sanity";

import { event } from "./event";
import { guide } from "./guide";
import { family } from "./family";
import { homepage } from "./homepage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, guide, family, homepage],
};
