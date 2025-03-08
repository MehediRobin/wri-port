import type { Metadata } from "next";
import { Domine  } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

import ActiveSectionContextProvider from "@/context/active-section-context";
const domine = Domine({ weight: '400', subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mehedi Robin | Portfolio",
  description:
    "Mehedi Robin is a SEO content writer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${domine.className} bg-gray-50 text-gray-9 50 relative m-0 p-0 box-border mt-40 w-[100%]`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[32.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] z-[-10]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] z-[-10]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
