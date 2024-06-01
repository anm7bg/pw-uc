import HomeUC from "@/components/pages/HomeUC";
import Tools from "@/components/pages/Instrumenti";
import Image from "next/image";

// export const runtime = "edge";


export default function Home() {
    return  (
        <main className="relative bg-black-100 flex justify-center items-center
        flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
            <div className="max-w-7xl w-full"> 
                <Tools />
            </div>
        </main>
    );
}