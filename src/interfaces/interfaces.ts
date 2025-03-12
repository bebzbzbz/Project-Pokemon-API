//type für Fetch der 20 Pokemons für Übersicht
export type ListPoke = {
  name: string,
  url: string
}

//type für Fetch der einzelnen Pokemons
export type Pokemon = {
  id: number;
  name: string;
  abilities: Array<{
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }>;
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

//type für fetch Type
export type TType = {
  name: string,
  url: string
}


export interface ISingleType {
  // damage_relations: DamageRelations
  // game_indices: Index[]
  // generation: Generation2
  id: number
  // move_damage_class: MoveDamageClass
  moves: Mfe[]
  // name: string
  // names: Name[]
  // past_damage_relations: any[]
  pokemon: Pokemony[]
  // sprites: Sprites
}

// export interface DamageRelations {
//   double_damage_from: DoubleDamageFrom[]
//   double_damage_to: any[]
//   half_damage_from: any[]
//   half_damage_to: HalfDamageTo[]
//   no_damage_from: NoDamageFrom[]
//   no_damage_to: NoDamageTo[]
// }

// export interface DoubleDamageFrom {
//   name: string
//   url: string
// }

// export interface HalfDamageTo {
//   name: string
//   url: string
// }

// export interface NoDamageFrom {
//   name: string
//   url: string
// }

// export interface NoDamageTo {
//   name: string
//   url: string
// }

// export interface Index {
//   game_index: number
//   generation: Generation
// }

// export interface Generation {
//   name: string
//   url: string
// }

// export interface Generation2 {
//   name: string
//   url: string
// }

// export interface MoveDamageClass {
//   name: string
//   url: string
// }

export interface Mfe {
  name: string
  url: string
}

// export interface Name {
//   language: Language
//   name: string
// }

// export interface Language {
//   name: string
//   url: string
// }

export interface Pokemony {
  pokemon: Pokemon2
  slot: number
}

export interface Pokemon2 {
  name: string
  url: string
}

// export interface Sprites {
//   "generation-iii": GenerationIii
//   "generation-iv": GenerationIv
//   "generation-ix": GenerationIx
//   "generation-v": GenerationV
//   "generation-vi": GenerationVi
//   "generation-vii": GenerationVii
//   "generation-viii": GenerationViii
// }

// export interface GenerationIii {
//   colosseum: Colosseum
//   emerald: Emerald
//   "firered-leafgreen": FireredLeafgreen
//   "ruby-saphire": RubySaphire
//   xd: Xd
// }

// export interface Colosseum {
//   name_icon: string
// }

// export interface Emerald {
//   name_icon: string
// }

// export interface FireredLeafgreen {
//   name_icon: string
// }

// export interface RubySaphire {
//   name_icon: string
// }

// export interface Xd {
//   name_icon: string
// }

// export interface GenerationIv {
//   "diamond-pearl": DiamondPearl
//   "heartgold-soulsilver": HeartgoldSoulsilver
//   platinum: Platinum
// }

// export interface DiamondPearl {
//   name_icon: string
// }

// export interface HeartgoldSoulsilver {
//   name_icon: string
// }

// export interface Platinum {
//   name_icon: string
// }

// export interface GenerationIx {
//   "scarlet-violet": ScarletViolet
// }

// export interface ScarletViolet {
//   name_icon: string
// }

// export interface GenerationV {
//   "black-2-white-2": Black2White2
//   "black-white": BlackWhite
// }

// export interface Black2White2 {
//   name_icon: string
// }

// export interface BlackWhite {
//   name_icon: string
// }

// export interface GenerationVi {
//   "omega-ruby-alpha-sapphire": OmegaRubyAlphaSapphire
//   "x-y": XY
// }

// export interface OmegaRubyAlphaSapphire {
//   name_icon: string
// }

// export interface XY {
//   name_icon: string
// }

// export interface GenerationVii {
//   "lets-go-pikachu-lets-go-eevee": LetsGoPikachuLetsGoEevee
//   "sun-moon": SunMoon
//   "ultra-sun-ultra-moon": UltraSunUltraMoon
// }

// export interface LetsGoPikachuLetsGoEevee {
//   name_icon: string
// }

// export interface SunMoon {
//   name_icon: string
// }

// export interface UltraSunUltraMoon {
//   name_icon: string
// }

// export interface GenerationViii {
//   "brilliant-diamond-and-shining-pearl": BrilliantDiamondAndShiningPearl
//   "legends-arceus": LegendsArceus
//   "sword-shield": SwordShield
// }

// export interface BrilliantDiamondAndShiningPearl {
//   name_icon: string
// }

// export interface LegendsArceus {
//   name_icon: string
// }

// export interface SwordShield {
//   name_icon: string
// }

