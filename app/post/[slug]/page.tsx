import { dataCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
    const query = `*[_type == 'post' && slug.current == '${slug}'] {
        title, 
        mainImage,
        'postSlug': slug.current,
        categories,
        body
      }[0]`

    const data = await client.fetch(query);

    return data;
}

// export const runtime = "edge";

export default async function BlogArticle({params} : {params : {slug: string}}) {
    const data: dataCard = await getData(params.slug);

    // console.log(data.body);
    

    return (
        <div>
        <main className="relative bg-black-100 flex justify-center items-center
        flex-col overflow-hidden mx-auto"> 
            <article className='blog-posts pt-10'>
                <Header />
                    <section className='post-home px-5'>
                        <div className='post-content flex flex-col items-center justify-center mb-10 z-10'>
                            <h2>{data.title}</h2>
                            <Image 
                                priority
                                className="rounded-lg mt-8 border"
                                src={urlForImage(data.mainImage)}
                                width={600} 
                                height={400}
                                alt={data.title}
                            />
                            <div className="content-body mt-16">
                                <PortableText value={data.body} />
                            </div>
                        </div>
                    </section>
            </article>
        </main>
        <Footer />
        </div>
    );
}