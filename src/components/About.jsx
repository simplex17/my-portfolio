import { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

const OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

export default function About() {
    const targetRef = useRef(null);
    const isVisible = useElementOnScreen(OPTIONS, targetRef);

    return (
        <section
            id="about"
            ref={targetRef}
            className="mb-40 flex flex-col md:flex-row">
            <h2
                className={`mb-6 text-xl transition-all duration-700 md:mb-0 md:flex-2 md:text-4xl ${!isVisible ? "translate-y-12 opacity-0" : ""}`}>
                About
            </h2>
            <p
                className={`text-sm transition-all delay-100 duration-700 md:flex-5 md:text-base ${!isVisible ? "translate-y-12 opacity-0" : ""}`}>
                Hi, I'm Anand Krishnan K P, a Front-End Developer focused on
                building clean and responsive web interfaces. I'm always
                exploring new tools and improving how I structure and optimize
                front-end applications.
            </p>
        </section>
    );
}
