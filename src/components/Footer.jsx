import logoLight from "../assets/images/logo-light.png";
import githubIcon from "../assets/icons/mdi_github.svg";
import instagramIcon from "../assets/icons/mdi_instagram.svg";
import linkedInIcon from "../assets/icons/uil_linkedin.svg";
import emailIcon from "../assets/icons/ic_outline-email.svg";

function Footer() {
    return (
        <footer className="flex flex-col p-9 gap-12 bg-zinc-950">
            <div className="flex flex-col gap-9">
                <div className="flex gap-6 items-center">
                    <img src={logoLight} alt="Logo" className="h-7 w-auto" />
                    <h4 className="text-xl font-semibold text-white">
                        Rizky Albani
                    </h4>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-4 text-white">
                        <h4 className="text-xl font-semibold">
                            Site Map
                        </h4>
                        <div className="flex flex-col gap-2">
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Projects</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl font-semibold text-white">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-2">
                            <a href="">
                                <img
                                    src={instagramIcon}
                                    alt="Instagram Link"
                                    className="h-6 w-6"
                                />
                            </a>
                            <a href="">
                                <img
                                    src={githubIcon}
                                    alt="Github Link"
                                    className="h-6 w-6"
                                />
                            </a>
                            <a href="">
                                <img
                                    src={linkedInIcon}
                                    alt="LinkedIn Link"
                                    className="h-6 w-6"
                                />
                            </a>
                            <a href="">
                                <img
                                    src={emailIcon}
                                    alt="Email Link"
                                    className="h-6 w-6"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <span className="text-white text-xs font-medium">
                Built with ❤️ using Tailwind & React
            </span>
        </footer>
    );
}

export default Footer;
