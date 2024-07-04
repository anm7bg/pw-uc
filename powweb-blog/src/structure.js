export const structure = (S) => S.documentTypeList('post')

// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { structure } from './src/deskStructure'

export default defineConfig({
  // ...
  plugins: [
    structureTool({
      structure
    })
  ]
})