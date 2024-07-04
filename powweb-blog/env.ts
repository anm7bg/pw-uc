// console.log('process.env')
// console.log(process.env.SANITY_STUDIO_DATASET)
// console.log(process.env.NEXT_PUBLIC_SANITY_DATASET)

export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: SANITY_DATASET'
)

// console.log("dataset")
// console.log(process.env.test)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: SANITY_PROJECT_ID'
)

export const useCdn = true

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
