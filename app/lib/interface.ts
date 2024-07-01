export interface simpleBlog {
    title: "string";
}

export interface blogCard {
    title: string;
    postSlug: string;
    categories: string;
    body: any;
    mainImage: any;
    shortDesc: any;
}

export interface postCard {
    title: string;
    postSlug: string;
    categories: string;
    body: any;
    mainImage: any;
    shortDesc: string;
}