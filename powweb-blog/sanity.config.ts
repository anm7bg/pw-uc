import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { projectId } from './env'
import { dataset } from './env'
import { apiVersion } from './env'

export default defineConfig({
  name: 'default',
  title: 'Powweb blog',

  projectId,
  dataset,
  apiVersion,


  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
