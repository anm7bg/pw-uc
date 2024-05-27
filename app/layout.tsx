import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "./main.scss";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PowWeb - SEO | Изработка и поддръжка на уеб сайтове и SPA!",
  description: "SEO | Изработка и поддръжка на уеб сайтове и SPA! Качество и коректност на добра цена",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
    </html>
  );
}
