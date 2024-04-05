import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layman",
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
        <footer className="flex flex-col mt-10 px-5 pb-10 w-full max-w-screen-xl">
          <div className="flex flex-col md:flex-row flex-1 justify-between items-center lg:items-start xl:items-center">
            <div className="flex flex-row text-white mb-4 md:mb-0">
              <a href="mailto:create@speer.io">create@speer.io</a>
              <span className="mx-3">|</span>
              <a href="tel:+1 416 453 3812">+1 &#40;416&#41; 453&#45;3812</a>
            </div>
            <div className="hidden lg:block lg:w-1/3 xl:w-auto mx-5 text-light-blue text-center">Copyright © 2024 Speer Technologies Inc. All Rights Reserved.</div>
            <div className="flex text-center mb-2  lg:mb-0">
              <a href="https://www.linkedin.com/company/reframethefuture" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="mx-3">|</span>
              <a href="https://www.instagram.com/speertech/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <span className="mx-3">|</span>
              <a href="https://facebook.com/speertech" target="_blank" rel="noopener noreferrer">Facebook</a>
              <span className="mx-3">|</span>
              <a href="https://www.tiktok.com/@speertech?lang=en" target="_blank" rel="noopener noreferrer">Tiktok</a>
            </div>
          </div> 
          <div className="block lg:hidden mx-5 text-light-blue text-center">Copyright © 2024 Speer Technologies Inc. All Rights Reserved.</div>
        </footer>
      </body>
    </html>
  );
}
