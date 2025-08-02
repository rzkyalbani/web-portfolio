import webIcon from "../assets/icons/mdi_web.svg";
import githubIcon from "../assets/icons/mdi_github.svg";

function ProjectCard({ projectImage }) {
    return (
        <div className="flex flex-col w-full h-[620px] bg-zinc-950 rounded-xl overflow-hidden border-4 border-zinc-400">
            <div className="w-full h-56">
                <img
                    src={projectImage}
                    alt="Placeholder"
                    className="h-full w-full"
                />
            </div>
            <div className="flex flex-col px-6 py-9 h-full justify-between">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <h5 className="text-2xl font-bold text-white">
                            Lorem Ipsum
                        </h5>
                        <span className="text-xs font-bold text-zinc-200">
                            2023
                        </span>
                    </div>
                    <p className="text-white text-base">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque et
                        sem enim enim duis justo morbi diam blandit. Sed feugiat
                        eu non ac at nibh.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <div className="h-7 px-3 rounded-full bg-zinc-700 text-white text-xs font-bold flex items-center">
                            Tailwind
                        </div>
                        <div className="h-7 px-3 rounded-full bg-zinc-700 text-white text-xs font-bold flex items-center">
                            ReactJS
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 h-10 w-full bg-white rounded-lg">
                        <span className="text-zinc-950 text-base font-medium">
                            View Live
                        </span>
                        <img src={webIcon} alt="Web Icon" className="h-6 w-6" />
                    </button>
                    <button className="flex items-center justify-center gap-2 h-10 w-full bg-zinc-950 rounded-lg border border-white">
                        <span className="text-white text-base font-medium">
                            View Code
                        </span>
                        <img
                            src={githubIcon}
                            alt="Web Icon"
                            className="h-6 w-6"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
