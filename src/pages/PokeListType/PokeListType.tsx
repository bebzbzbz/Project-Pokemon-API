import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";
import axios from "axios";
import { ISingleType, Pokemony, } from "../../interfaces/interfaces";
import SinglePoke from "../../components/SinglePoke/SinglePoke";
import Loader from "../../components/Loader/Loader";

interface ISingleTypeProps {
    singleType: ISingleType
    setSingleType: (singleType: ISingleType) => void
}

const PokeListType = () => {
    //hier entsteht Magie zwischen Linkt to={} aus Type.tsx und dem useParams--> haben dann densleben Inhalt
    const {typeParam} = useParams();

    const {singleType, setSingleType} = useContext(mainContext) as ISingleTypeProps

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/type/${typeParam}`)
                if (response) {
                    setSingleType(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return ( 
        <section>
            <h1 className="text-center">TYPE {singleType?.name.toUpperCase()}<span className="span-type">TYPE {singleType?.name.toUpperCase()}</span></h1>
            {singleType ? 
                    <article className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 py-7">
                        {singleType?.pokemon.map((pokemon: Pokemony) => (
                        <SinglePoke pokemonFromList={pokemon.pokemon} key={crypto.randomUUID()}/>
                    ))}
                    </article>
                    : <Loader/>}
        </section>
    );
}

export default PokeListType;
