import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import axios from "axios";
import { ListPoke } from "../../interfaces/interfaces";
import SinglePoke from "../../components/SinglePoke/SinglePoke";
import Loader from "../../components/Loader/Loader";

interface IDataPokeListProps {
    dataPokeList: ListPoke[],
    setDataPokeList: (dataPokeList: ListPoke[]) => void
    searchName: string,
    loadOffset: string,
    loadLimit: string
}

const Home = () => {
    const {dataPokeList, setDataPokeList, searchName, loadOffset, loadLimit} = useContext(mainContext) as IDataPokeListProps

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?${loadOffset}limit=${loadLimit}`)
                if (response) {
                    setDataPokeList(response.data.results)

                    // search Funktion!
                    if(searchName != "") {
                        const filteredPokes = dataPokeList.filter((singlePokemon: ListPoke) => singlePokemon.name.includes(searchName))
                        setDataPokeList(filteredPokes)
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [searchName, loadOffset])

    return (  
        <section>
                <article className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 py-7">
                {
                    dataPokeList ?
                    dataPokeList.map((singlePoke: ListPoke) => {
                        return <SinglePoke key={singlePoke.name} pokemonFromList={singlePoke} />;
                    }
                ): <Loader/>}
            </article>
        </section>
    );
}

export default Home