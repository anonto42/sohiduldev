import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Naveber from "@/components/Naveber/Naveber";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sohidul Islam Ananto | Web Developer",
  description: `Hello, My Name Is Sohidul Islam Ananto. I AM Web Application Developer. I'm use the MERN tech stack to develope error-free, user-friendly websites that offer an excellent user experience. I can make your business online and It will increase your sells. I can also make a portfolio website for your.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <div className="max-w-[1300px] mx-auto px-5">
          <Naveber />
          <div className="w-full min-h-[80svh]">
            {children}
          </div>
          <Footer />
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
