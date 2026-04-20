import gitHubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Header() {
    const nav = [
        { label: "🏠︎", href: "#home", aria: "Home" },
        { label: "About", href: "#about" },
        { label: "Stack", href: "#stack" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
        {
            href: "https://github.com/simplex17",
            icon: gitHubIcon,
            alt: "GitHub",
        },
        {
            href: "https://www.linkedin.com/in/anand-krishnan-b0b28626b/",
            icon: linkedinIcon,
            alt: "LinkedIn",
        },
    ];

    const listItems = nav.map((item) => (
        <li key={item.href}>
            {item.icon ? (
                <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="invert-100"
                >
                    <img src={item.icon} width="24" alt={item.alt} />
                </a>
            ) : (
                <a href={item.href} aria-label={item.aria}>
                    {item.label}
                </a>
            )}
        </li>
    ));

    return (
        <nav className="p-4">
            <ul className="hidden md:flex md:w-full md:items-center md:justify-center md:gap-4 md:text-xl">
                {listItems}
            </ul>
        </nav>
    );
}
