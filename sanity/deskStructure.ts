import { structureTool } from 'sanity/structure'

export const deskStructure = structureTool({
  structure: (S) =>
    S.list()
      .title('Admin')
      .items([
        S.documentTypeListItem('event').title('Manage Events'),
        S.documentTypeListItem('guide').title('Help & Guides')
      ])
})