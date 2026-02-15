import { type SchemaTypeDefinition } from "sanity";

import { event } from "./event";
import { guide } from "./guide";
import { family } from "./family";
import { homepage } from "./homepage";
import { news } from "./news";
import { reportOfHope } from "./reportOfHope";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, guide, family, homepage, news, reportOfHope],
};
