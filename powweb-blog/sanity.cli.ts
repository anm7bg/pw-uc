import { defineCliConfig } from 'sanity/cli'
import { projectId } from './env';
import { dataset } from './env';


export default defineCliConfig({ api: { projectId, dataset } })