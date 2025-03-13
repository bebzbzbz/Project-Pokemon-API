import { useEffect, useState } from "react";
import { ListPoke, Pokemon } from "../../interfaces/interfaces";
import axios from "axios";
import { Link } from "react-router-dom";

interface SinglePokeProps {
    pokemonFromList: ListPoke
}

const SinglePoke = ({pokemonFromList} : SinglePokeProps) => {
    const [singlePoke, setSinglePoke] = useState<Pokemon>()

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(pokemonFromList.url)
                if (response) {
                    setSinglePoke(response.data)
                    console.log(response);
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
        pokename = (singlePoke?.name).slice(0,1).toUpperCase() + (singlePoke?.name)?.slice(1)

        switch(true) {
            case singlePoke.id < 10: 
                pokeId = "00" + singlePoke.id
                break;
            case singlePoke.id < 100: 
                pokeId = "0" + singlePoke.id
                break;
            default:
                pokeId = (singlePoke.id).toString()
        }
    }


    return (  
        <Link to={`${singlePoke?.name}`} className="flex flex-col">
            <div className="relative bg-linear-to-tr from-yellow-200 to-amber-500 rounded-t-2xl flex justify-center h-23">
                <img className="-mt-3 h-full" src={singlePoke?.sprites.other.showdown.front_default} alt={singlePoke?.name}/>
            </div>
            <ul className="bg-white rounded-b-2xl flex justify-between px-3 py-1">
                <li>#{pokeId}</li>
                <li>{pokename}</li>
            </ul>
        </Link>
    );
}

export default SinglePoke;