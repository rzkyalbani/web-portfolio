function ProjectsSection() {
    return (
        <section
            id="projects"
            className="flex h-auto w-full flex-col items-center gap-12 px-8 py-12 md:py-16 xl:px-28 2xl:px-56"
        >
            <div className="flex flex-col items-center gap-2 xl:gap-3">
                <h3 className="text-4xl font-bold text-zinc-950 md:text-5xl">
                    My Projects
                </h3>
                <div className="h-1 w-24 rounded-sm bg-zinc-950 md:h-2 md:w-32 md:rounded-xs"></div>
                <p className="text-base font-medium text-zinc-500 md:text-lg">
                    I like building things — and here’s proof.
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-7 xl:gap-16">
                <div className="animate-pulse py-20 text-center text-3xl text-zinc-600 italic md:text-5xl xl:py-48 xl:text-7xl">
                    Preparing awesome projects...
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
