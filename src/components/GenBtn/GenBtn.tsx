import { useContext } from "react"
import { mainContext } from "../../context/MainProvider"

interface GenBtnProps {
    text: string,
    offset: string,
    limit: string
}

const GenBtn = ({text, offset, limit}:GenBtnProps) => {
    const {loadOffset, setLoadOffset, setLoadLimit} = useContext(mainContext) as any
    
    const genHandler = () => {
        setLoadOffset(offset)
        setLoadLimit(limit)
    }

    return (  
        <button className={`cursor-pointer bg-poke-yellow py-1 px-5 rounded-full text-center text-poke-blue dropShadow ${offset === loadOffset && "active"}`} onClick={genHandler}>
            {text}
        </button>
    );
}

export default GenBtn;