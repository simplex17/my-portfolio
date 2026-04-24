import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const innerHeight = window.innerHeight;
                    const scrollHeight = document.documentElement.scrollHeight;
                    const scrollY = window.scrollY;
                    const maxScroll = scrollHeight - innerHeight;
                    const progress =
                        maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

                    setScrollProgress(progress);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="m-auto w-(--page-width)">
            <Header />
            <main>
                <div className="fixed top-1/2 right-2 h-28 w-1 -translate-y-1/2 rounded bg-white">
                    <div
                        className="w-full rounded bg-rose-500"
                        style={{ height: `${scrollProgress}%` }}></div>
                </div>
                <Hero />
                <About />
                <Stack />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
