import { useEffect, useState } from "react";

interface BackToTopProps {
    target: React.RefObject<HTMLDivElement>
}

const BackToTop = ({target}: BackToTopProps) => {
    const [showButton, setShowButton] = useState<boolean>(false)
    const displayAfter = 200

    const handleShowButton = () => {
        if(window.scrollY > displayAfter) {
            setShowButton(true);
        } else {
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton);
        } 
    }, []);

    const scrollToRef = (target: React.RefObject<HTMLDivElement>) => {
        if(target.current) {
            window.scrollTo({
                top: target.current.offsetTop,
                behavior: "smooth"
            })
        }
    }

    return (  
        <>
            {showButton && (
                <div className="fixed rounded-full h-10 w-10 bg-amber-400 bottom-5 right-5 flex justify-center items-center z-10" onClick={() => scrollToRef(target)}>
                <img src="/images/back.svg" alt="" className="rotate-90 mb-1" />
            </div> )}
        </>
    );
}

export default BackToTop;