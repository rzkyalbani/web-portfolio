import { useState } from "react";
import Hamburger from "./Hamburger";
import arrrowDownIcon from "../assets/icons/arrow-down-icon.svg";

function Navbar({ logo }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex h-14 w-full items-center justify-between bg-white px-8 shadow-sm md:h-24 md:px-16 xl:px-28 2xl:px-56">
            <div className="h-7 w-auto md:h-11 xl:h-12">
                <a href="#">
                    <img src={logo} alt="Logo" className="h-full w-full" />
                </a>
            </div>
            <div className="md:hidden">
                <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            </div>

            {/* Desktop link */}
            <div className="hidden md:flex md:items-center md:gap-7 xl:gap-12">
                <a
                    href="#"
                    className="text-base font-medium text-zinc-950 hover:text-zinc-700"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="text-base font-medium text-zinc-950 hover:text-zinc-700"
                >
                    About
                </a>
                <a
                    href="#projects"
                    className="text-base font-medium text-zinc-950 hover:text-zinc-700"
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="text-base font-medium text-zinc-950 hover:text-zinc-700"
                >
                    Contact
                </a>
            </div>

            {/* Desktop CTA Button */}
            <a href="/my-cv.pdf" className="hidden md:block" download={true}>
                <button className="h-10 cursor-pointer items-center gap-1 rounded-lg bg-zinc-950 hover:bg-zinc-700 md:flex md:gap-1 md:px-5 xl:h-12 xl:px-6">
                    <span className="text-base font-medium text-white xl:text-lg">
                        Resume
                    </span>
                    <img
                        src={arrrowDownIcon}
                        alt="Download Icon"
                        className="h-5 w-5 xl:h-7 xl:w-7"
                    />
                </button>
            </a>

            {/* Mobile menu */}
            <div
                className={`absolute top-14 right-0 left-0 flex w-full flex-col items-center gap-6 bg-zinc-950/90 py-8 text-white transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-4 opacity-0"
                }`}
            >
                <a
                    href="#"
                    className="text-base font-medium"
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="text-base font-medium"
                    onClick={() => setIsOpen(false)}
                >
                    About
                </a>
                <a
                    href="#projects"
                    className="text-base font-medium"
                    onClick={() => setIsOpen(false)}
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="text-base font-medium"
                    onClick={() => setIsOpen(false)}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
