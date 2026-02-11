import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin")
    .items([
      // Homepage - Singleton
      S.listItem()
        .title("Homepage Configuration")
        .child(
          S.document()
            .schemaType("homepage")
            .documentId("homepage")
            .title("Homepage Configuration"),
        ),

      // Events section - fully editable
      S.documentTypeListItem("event").title("Manage Events"),

      // Families section
      S.documentTypeListItem("family").title("Manage Families"),

      // Guides section - with informational note
      S.listItem()
        .title("Help & Guides")
        .child(
          S.documentList()
            .title("Help & Guides")
            .filter('_type == "guide"')
            .child((documentId) =>
              S.document().documentId(documentId).schemaType("guide"),
            ),
        ),
    ]);
