import HomeUC from "@/components/HomeUC";
import Image from "next/image";

// export const runtime = "edge";


export default function Home() {
    return  (
        <main className="relative bg-black-100 flex justify-center items-center
        flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
            <div className="max-w-7xl w-full"> 
                <HomeUC />
            </div>
        </main>
    );
}