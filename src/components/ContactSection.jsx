import paperPlaneIcon from "../assets/icons/fe_paper-plane.svg";

function ContactSection() {
    return (
        <section className="flex flex-col gap-8 px-8 pt-16 pb-9 w-full bg-zinc-950">
            <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-4xl font-bold">Contact</h3>
                    <div className="w-24 h-1 bg-white rounded-sm"></div>
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <h6 className="text-lg font-semibold text-white">
                        Got a project idea, a question, or just want to say hi?
                    </h6>
                    <p className="text-base text-white">
                        I’m always open to new opportunities, interesting
                        discussions, or simple chats about design and
                        development. Feel free to reach out — I’d love to hear
                        from you!
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <label
                        htmlFor="name"
                        className="font-semibold text-base text-white"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="rounded-md bg-white w-full h-9 mt-1 px-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="font-semibold text-base text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="rounded-md bg-white w-full h-9 mt-1 px-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="font-semibold text-base text-white"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="rounded-md bg-white w-full h-32 mt-1 px-2"
                    ></textarea>
                </div>
                <button className="flex items-center justify-center gap-2 h-10 w-full bg-zinc-950 rounded-lg border border-white">
                    <span className="text-white text-base font-medium">
                        Send Message
                    </span>
                    <div className="h-5 w-5">
                        <img src={paperPlaneIcon} alt="Sent Icon" />
                    </div>
                </button>
            </div>
        </section>
    );
}

export default ContactSection;
