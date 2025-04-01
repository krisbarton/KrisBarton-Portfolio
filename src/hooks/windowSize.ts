import { useState, useEffect } from "react"

const useWindowSize = () => {
    const [isMobile, setMobile] = useState(window.innerWidth > 1024);

    const updateSize = () => {
        setMobile(window.innerWidth > 1024);
    }

    useEffect(() => {
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    });

    return isMobile;
}

export default useWindowSize;