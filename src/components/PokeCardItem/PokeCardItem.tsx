import { Pokemon } from "../../interfaces/interfaces";

interface PokeCardItemProps {
    pokemon: Pokemon;
}

const PokeCardItem = ({pokemon} : PokeCardItemProps) => {
    let pokeName : string = "";
    let pokeId : string = ""
        pokeName = (pokemon.name).slice(0,1).toUpperCase() + (pokemon.name).slice(1)

        switch(true) {
            case pokemon.id < 10: 
                pokeId = "00" + pokemon.id
                break;
            case pokemon.id < 100: 
                pokeId = "0" + pokemon.id
                break;
            default:
                pokeId = (pokemon.id).toString()
        }

    return (  
        <section className="h-screen flex flex-col items-center pt-5">
            <div className="card-bg relative rounded-2xl flex justify-center h-23 w-2/3 mb-3">
                <img className="-mt-3 h-full" src={pokemon.sprites.other.showdown.front_default} alt={pokeName}/>
            </div>
            <h1>#{pokeId} {pokeName}
                <span>#{pokeId} {pokeName}</span>
            </h1>
            {pokemon.types.map((type) => {return <button>{type.type.name}</button>})}
        </section>
    );
}

export default PokeCardItem;