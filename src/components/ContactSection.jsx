import paperPlaneIcon from "../assets/icons/fe_paper-plane.svg";

function ContactSection() {
    return (
        <section className="flex w-full flex-col gap-8 bg-zinc-950 px-8 pt-16 pb-9 md:p-16 xl:flex-row xl:px-28 xl:py-24 xl:justify-between">
            <div className="flex flex-col gap-9 md:gap-12 xl:max-w-6/12">
                <div className="flex flex-col gap-2 md:gap-3">
                    <h3 className="text-4xl font-bold text-white md:text-5xl">
                        Contact
                    </h3>
                    <div className="h-1 w-24 rounded-sm bg-white md:h-2 md:w-32 md:rounded-xs"></div>
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <h6 className="text-lg font-semibold text-white md:text-xl">
                        Got a project idea, a question, or just want to say hi?
                    </h6>
                    <p className="text-base text-white md:text-lg">
                        I’m always open to new opportunities, interesting
                        discussions, or simple chats about design and
                        development. Feel free to reach out — I’d love to hear
                        from you!
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 xl:min-w-5/12">
                <div>
                    <label
                        htmlFor="name"
                        className="text-base font-semibold text-white md:text-lg"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 block h-10 w-full rounded-md bg-white px-2 md:w-3/4 xl:w-full"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="text-base font-semibold text-white md:text-lg"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 block h-10 w-full rounded-md bg-white px-2 md:w-3/4 xl:w-full"
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="text-base font-semibold text-white md:text-lg"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="mt-1 block h-36 w-full rounded-md bg-white py-2 px-2 md:w-3/4 xl:w-full"
                    ></textarea>
                </div>
                <button className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-white bg-zinc-950 md:h-12 md:w-3/4 xl:w-full">
                    <span className="text-base font-medium text-white">
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
