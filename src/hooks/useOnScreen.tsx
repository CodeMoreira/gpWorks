import { RefObject, useEffect, useMemo, useState } from "react"

export default function useOnScreen(ref: RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (ref?.current) {
            const observer = new IntersectionObserver(([entry]) =>
                setIntersecting(entry.isIntersecting)
            );
    
            observer.observe(ref.current);
            return () => {
                observer.disconnect();
            };
        }
    }, [ref]);

    return isIntersecting;
}
