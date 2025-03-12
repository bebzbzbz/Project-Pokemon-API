import { Pokemon } from "../../interfaces/interfaces";

interface SinglePokeProps {
    pokemon: Pokemon
}

const SinglePoke = ({pokemon} : SinglePokeProps) => {
    return (  
        <div className="flex flex-col w-2/3 mb-10">
            <div className="relative bg-yellow-200 rounded-t-xl flex justify-center">
                <img className="-mt-10" src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <ul className="bg-green-200 rounded-b-xl flex justify-between px-3">
                <li>#{pokemon.id}</li>
                <li>{pokemon.name}</li>
            </ul>
        </div>
    );
}

export default SinglePoke;