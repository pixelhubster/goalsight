import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Frame from "./frame";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function layout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode,
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Link href="/createinsight">createform</Link> */}
        {auth}
        <Frame>
          {children}
        </Frame>
      </body>
    </html>
  );
}
