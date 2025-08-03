import aboutImg from "../assets/images/about-me.png";

function AboutSection() {
    return (
        <section className="flex h-auto w-full flex-col items-center gap-6 px-8 pt-7 pb-12 md:p-16 md:pt-12 xl:px-24 xl:pt-9 xl:pb-24 2xl:px-56">
            <div className="flex flex-col items-center gap-2 md:w-full md:items-start md:gap-3">
                <h3 className="text-4xl font-bold text-zinc-950 md:text-5xl">
                    About Me
                </h3>
                <div className="h-1 w-24 rounded-sm bg-zinc-950 md:h-2 md:w-32 md:rounded-xs"></div>
                <p className="text-base font-medium text-zinc-500 md:text-lg">
                    A web dev and ui/ux design enthusiast.
                </p>
            </div>
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-12">
                <img
                    src={aboutImg}
                    alt="About Me"
                    className="hidden max-w-1/2 md:block xl:max-w-5/12"
                />
                <div className="flex flex-col gap-6 md:max-w-4/5 md:gap-2 xl:max-w-7/12 2xl:max-w-5/10">
                    <p className="text-sm text-zinc-700 md:text-base xl:text-lg">
                        I enjoy exploring the JavaScript ecosystem — from
                        building interfaces with React, styling with Tailwind,
                        to understanding how everything fits together. I care
                        about writing clean, maintainable code and creating
                        interfaces that feel easy to use. Lately, I've also been
                        learning design tools like Figma to understand both the
                        dev and design sides.
                    </p>
                    <p className="text-sm text-zinc-700 md:text-base xl:text-lg">
                        For me, learning never stops. Whether I am building a
                        component, fixing a layout bug, or experimenting with a
                        new animation library, I always try to enjoy the
                        process. I'm not in a rush to become perfect — I'm just
                        focused on getting better every day.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
