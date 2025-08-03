import { useState } from "react";
import paperPlaneIcon from "../assets/icons/fe_paper-plane.svg";
import closeIcon from "../assets/icons/close.svg";
import cancelIcon from "../assets/icons/cancel.svg";
import checkIcon from "../assets/icons/check.svg";

function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [resultMessage, setResultMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const closePopup = () => {
        setResultMessage("");
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const finalFormData = new FormData();

        Object.keys(formData).forEach((key) => {
            finalFormData.append(key, formData[key]);
        });
        finalFormData.append(
            "access_key",
            "f93d84f5-a63a-4109-bd83-b3a609d4fc4",
        );

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: finalFormData,
            });

            const result = await response.json();

            if (result.success) {
                setResultMessage("Message sent successfully.");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
                setIsSuccess(true);
            } else {
                setResultMessage(
                    "An error occurred while sending the message.",
                );
            }
        } catch (e) {
            console.log(e);
            setResultMessage("An error occurred while sending the message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex w-full flex-col gap-8 bg-zinc-950 px-8 pt-16 pb-9 md:p-16 xl:flex-row xl:justify-between xl:px-28 xl:py-24 2xl:px-56">
            <div className="flex flex-col gap-9 md:gap-12 xl:max-w-6/12">
                <div className="flex flex-col gap-2 md:gap-3">
                    <h3 className="text-4xl font-bold text-white md:text-5xl">
                        Contact
                    </h3>
                    <div className="h-1 w-24 rounded-sm bg-white md:h-2 md:w-32 md:rounded-xs"></div>
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <h6 className="text-lg font-semibold text-white md:text-xl 2xl:font-bold">
                        Got a project idea, a question, or just want to say hi?
                    </h6>
                    <p className="text-base text-white md:text-lg 2xl:text-xl">
                        I’m always open to new opportunities, interesting
                        discussions, or simple chats about design and
                        development. Feel free to reach out — I’d love to hear
                        from you!
                    </p>
                </div>
            </div>
            <form
                className="flex flex-col gap-4 xl:min-w-5/12"
                onSubmit={onSubmit}
            >
                <div
                    className={`${resultMessage ? "flex" : "hidden"} h-12 items-center justify-between rounded-lg bg-white px-3`}
                >
                    <div className="flex w-full items-center gap-2">
                        <img
                            src={isSuccess ? checkIcon : cancelIcon}
                            alt="Check Icon"
                            className="h-8 w-8"
                        />
                        <span className="text-sm font-semibold text-zinc-950">
                            {resultMessage}
                        </span>
                    </div>
                    <button
                        type="button"
                        className="cursor-pointer"
                        onClick={closePopup}
                    >
                        <img
                            src={closeIcon}
                            alt="Close Icon"
                            className="h-8 w-8"
                        />
                    </button>
                </div>
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
                        onChange={handleChange}
                        value={formData.name}
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
                        onChange={handleChange}
                        value={formData.email}
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
                        className="mt-1 block h-36 w-full rounded-md bg-white px-2 py-2 md:w-3/4 xl:w-full"
                        onChange={handleChange}
                        value={formData.message}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white bg-zinc-950 hover:bg-zinc-800 md:h-12 md:w-3/4 xl:w-full"
                    disabled={isSubmitting}
                >
                    {!isSubmitting ? (
                        <>
                            <span className="text-base font-medium text-white">
                                Send Message
                            </span>
                            <div className="h-5 w-5">
                                <img src={paperPlaneIcon} alt="Sent Icon" />
                            </div>
                        </>
                    ) : (
                        <span className="text-base font-medium text-white">
                            Sending Message...
                        </span>
                    )}
                </button>
            </form>
        </section>
    );
}

export default ContactSection;
