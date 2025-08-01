import heroPic from "../assets/images/hero-pic.png";
import arrowDownIcon from "../assets/icons/arrow-down-icon.svg";

function HeroSection() {
    return (
        <section className="flex flex-col items-center gap-16 px-8 py-12 w-full h-auto">
            <div className=" w-80 h-80 overflow-hidden rounded-full rounded-bl-none">
                <img src={heroPic} alt="Hero Image" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-left gap-1">
                    <h4 className="text-zinc-950 text-xl font-semibold">
                        Ave Everyone.
                    </h4>
                    <h1 className="text-6xl font-bold">
                        I am Al<span className="text-zinc-500">b</span>ani
                    </h1>
                    <p className="text-zinc-500 text-base font-medium">
                        From curious beginner to a builder with purpose — I
                        started learning web development out of curiosity and
                        quickly fell in love with it. Now, I enjoy turning
                        designs into meaningful digital experiences.
                    </p>
                </div>
                <button className="flex items-center justify-center gap-1 h-12 w-full bg-zinc-950 rounded-lg">
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
