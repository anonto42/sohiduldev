import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/app/globals.css";

const lato = Lato({weight:"400"});

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
        className={`${lato} antialiased`}
      >
        <div className="max-w-[1300px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
