import { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

const OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

export default function Contact() {
    const targetRef = useRef(null);
    const isVisible = useElementOnScreen(OPTIONS, targetRef);

    const contacts = [
        {
            name: "Email",
            href: "mailto:anand.krishnan2712@gmail.com",
            target: "_self",
            content: "anand.krishnan2712@gmail.com",
        },
        {
            name: "Mobile",
            href: "tel:+919633277440",
            target: "_self",
            content: "+919633277440",
        },
    ];
    return (
        <section
            id="contact"
            ref={targetRef}
            className="mb-40 flex flex-col md:flex-row">
            <h2
                className={`mb-6 text-xl transition-all duration-700 md:flex-2/7 md:text-4xl ${!isVisible ? "translate-y-12 opacity-0" : ""}`}>
                Contact
            </h2>
            <ul className="text-sm md:flex-5/7 md:text-base">
                {contacts.map((contact, index) => (
                    <li
                        key={contact.name}
                        className={`mb-4 transition-all duration-700 md:flex-2/7 ${!isVisible ? "translate-y-24 opacity-0" : ""}`}
                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                        <span>{contact.name}: </span>
                        <a href={contact.href} target={contact.target}>
                            {contact.content}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
