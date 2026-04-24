import { useEffect, useState } from "react";

function Typewriter({ text, delay }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [index, text, delay]);

    return text.slice(0, index);
}

export default function Hero() {
    return (
        <section id="home" className="h-screen">
            <div className="flex h-full w-full items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl md:text-9xl">
                        Anand <br /> Krishnan
                    </h1>
                    <span className="min-h-5 text-xl text-rose-500 md:min-h-9 md:text-4xl">
                        <Typewriter text="Front-End Developer" delay={100} />
                    </span>
                    <p className="w-full text-sm md:w-2/3 md:text-base">
                        Professional Front-End Developer with 4+ years of
                        experience building user-friendly and scalable
                        applications using Angular and Bootstrap.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="rounded-lg bg-rose-500 px-3 py-2 text-sm md:px-5 md:py-3 md:text-base">
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg border border-rose-500 px-3 py-2 text-sm text-rose-500 md:px-5 md:py-3 md:text-base">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
