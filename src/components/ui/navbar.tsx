import React from "react";
import {LitUpBorderButton} from "@/components/ui/lit-up-border-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ElaborateLogo from "../../../public/elaborate_logo.svg";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();

  return (
      <nav className="flex w-full p-6 justify-between items-center">
        <Link className="flex" href="/">
          <Image
            className="mr-2"
            src="/images/elaborate_logo.svg"
            width={30}
            height={30}
            alt="Layman Logo"
          />
          <h1 className="font-sans font-bold text-white text-2xl">
              Layman
          </h1>
        </Link>
        <div className="md:flex items-center hidden">
          {
            pathname !== "/access-form" &&
              <LitUpBorderButton>
                <Link className="px-4 py-2 block" href="/access-form">
                  Request Beta Access
                </Link>
              </LitUpBorderButton>
          }
        </div>
      </nav>
  );
}
