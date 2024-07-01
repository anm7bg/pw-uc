// import {defineCliConfig} from 'sanity/cli'

// export default defineCliConfig({
//   api: {
//     projectId: 'n2yj5q5m',
//     dataset: 'production'
//   }
// })

import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })