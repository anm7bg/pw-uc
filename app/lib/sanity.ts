import { createClient } from "next-sanity";

export const client = createClient ({
    apiVersion: "v2022-03-07",
    dataset: "production",
    projectId: "n2yj5q5m",
    useCdn:  false
})