import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { projectId } from './env'

export default defineConfig({
  name: 'default',
  title: 'Powweb blog',

  projectId,
  dataset: 'production',


  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
