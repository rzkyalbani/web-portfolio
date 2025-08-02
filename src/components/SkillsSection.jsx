import icons from "../helpers/icons";

function SkillsSection() {
    return (
        <section className="flex flex-col gap-9 px-8 py-16 bg-zinc-950">
            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-white text-4xl font-bold">Tech Stack</h3>
                <div className="w-24 h-1 bg-white rounded-sm"></div>
                <p className="text-base font-medium text-zinc-200">
                    Technologies I’ve touched so far.
                </p>
            </div>
            <div className="flex justify-center items-center flex-wrap py-2 gap-5">
                {icons.map((i) => (
                    <div
                        key={i.id}
                        className="flex flex-col justify-center items-center gap-2 w-24 h-24 border-2 border-zinc-300 rounded-4xl rounded-tl-none"
                    >
                        <img src={i.src} alt={i.name} className="w-11 h-11" />
                        <p className="text-xs font-bold text-white">{i.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillsSection;
