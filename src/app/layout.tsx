import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css"
import RainbowkitContext from "@/components/context/rainbowkit";
import NotificatonContext from "@/components/context/notificationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoalSight",
  description: "Transparent and decentralized Problem Insight platform",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificatonContext>
          <RainbowkitContext>
            {children}
          </RainbowkitContext>
        </NotificatonContext>
      </body>
    </html>
  );
}
