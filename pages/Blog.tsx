
import { blogCard } from '@/app/lib/interface';
import { client } from '@/app/lib/sanity'
import Header from '@/components/Header';
import { ModeToggle } from '@/components/ModeToggle';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/Footer';


async function getData() {
    const query = `*[_type == 'post'] {
        title, 
        mainImage,
        'postSlug': slug.current,
        categories,
        shortDesc,
        body
      }`

    const data = await client.fetch(query);

    return data;
}

export const runtime = "experimental-edge";


export default async function Blog() {

    const data: blogCard[] = await getData();

    console.log("data")
    console.log(data)
    return  (
        <article className='blog-posts pt-10'>
            <Header />
            <section className='grid grid-cols-1 lg:grid-cols-3 my-[40px] gap-5'>
                {data.map((post, idx) => (
                    <Card key={idx}>
                        <Image 
                            src={urlForImage(post.mainImage)} 
                            alt="image" 
                            width={600} 
                            height={400}
                            className='rounded-t-lg object-cover'
                        />
                        <CardHeader className='mt-5'>
                            <h3 className='text-lg line-clamp-2'>{post.title}</h3>
                        </CardHeader>
                        <CardBody>
                            <p className='line-clamp-2 text-sm mt-5'>{post.shortDesc}</p>
                        </CardBody>
                        <CardFooter>
                            <Button asChild className='w-full mt7'>
                                <Link href={`/post/${post.postSlug}`}>Виж</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </article>
    );
}