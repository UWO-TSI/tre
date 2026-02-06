import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin")
    .items([
      // Events section - fully editable
      S.documentTypeListItem("event").title("Manage Events"),

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
