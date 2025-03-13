import { useContext, useEffect, useRef, useState } from "react";
import { ListPoke, Pokemon } from "../../interfaces/interfaces";
import axios from "axios";
import { Link } from "react-router-dom";

interface SinglePokeProps {
    pokemonFromList: ListPoke;
    lastStepFilteredPokes: ListPoke[]
}

const SinglePoke = ({pokemonFromList, lastStepFilteredPokes} : SinglePokeProps) => {
    const [singlePoke, setSinglePoke] = useState<Pokemon>()

    // console.log(lastStepFilteredPokes);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(pokemonFromList.url)
                if (response) {
                    setSinglePoke(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    let pokename : string = "";
    let pokeId : string = ""
    if(singlePoke) {
        pokename = (singlePoke?.name)?.slice(0,1).toUpperCase() + (singlePoke?.name)?.slice(1)

        switch(true) {
            case singlePoke.id < 10: 
                pokeId = "00" + singlePoke.id
                break;
            case singlePoke.id < 100: 
                pokeId = "0" + singlePoke.id
                break;
            default:
                pokeId = (singlePoke.id)?.toString()
        }
    }

    return (  
        <Link to={`/${singlePoke?.name}`} className="flex flex-col">
            <div className="card-bg relative rounded-t-2xl flex justify-center h-23">
                <img className="h-full -mt-3" src={singlePoke?.sprites.other.showdown.front_default ? singlePoke?.sprites.other.showdown.front_default : singlePoke?.sprites.other.home.front_default} alt={singlePoke?.name}/>
            </div>
            <ul className="bg-white rounded-b-2xl flex justify-between px-3 py-1 text-right">
                <li>#{pokeId}</li>
                <li>{pokename}</li>
            </ul>
        </Link>
    );
}

export default SinglePoke;