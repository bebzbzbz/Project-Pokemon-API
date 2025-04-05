import { useContext, useEffect, useState } from "react";
import { ListPoke, Pokemon } from "../../interfaces/interfaces";
import axios from "axios";
import { Link } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";
import Loader from "../Loader/Loader";

interface SinglePokeProps {
    pokemonFromList: ListPoke;
}

const SinglePoke = ({pokemonFromList} : SinglePokeProps) => {
    const {setSearchName} = useContext(mainContext) as any
    const [singlePoke, setSinglePoke] = useState<Pokemon>()

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
        pokename = (singlePoke.name).slice(0,1).toUpperCase() + (singlePoke.name)?.slice(1)

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

    const resetSearchName = () => {
        setSearchName("")
    }

    return (  
        <Link to={`/${singlePoke?.name}`} className="flex rounded-2xl dropShadow flex-col" onClick={resetSearchName}>
            <div className="card-bg relative rounded-t-2xl h-23">
                {singlePoke?.sprites.other.showdown ? 
                    <img className="mx-auto h-full max-w-3/4 lg:max-w-1/2 object-contain -mt-3" src={singlePoke?.sprites.other.showdown.front_default ? singlePoke?.sprites.other.showdown.front_default : singlePoke?.sprites.other.home.front_default ? singlePoke?.sprites.other.home.front_default : "/images/pokeball.svg"} alt={singlePoke?.name}/> 
                    : <Loader/>
                }
                
            </div>
            <ul className="bg-gray-100 rounded-b-2xl flex justify-between px-3 py-1 text-right">
                <li>#{pokeId}</li>
                <li>{pokename}</li>
            </ul>
        </Link>
    );
}

export default SinglePoke;