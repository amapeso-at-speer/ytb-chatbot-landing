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
        <footer className="flex justify-between items-end lg:items-center mt-10 px-5 pb-10 w-full max-w-screen-xl">
          <div className="flex flex-col lg:flex-row text-white">
            <a href="tel:+1 416 453 3812">+1 416 453 3812</a>
            <span className="hidden lg:block mx-3">|</span>
            <a href="mailto:create@speer.io">create@speer.io</a>
          </div>
          <div className="mx-5 text-light-blue">Copyright © 2024 Speer Technologies Inc. All Rights Reserved.</div>
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
