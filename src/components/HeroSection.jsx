import heroPic from "../assets/images/hero-pic.png";
import arrowDownIcon from "../assets/icons/arrow-down-icon.svg";

function HeroSection() {
    return (
        <section className="flex flex-col items-center gap-16 md:gap-16 px-8 md:px-16 py-12 md:py-12 w-full h-auto">
            <div className=" w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full rounded-bl-none">
                <img src={heroPic} alt="Hero Image" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-4 md:w-full">
                <div className="flex flex-col items-left gap-1 md:max-w-3/4">
                    <h4 className="text-zinc-950 text-xl md:text-2xl font-semibold">
                        Ave Everyone.
                    </h4>
                    <h1 className="text-6xl md:text-7xl font-bold">
                        I am Al<span className="text-zinc-500">b</span>ani
                    </h1>
                    <p className="text-zinc-500 text-base md:text-lg font-medium">
                        From curious beginner to a builder with purpose — I
                        started learning web development out of curiosity and
                        quickly fell in love with it. Now, I enjoy turning
                        designs into meaningful digital experiences.
                    </p>
                </div>
                <button className="flex items-center justify-center gap-1 h-12 w-full md:w-fit md:px-7 bg-zinc-950 rounded-lg">
                    <span className="text-white text-base font-medium">
                        Download CV
                    </span>
                    <div className="h-5 w-5">
                        <img
                            src={arrowDownIcon}
                            alt="arrow-down-icon"
                            className="w-full h-full"
                        />
                    </div>
                </button>
            </div>
        </section>
    );
}

export default HeroSection;
