import React from "react";

export default function NavBar() {
    return (
        <nav className="flex w-screen p-10 justify-between absolute top-0 left-0 z-[100]">
            <h1>
                Elaborate
            </h1>
            <ul className="flex">
                <li className="pr-5">Sign In</li>
                <li>Request beta access</li>
            </ul>
        </nav>
    );
}