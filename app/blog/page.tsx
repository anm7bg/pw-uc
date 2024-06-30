'use client';

import { ModeToggle } from "@/components/ModeToggle";
import Blog from "@/pages/Blog";
import { ThemeProvider } from "../components/theme-provider";
import { HeadManagerContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// export const runtime = "experimental-edge";

export default function BlogContent() {
    return  (
      <div>
        <main className="relative bg-black-100 flex justify-center items-center
          flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider> */}
          <Blog />
        </main>
        <Footer />
      </div>
    );
}