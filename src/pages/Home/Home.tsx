import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../context/MainProvider";
import axios from "axios";
import { ListPoke, Pokemon } from "../../interfaces/interfaces";
import SinglePoke from "../../components/SinglePoke/SinglePoke";

const Home = () => {

    const {dataPokeList, setDataPokeList} = useContext(mainContext) as any
    const [singlePokes, setSinglePokes] = useState<Pokemon[]>([])

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
                if (response) {
                    setDataPokeList(response.data.results)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchSinglePokes = async () => {
            if(dataPokeList) {
                const promises = dataPokeList.map(async (pokemon: ListPoke) => {
                    try {
                        const response = await axios.get(pokemon.url);
                        return response.data;
                    } catch (error) {
                        console.log("Fehler beim fetchen: " + error);
                    }
                });
    
                const results = await Promise.all(promises);
                setSinglePokes(results);
            }
        };
        fetchSinglePokes();
    }, [dataPokeList]);

    return (  
        <section className="grid grid-cols-2 my-gap-10">
            {
                singlePokes.map((singlePoke: Pokemon) => {
                    return <SinglePoke key={singlePoke.id} pokemon={singlePoke} />;
                }
            )}
        </section>
    );
}

export default Home