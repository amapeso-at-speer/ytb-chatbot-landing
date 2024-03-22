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
        <footer className="flex justify-between mt-10 px-5 pb-10 w-full max-w-screen-xl">
          <div className="flex flex-col self-end">
            <div className="flex items-center text-light-blue">
              <a href="https://speer.io/" className="speer-icon mr-10 cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 271 261.53">
                  <path id="Path_2202" fill="currentColor" data-name="Path 2202" d="M211.783,132.586h30.686V249.664H363.506v29.915H218.6V393.116h-6.819V279.665H93.505v-7.344H211.864Z" transform="translate(-93.005 -132.086)" stroke="currentColor" stroke-width="1"/>
                </svg>
              </a>
              <div className="text-white">
                {/* <ul>
                  <li>379 Shuter Street</li>
                  <li>M5A 1X3</li>
                  <li>Toronto, ON</li>
                </ul> */}
                <div className="flex flex-col">
                  <a href="tel:+1 416 453 3812">+1 416 453 3812</a>
                  <a href="mailto:create@speer.io">create@speer.io</a>
                </div>
              </div>
            </div>
            <div className="mt-3 text-light-blue">Copyrights © 2024 SPEER TECHNOLOGIES, INC.</div>
          </div>
          <div className="flex flex-col text-right text-lg">
            <a href="https://www.linkedin.com/company/reframethefuture" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/speertech/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com/speertech" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@speertech?lang=en" target="_blank" rel="noopener noreferrer">Tiktok</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
