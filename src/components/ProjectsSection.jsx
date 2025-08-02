import placeholder from "../assets/images/default-image-food.png";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
    return (
        <section className="flex flex-col items-center gap-12 px-8 py-12 w-full h-auto">
            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-zinc-950 text-4xl font-bold">
                    My Projects
                </h3>
                <div className="w-24 h-1 bg-zinc-950 rounded-sm"></div>
                <p className="text-base font-medium text-zinc-500">
                    I like building things — and here’s proof.
                </p>
            </div>
            <ProjectCard projectImage={placeholder} />
        </section>
    );
}

export default ProjectsSection;
