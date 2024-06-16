"use client";

import Tools from "@/pages/Instrumenti";
import TestComponents from "@/pages/TestComponents";

// export const runtime = "edge";


export default function Home() {
    return  (
        <main className="relative bg-black-100 flex justify-center items-center
        flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
            <div className="max-w-7xl w-full"> 
                <TestComponents />
            </div>
        </main>
    );
}