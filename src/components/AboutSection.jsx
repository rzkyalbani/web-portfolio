function AboutSection() {
    return (
        <section className="flex flex-col items-center gap-6 px-8 pt-7 pb-12 w-full h-auto">
            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-zinc-950 text-4xl font-bold">About Me</h3>
                <div className="w-24 h-1 bg-zinc-950 rounded-sm"></div>
                <p className="text-base font-medium text-zinc-500">A web dev and ui/ux design enthusiast.</p>
            </div>
            <div>
                <div className="flex flex-col gap-6">
                    <p className="text-sm text-zinc-700">
                        I enjoy exploring the JavaScript ecosystem — from
                        building interfaces with React, styling with Tailwind,
                        to understanding how everything fits together. I care
                        about writing clean, maintainable code and creating
                        interfaces that feel easy to use. Lately, I've also been
                        learning design tools like Figma to understand both the
                        dev and design sides.
                    </p>
                    <p className="text-sm text-zinc-700">
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
