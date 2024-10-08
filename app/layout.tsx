import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Dealer App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image
          loading="lazy"
          src="/header-image.jpg"
          alt="header-image"
          width={2000}
          height={2000}
          className="h-[200px] w-full object-cover"
        />
        {children}
      </body>
    </html>
  );
}
