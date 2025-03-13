import { useParams } from "react-router-dom";

const PokeCard = () => {
    const {pokeParam} = useParams();
    console.log(pokeParam);
    
    return (  
        <>
        <h1>POKECARD</h1>
        </>
    );
}

export default PokeCard;