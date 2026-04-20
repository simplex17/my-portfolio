import { useState, useMemo, useEffect } from "react";

export default function useElementOnScreen(options, targetRef) {
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) setIsVisible(true);
    };

    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            callbackFunction,
            optionsMemo
        );
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);

    return isVisible;
}
