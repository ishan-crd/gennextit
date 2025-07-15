import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GennextIT - Leading IT Solutions Provider",
  description:
    "Professional IT consulting, development, and training services. Transform your business with cutting-edge technology solutions.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar text-[10px] md:text-[16px]">
      <body className={inter.className + " no-scrollbar flex flex-col"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
