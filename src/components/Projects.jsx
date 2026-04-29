import { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

const OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

export default function Projects() {
    const targetRef = useRef();
    const isVisible = useElementOnScreen(OPTIONS, targetRef);

    const projects = [
        {
            title: "Tetris Clone",
            stack: ["JavaScript", "CSS", "HTML"],
            description:
                "A browser-based Tetris game built from scratch using JavaScript. Implements a custom game loop using requestAnimationFrame and delta-time updates.",
            demo: "https://simplex17.github.io/tetris-js/",
        },
    ];

    return (
        <section id="projects" ref={targetRef} className="mb-40">
            <h2
                className={`mb-16 text-xl transition-all duration-700 md:text-4xl ${!isVisible ? "translate-y-12 opacity-0" : ""}`}>
                Projects
            </h2>
            <ul className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <li
                        key={project.title}
                        className={`transition-all duration-700 ${!isVisible ? "translate-y-12 opacity-0" : ""}`}
                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                        <h3 className="mb-4">
                            <span className="mr-2 text-xs text-rose-500 md:text-base">
                                {(index + 1).toString().padStart(2, "0")}
                            </span>
                            <span className="text-lg md:text-2xl">
                                {project.title}
                            </span>
                        </h3>
                        <p className="mb-4 text-sm md:text-base">
                            {project.description}
                        </p>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="norefferrer noopener"
                            className="mb-4 block text-rose-500">
                            Live Demo 🔗
                        </a>
                        <ul className="flex gap-2 text-sm md:text-base">
                            {project.stack.map((tool) => (
                                <li
                                    className="rounded bg-rose-500 px-2 py-1"
                                    key={`${project.title}-${tool}`}>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
}
