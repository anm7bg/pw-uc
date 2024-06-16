
import { client } from '@/app/lib/sanity'

async function getData() {
    const query = `*[_type == 'category']`;
    const data = await client.fetch(query);

    return data;
}

// export const runtime = "edge";


export default function Blog() {

    // const data = await getData();

    // console.log(data)
    return  (
        <main className="relative bg-black-100 flex justify-center items-center
        flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
            <div className="max-w-7xl w-full"> 
                {/* {data.map((post, idx) => (
                    
                ))} */}
                    {/* <h1>{ data[0].title }</h1>    */}
            </div>
        </main>
    );
}