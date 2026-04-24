import { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";
import angularIcon from "../assets/angular.png";
import bootstrapIcon from "../assets/bootstrap.png";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.png";
import typescriptIcon from "../assets/typescript.png";
import javascriptIcon from "../assets/javascript.png";
import cssIcon from "../assets/css.png";
import htmlIcon from "../assets/html.png";

const OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

export default function Stack() {
    const targetRef = useRef(null);
    const isVisible = useElementOnScreen(OPTIONS, targetRef);

    const stack = [
        { name: "Angular", icon: angularIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "React", icon: reactIcon },
        { name: "Tailwind", icon: tailwindIcon },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "CSS", icon: cssIcon },
        { name: "HTML", icon: htmlIcon },
    ];

    return (
        <section
            id="stack"
            ref={targetRef}
            className="mb-40 flex flex-col md:flex-row">
            <h2
                className={`mb-6 text-xl transition-all duration-700 md:flex-2 md:text-4xl ${!isVisible ? "translate-y-12 opacity-0" : ""}`}>
                Stack
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-8 text-sm md:flex-5 md:text-base">
                {stack.map((tool, index) => (
                    <li
                        key={`${tool.name}`}
                        className={`flex w-40 items-center rounded-md transition-all duration-700 ${!isVisible ? "translate-y-12 opacity-0" : ""}`}
                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                        <img
                            src={tool.icon}
                            width="32"
                            className="mr-4"
                            alt="tool.name"></img>
                        <span>{tool.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
