//type für Fetch der 20 Pokemons für Übersicht, für Type Fetch und Moves
export interface ListPoke {
  name: string,
  url: string
}

//type für Fetch der einzelnen Pokemons
export interface Pokemon {
  id: number;
  name: string;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
  }>;
  sprites: {
    back_default: string;
    back_female: any;
    back_shiny: string;
    back_shiny_female: any;
    front_default: string;
    front_female: any;
    front_shiny: string;
    front_shiny_female: any;
    other: {
      dream_world: {
        front_default: string;
        front_female: any;
      };
      home: {
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
      showdown: {
        back_default: string;
        back_female: any;
        back_shiny: string;
        back_shiny_female: any;
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
      };
    };
  };
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
};

//interface für verschachtelten fetch der einzelnen Types
export interface ISingleType {
  id: number
  name: string
  moves: ListPoke[]
  pokemon: Pokemony[]
}

export interface Pokemony {
  pokemon: ListPoke
  slot: number
}