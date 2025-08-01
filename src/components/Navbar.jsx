import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar({ logo }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="px-8 w-full h-14 flex items-center justify-between bg-white shadow-sm">
            <div className="w-auto h-7">
                <img src={logo} alt="Logo" className="w-full h-full" />
            </div>
            <div>
                <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            </div>

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
