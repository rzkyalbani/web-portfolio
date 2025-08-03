import logoLight from "../assets/images/logo-light.png";
import githubIcon from "../assets/icons/mdi_github.svg";
import instagramIcon from "../assets/icons/mdi_instagram.svg";
import linkedInIcon from "../assets/icons/uil_linkedin.svg";
import emailIcon from "../assets/icons/ic_outline-email.svg";

function Footer() {
    return (
        <footer className="flex flex-col gap-12 bg-zinc-950 p-9 md:p-16 xl:gap-16 xl:px-24 xl:py-14 2xl:px-56">
            <div className="flex flex-col gap-9 md:flex-row md:justify-between">
                <div className="md:flex md:basis-1/2 md:flex-col md:gap-12">
                    <div className="flex items-center gap-6">
                        <img
                            src={logoLight}
                            alt="Logo"
                            className="h-7 w-auto xl:h-12"
                        />
                        <h4 className="text-xl font-semibold text-white xl:text-3xl">
                            Rizky Albani
                        </h4>
                    </div>
                    <p className="hidden text-base text-white md:block">
                        Laudate omnes gentes laudate <br />
                        Magnificat in secula <br />
                        Et anima mea laudate <br />
                        Magnificat in secula
                    </p>
                </div>
                <div className="flex justify-between md:basis-1/2">
                    <div className="flex flex-col gap-4 text-white md:gap-8">
                        <h4 className="text-xl font-semibold md:text-2xl xl:text-3xl">
                            Site Map
                        </h4>
                        <div className="md:font-base flex h-full flex-col gap-2 md:justify-between md:gap-3 md:text-lg xl:text-xl">
                            <a href="#" className="hover:text-zinc-300">
                                Home
                            </a>
                            <a href="#about" className="hover:text-zinc-300">
                                About
                            </a>
                            <a href="#projects" className="hover:text-zinc-300">
                                Projects
                            </a>
                            <a href="#contact" className="hover:text-zinc-300">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8">
                        <h4 className="text-xl font-semibold text-white md:text-2xl xl:text-3xl">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-2 md:h-full md:justify-between md:gap-3">
                            <a href="https://www.instagram.com/rzkyalbani/">
                                <img
                                    src={instagramIcon}
                                    alt="Instagram Link"
                                    className="h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
                                />
                            </a>
                            <a href="https://github.com/rzkyalbani">
                                <img
                                    src={githubIcon}
                                    alt="Github Link"
                                    className="h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/rizky-albani-1ba67b297/">
                                <img
                                    src={linkedInIcon}
                                    alt="LinkedIn Link"
                                    className="h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
                                />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=rzkyalbani@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={emailIcon}
                                    alt="Email Link"
                                    className="h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <span className="text-xs font-medium text-white md:text-base xl:font-semibold">
                Built with ❤️ using Tailwind & React
            </span>
        </footer>
    );
}

export default Footer;
