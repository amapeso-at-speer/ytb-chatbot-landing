import React from "react";
import {LitUpBorderButton} from "@/components/ui/lit-up-border-button";

export default function NavBar() {
    return (
        <nav className="flex w-screen p-6 justify-between items-center absolute top-0 left-0 z-[100]">
            <h1 className="font-sans font-bold text-white text-2xl">
                Elaborate
            </h1>
          <div className="md:flex pb-2 items-center hidden">
            <button className="p-[3px] md:pr-5 pr-2" >
              <div
                className="px-4 py-2  bg-transparent rounded-full  relative group transition duration-200 text-white hover:opacity-30 font-sans lg:text-base md:text-sm text-xs"
              >
                Sign In
              </div>
            </button>
            <LitUpBorderButton>
              Request beta access
            </LitUpBorderButton>
          </div>
        </nav>
    );
}
