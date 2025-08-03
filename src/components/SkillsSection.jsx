import icons from "../helpers/icons";

function SkillsSection() {
    return (
        <section className="flex flex-col gap-9 bg-zinc-950 px-8 py-16 xl:px-28 xl:py-24">
            <div className="flex flex-col items-center gap-2 xl:gap-3">
                <h3 className="text-4xl font-bold text-white md:text-5xl">
                    Tech Stack
                </h3>
                <div className="h-1 w-24 rounded-sm bg-white md:h-2 md:w-32 md:rounded-xs"></div>
                <p className="text-base font-medium text-zinc-200 md:text-lg">
                    Technologies I’ve touched so far.
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 py-2 xl:gap-12 xl:px-16 xl:py-2">
                {icons.map((i) => (
                    <div
                        key={i.id}
                        className="flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-4xl rounded-tl-none border-2 border-zinc-300 xl:h-36 xl:w-36 xl:border-4"
                    >
                        <img
                            src={i.src}
                            alt={i.name}
                            className="h-11 w-11 xl:h-16 xl:w-16"
                        />
                        <p className="text-xs font-bold text-white xl:text-base">
                            {i.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillsSection;
