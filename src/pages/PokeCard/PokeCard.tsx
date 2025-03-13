import { useParams } from "react-router-dom";
import PokeCardItem from "../../components/PokeCardItem/PokeCardItem";
import { useEffect, useState } from "react";
import { Pokemon } from "../../interfaces/interfaces";
import axios from "axios";
import Loader from "../../components/Loader/Loader";



const PokeCard = () => {
    const {pokeParam} = useParams();
    const [pokeCard, setPokeCard] = useState<Pokemon>()

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeParam}`)
                if (response) {
                    setPokeCard(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    
    return (  
        <>
            {pokeCard ? <PokeCardItem key={crypto.randomUUID()} pokemon={pokeCard}/> : <Loader/>}
        </>
    );
}

export default PokeCard;