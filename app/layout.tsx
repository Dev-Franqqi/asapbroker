import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Trading Hub", 
  description: "Elite Trading Hub is your premier destination for all things trading. Get access to top-notch trading tools, expert analysis, and a vibrant community of traders. Join us to elevate your trading experience and reach new heights in the world of trading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
