import type {StructureResolver} from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Admin')
    .items([
      S.documentTypeListItem('event').title('Manage Events'),
      S.documentTypeListItem('guide').title('Help & Guides'),
    ]);