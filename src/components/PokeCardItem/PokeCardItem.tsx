import { Pokemon } from "../../interfaces/interfaces";
import Type from "../type/Type";

interface PokeCardItemProps {
  pokemon: Pokemon;
}

const PokeCardItem = ({ pokemon }: PokeCardItemProps) => {
  let pokeName: string = "";
  let pokeId: string = "";
  pokeName = pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1);

  switch (true) {
    case pokemon.id < 10:
      pokeId = "00" + pokemon.id;
      break;
    case pokemon.id < 100:
      pokeId = "0" + pokemon.id;
      break;
    default:
      pokeId = pokemon.id.toString();
  }

  console.log(pokemon.moves);
  return (
    <section className=" flex flex-col items-center pt-5">
      <div className="card-bg relative rounded-2xl flex justify-center h-23 w-2/3 mb-3">
        <img
          className="-mt-3 h-full"
          src={pokemon.sprites.other.showdown.front_default}
          alt={pokeName}
        />
      </div>
      <h1 className="mb-5">
        #{pokeId} {pokeName}
        <span>
          #{pokeId} {pokeName}
        </span>
      </h1>

      <div className="flex flex-col gap-5 mb-10">
        {pokemon.types.map((type) => (
          <Type dataType={type.type} />
        ))}
      </div>

      <h2 className="mb-5">MOVEMENTS</h2>
      <article className="grid grid-cols-2 gap-3 justify-items-center">
        {pokemon.moves.map((move, index) => (
          <p className="w-35 h-8 lg:w-40 lg:h-12 card-bg text-center rounded-xl py-1 text-poke-blue" key={index}>{move.move.name}</p>
        ))}
      </article>
    </section>
  );
};

export default PokeCardItem;
