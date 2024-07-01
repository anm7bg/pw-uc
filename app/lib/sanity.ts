import { createClient } from "next-sanity";
import { projectId } from "@/powweb-blog/env";

export const client = createClient ({
    apiVersion: "2022-03-07",
    dataset: "production",
    projectId,
    useCdn:  false
})