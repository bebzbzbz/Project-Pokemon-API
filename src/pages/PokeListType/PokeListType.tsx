import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";
import axios from "axios";
import { ISingleType, ListPoke, Pokemon, Pokemony, TType, } from "../../interfaces/interfaces";
import SinglePoke from "../../components/SinglePoke/SinglePoke";

interface ISingleTypeProps {
    singleType: ISingleType
    setSingleType: (singleType: ISingleType) => void
    searchName: string
    setDataTypes: (dataTypes: TType[]) => void
    filteredArray: Pokemon[]
    setFilteredArray: (filteredArray: Pokemon[]) => void
}


const PokeListType = () => {
    //hier entsteht Magie zwischen Linkt to={} aus Type.tsx und dem useParams--> haben dann densleben Inhalt
    const {typeParam} = useParams();

    const {singleType, setSingleType, searchName, filteredArray, setFilteredArray} = useContext(mainContext) as ISingleTypeProps

    useEffect(()=> {
      const fetchData = async () => {
          try {
              const response = await axios.get(`https://pokeapi.co/api/v2/type/${typeParam}`)
              if (response) {
                const pokePromise = await Promise.all(response.data.pokemon.map(async (singlePoke: Pokemony)=> {
                    const typeResponse = await axios.get(singlePoke.pokemon.url)
                    return typeResponse.data
                }))
                console.log(pokePromise);
                  setSingleType(response.data)
                  setFilteredArray(pokePromise)
                //   console.log(response.data);
              }
          } catch (error) {
              console.log(error);
          }
      }
      fetchData()
  }, [])

//   console.log(singleType);


     // search Funktion!
  let lastStepFilteredPokes: Pokemon[] = []

                      if(searchName != "") {
                        
                          const filteredPokes = singleType.pokemon.map((singlePokemon: Pokemony) => singlePokemon.pokemon )
                        
                         lastStepFilteredPokes = filteredArray?.filter((singlePoke: Pokemon) => singlePoke.name.includes(searchName))
                      }
                    //   setTest(lastStepFilteredPokes)
                     console.log(lastStepFilteredPokes);

    return ( 
<>
<h1 className="text-center">{singleType?.name.toUpperCase()}<span className="span-type">{singleType?.name.toUpperCase()}</span></h1>
    <section className="grid grid-cols-2 gap-x-5 gap-y-10 p-7">
      {singleType && (singleType ? singleType?.pokemon.map((pokemon: Pokemony) => (

<SinglePoke pokemonFromList={pokemon.pokemon} key={crypto.randomUUID()} filteredArray={filteredArray}/>
)) : <p>Loading</p>)}
      {lastStepFilteredPokes && (lastStepFilteredPokes ? lastStepFilteredPokes?.map((pokemon: Pokemon) => (

<SinglePoke key={crypto.randomUUID()} lastStepFilteredPokes={pokemon} filteredArray={filteredArray}/>
)) : <p>Loading</p>)}

    </section>
</>
    );
}

export default PokeListType;
