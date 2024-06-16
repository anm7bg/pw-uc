import { Spotlight } from "@/components/ui/Spotlight";
import Tools from "@/pages/Instrumenti";

// export const runtime = "edge";


export default function Home() {
    return  (
        <main className="relative bg-black-100 flex justify-center items-center
        flex-col overflow-hidden mx-auto"> 
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20
                h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
            </div>
            <div className=" w-full"> 
                <Tools />
            </div>
        </main>
    );
}