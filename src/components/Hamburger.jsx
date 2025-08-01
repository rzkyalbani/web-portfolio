function Hamburger({ isOpen, toggle }) {
    return (
        <button
            className="flex flex-col gap-1"
            onClick={toggle}
        >
            <span
                className={`w-6 h-1 bg-zinc-950 rounded-full transition-all duration-300 ${
                    isOpen ? "-rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
                className={`w-4 h-1 bg-zinc-950 rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
                className={`w-6 h-1 bg-zinc-950 rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 -translate-y-2" : ""
                }`}
            ></span>
        </button>
    );
}

export default Hamburger;
