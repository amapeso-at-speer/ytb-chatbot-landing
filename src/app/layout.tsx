import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import SpeerLogo from "../assets/speer_logo_footer.svg";
import "./globals.css";
import Link from "next/link";

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
        {/* <footer className="flex align-center justify-between px-5 pb-5 mb-5 w-full max-w-screen-xl">
          <p className="footer-heading font-bold text-xl">Elaborate</p>
          <div className="flex">
            <FaGithub className="footer-icon" />
            <FaSquareXTwitter className="footer-icon" />
          </div>
        </footer> */}
        <footer className="flex justify-between items-end lg:items-center mt-10 px-5 pb-10 w-full max-w-screen-xl">
          <div className="flex flex-col lg:flex-row text-white">
            <a href="tel:+1 416 453 3812">+1 416 453 3812</a>
            <span className="hidden lg:block mx-3">|</span>
            <a href="mailto:create@speer.io">create@speer.io</a>
          </div>
          <div className="mx-5 text-light-blue">Copyrights © 2024 SPEER TECHNOLOGIES, INC.</div>
          <div className="flex flex-col lg:flex-row text-right">
            <a href="https://www.linkedin.com/company/reframethefuture" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="hidden lg:block mx-3">|</span>
            <a href="https://www.instagram.com/speertech/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span className="hidden lg:block mx-3">|</span>
            <a href="https://facebook.com/speertech" target="_blank" rel="noopener noreferrer">Facebook</a>
            <span className="hidden lg:block mx-3">|</span>
            <a href="https://www.tiktok.com/@speertech?lang=en" target="_blank" rel="noopener noreferrer">Tiktok</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
