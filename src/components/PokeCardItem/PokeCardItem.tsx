import { Pokemon } from "../../interfaces/interfaces";
import TypeBtn from "../TypeBtn/TypeBtn";

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

  console.log(pokemon)

  return (
    <section className=" flex flex-col items-center">
      <div className="card-bg relative rounded-2xl flex justify-center h-23 w-1/2 md:w-1/3 mb-3 dropShadow">
        <img
          className={`${pokemon.sprites.other.showdown.front_default ? "-mt-3 h-full" : "h-25 -mt-7"}`}
          src={pokemon.sprites.other.showdown.front_default ? pokemon.sprites.other.showdown.front_default : (pokemon.sprites.other.home.front_default ? pokemon.sprites.other.home.front_default : "/images/pokeball.svg")}
          alt={pokeName}
        />
      </div>
      <h1 className="mb-5">
        #{pokeId} {pokeName}
        <span>
          #{pokeId} {pokeName}
        </span>
      </h1>

      <div className="flex gap-3 mb-10">
        {pokemon.types.map((type) => (
          <TypeBtn dataType={type.type} key={crypto.randomUUID()}/>
        ))}
      </div>

      <h2 className="mb-5">MOVEMENTS <span>MOVEMENTS</span></h2>
      <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {pokemon.moves.map((move) => (
          <p className="w-40 h-8 lg:w-40 lg:h-12 card-bg text-center rounded-xl py-1 lg:py-3 text-poke-blue dropShadow" key={crypto.randomUUID()}>
            {move.move.name.includes("-") ? move.move.name.replace("-", " ").toUpperCase() : move.move.name.toUpperCase()}
            </p>
        ))}
      </article>
    </section>
  );
};

export default PokeCardItem;