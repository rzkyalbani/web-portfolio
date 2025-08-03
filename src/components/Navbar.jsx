import { useState } from "react";
import Hamburger from "./Hamburger";
import arrrowDownIcon from "../assets/icons/arrow-down-icon.svg";

function Navbar({ logo }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex h-14 w-full items-center justify-between bg-white px-8 shadow-sm md:h-24 md:px-16 xl:px-28 2xl:px-56">
            <div className="h-7 w-auto md:h-11 xl:h-12">
                <img src={logo} alt="Logo" className="h-full w-full" />
            </div>
            <div className="md:hidden">
                <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            </div>

            {/* Desktop link */}
            <div className="hidden md:flex md:items-center md:gap-7 xl:gap-12">
                <a href="" className="text-base font-medium text-zinc-950">
                    Home
                </a>
                <a href="" className="text-base font-medium text-zinc-950">
                    About
                </a>
                <a href="" className="text-base font-medium text-zinc-950">
                    Projects
                </a>
                <a href="" className="text-base font-medium text-zinc-950">
                    Contact
                </a>
            </div>

            {/* Desktop CTA Button */}
            <button className="hidden h-10 cursor-pointer items-center rounded-lg bg-zinc-950 md:flex md:gap-1 md:px-5 xl:h-12 xl:px-6 gap-1">
                <span className="text-base font-medium text-white xl:text-lg">Resume</span>
                <img
                    src={arrrowDownIcon}
                    alt="Download Icon"
                    className="h-5 w-5 xl:h-7 xl:w-7"
                />
            </button>

            {/* Mobile menu */}
            <div
                className={`absolute top-14 right-0 left-0 flex w-full flex-col items-center gap-6 bg-zinc-950/90 py-8 text-white transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-4 opacity-0"
                }`}
            >
                <a href="" className="text-base font-medium">
                    Home
                </a>
                <a href="" className="text-base font-medium">
                    About
                </a>
                <a href="" className="text-base font-medium">
                    Projects
                </a>
                <a href="" className="text-base font-medium">
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
