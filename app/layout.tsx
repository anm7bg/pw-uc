import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "./main.scss";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Spotlight } from '@/components/ui/Spotlight';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://powweb.bg`),

  title: "PowWeb - SEO | Изработка и поддръжка на уеб сайтове и SPA!",
  description: "SEO | Изработка и поддръжка на уеб сайтове и SPA! Качество и коректност на добра цена",
    alternates: {
        canonical: './',
    }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <GoogleAnalytics /> */}
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="UA-55220452-12" />
    </html>
  );
}
