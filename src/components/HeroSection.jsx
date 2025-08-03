import heroPic from "../assets/images/hero-pic.png";
import arrowDownIcon from "../assets/icons/arrow-down-icon.svg";

function HeroSection() {
    return (
        <section className="flex h-auto w-full flex-col items-center gap-16 px-8 py-12 md:gap-16 md:px-16 md:py-12 xl:flex-row xl:justify-between xl:px-28 xl:py-24 2xl:px-56">
            <div className="h-80 w-80 overflow-hidden rounded-full rounded-bl-none md:h-96 md:w-96 xl:order-2 xl:max-w-5/12 xl:rounded-[200px] xl:rounded-tr-none xl:rounded-bl-none">
                <img src={heroPic} alt="Hero Image" className="h-full w-full" />
            </div>
            <div className="flex flex-col gap-4 md:w-full xl:order-1 xl:max-w-6/12">
                <div className="items-left flex flex-col gap-1 md:max-w-3/4 xl:max-w-full">
                    <h4 className="text-xl font-semibold text-zinc-950 md:text-2xl">
                        Ave Everyone.
                    </h4>
                    <h1 className="text-6xl font-bold md:text-7xl">
                        I am Al<span className="text-zinc-500">b</span>ani
                    </h1>
                    <p className="text-base font-medium text-zinc-500 md:text-lg">
                        From curious beginner to a builder with purpose — I
                        started learning web development out of curiosity and
                        quickly fell in love with it. Now, I enjoy turning
                        designs into meaningful digital experiences.
                    </p>
                </div>
                <a href="/my-cv.pdf" download={true}>
                    <button className="flex h-12 w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-zinc-950 md:w-fit md:px-7">
                        <span className="text-base font-medium text-white 2xl:text-lg">
                            Download CV
                        </span>
                        <img
                            src={arrowDownIcon}
                            alt="arrow-down-icon"
                            className="h-5 w-5 xl:h-7 xl:w-7"
                        />
                    </button>
                </a>
            </div>
        </section>
    );
}

export default HeroSection;
