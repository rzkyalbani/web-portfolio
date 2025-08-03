import webIcon from "../assets/icons/mdi_web.svg";
import githubIcon from "../assets/icons/mdi_github.svg";

function ProjectCard({ projectImage }) {
    return (
        <div className="flex h-[620px] w-full flex-col overflow-hidden rounded-xl border-4 border-zinc-400 bg-zinc-950 md:w-[364px] xl:min-h-[672px] xl:w-[448px]">
            <div className="h-56 w-full xl:h-60">
                <img
                    src={projectImage}
                    alt="Placeholder"
                    className="h-full w-full"
                />
            </div>
            <div className="flex flex-col h-full justify-between px-6 py-9 xl:px-9 xl:py-8">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <h5 className="text-2xl font-bold text-white xl:text-3xl">
                            Lorem Ipsum
                        </h5>
                        <span className="text-xs font-bold text-zinc-200 xl:text-sm">
                            2023
                        </span>
                    </div>
                    <p className="text-base text-white xl:text-lg">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque et
                        sem enim enim duis justo morbi diam blandit. Sed feugiat
                        eu non ac at nibh.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <div className="flex h-7 items-center rounded-full bg-zinc-700 px-3 text-xs font-bold text-white xl:text-sm">
                            Tailwind
                        </div>
                        <div className="flex h-7 items-center rounded-full bg-zinc-700 px-3 text-xs font-bold text-white xl:text-sm">
                            ReactJS
                        </div>
                    </div>
                    <button className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white xl:h-12 hover:bg-zinc-100">
                        <span className="text-base font-medium text-zinc-950">
                            View Live
                        </span>
                        <img src={webIcon} alt="Web Icon" className="h-6 w-6" />
                    </button>
                    <button className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white bg-zinc-950 xl:h-12 hover:bg-zinc-800">
                        <span className="text-base font-medium text-white">
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
