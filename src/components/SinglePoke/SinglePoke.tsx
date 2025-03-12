import { useEffect, useState } from "react";
import { ListPoke, Pokemon } from "../../interfaces/interfaces";
import axios from "axios";

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
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [singlePoke])

    return (  
        <div className="flex flex-col w-2/3 mb-10">
            <div className="relative bg-yellow-200 rounded-t-xl flex justify-center">
                <img className="-mt-10" src={singlePoke?.sprites.front_default} alt={singlePoke?.name}/>
            </div>
            <ul className="bg-green-200 rounded-b-xl flex justify-between px-3">
                <li>#{singlePoke?.id}</li>
                <li>{singlePoke?.name}</li>
            </ul>
        </div>
    );
}

export default SinglePoke;