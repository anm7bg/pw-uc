
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION
  // process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-03-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  // process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', 
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

// console.log("dataset")
// console.log(process.env.test)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2yj5q5m',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
