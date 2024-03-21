import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elabor.AI.te",
  description: "Talk to your videos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className + "relative flex flex-col items-center min-h-screen"}>
        <main className="w-full flex-1 flex flex-col items-center">
          {children}
        </main>
        <footer className="flex align-center justify-between px-5 pb-5 mb-5 w-full max-w-screen-xl">
          <p className="footer-heading font-bold text-xl">Elaborate</p>
          <div className="flex">
            <FaGithub className="footer-icon" />
            <FaSquareXTwitter className="footer-icon" />
          </div>
        </footer>
      </body>
    </html>
  );
}
