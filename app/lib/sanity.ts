import { createClient } from "next-sanity";
import { projectId } from "@/sanity/env";

export const client = createClient ({
    apiVersion: "v2022-03-07",
    dataset: "production",
    projectId,
    useCdn:  false
})