import { useState } from "react";
import Hamburger from "./Hamburger";
import arrrowDownIcon from "../assets/icons/arrow-down-icon.svg";

function Navbar({ logo }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="px-8 md:px-16 w-full h-14 md:h-24 flex items-center justify-between bg-white shadow-sm">
            <div className="w-auto h-7 md:h-11">
                <img src={logo} alt="Logo" className="w-full h-full" />
            </div>
            <div className="md:hidden">
                <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            </div>

            {/* Desktop link */}
            <div className="hidden md:flex md:gap-7 md:items-center">
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
            <button className="hidden md:flex md:gap-1 md:px-5 items-center h-10 bg-zinc-950 rounded-lg">
                <span className="text-white text-base font-medium">Resume</span>
                <img
                    src={arrrowDownIcon}
                    alt="Download Icon"
                    className="h-5 w-5"
                />
            </button>

            {/* Mobile menu */}
            <div
                className={`absolute top-14 left-0 right-0 w-full bg-zinc-950/90 flex flex-col items-center gap-6 py-8 text-white transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
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
