import { createClient } from "next-sanity";
import { projectId } from "@/powweb-blog/env";
import { apiVersion } from "@/powweb-blog/env";
import { dataset } from "@/powweb-blog/env";
import { useCdn } from "@/powweb-blog/env";

export const client = createClient ({
    apiVersion,
    dataset,
    projectId,
    useCdn
})