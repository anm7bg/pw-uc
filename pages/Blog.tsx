
import { blogCard } from '@/app/lib/interface';
import { client } from '@/powweb-blog/lib/client'
import Header from '@/components/Header';
import { ModeToggle } from '@/components/ModeToggle';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { urlForImage } from '@/powweb-blog/lib/image';
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
        <article className='blog-posts mt-10 pt-10'>
            <Header />
            <section className='grid grid-cols-1 lg:grid-cols-4 my-[40px] gap-5'>
                {data.map((post, idx) => (
                    <Card className='mb-[20px]' key={idx}>
                        <Image 
                            src={urlForImage(post.mainImage)} 
                            alt="image" 
                            width={600} 
                            height={400}
                            className='rounded-t-lg object-cover'
                        />
                        <CardHeader className='py-[5px] my-[5px] blog-card-head'>
                            <h3 className='text-center text-lg line-clamp-2'>{post.title}</h3>
                        </CardHeader>
                        <CardBody className='p-[5px]'>
                            <p className='line-clamp-2 text-sm'>{post.shortDesc}</p>
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