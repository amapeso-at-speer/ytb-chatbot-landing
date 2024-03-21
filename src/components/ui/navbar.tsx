import React from "react";
import {LitUpBorderButton} from "@/components/ui/lit-up-border-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
      <nav className="flex p-6 justify-between items-center">
        <Link href="/">
          <h1 className="font-sans font-bold text-white text-2xl">
              Elaborate
          </h1>
        </Link>
        <div className="md:flex pb-2 items-center hidden">
          <button className="p-[3px] md:pr-5 pr-2" >
            <div
              className="px-4 py-2  bg-transparent rounded-full  relative group transition duration-200 text-white hover:opacity-30 font-sans lg:text-base md:text-sm text-xs"
            >
              Sign In
            </div>
          </button>
          {
            pathname !== "/access-form" &&
              <LitUpBorderButton>
                <Link className="px-4 py-2 block" href="/access-form">
                  Request beta access
                </Link>
              </LitUpBorderButton>
          }
        </div>
      </nav>
  );
}
