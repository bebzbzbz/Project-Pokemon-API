import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import axios from "axios";
import { ListPoke, Pokemon } from "../../interfaces/interfaces";
import SinglePoke from "../../components/SinglePoke/SinglePoke";

interface IDataPokeListProps {
    dataPokeList: ListPoke[],
    setDataPokeList: (dataPokeList: ListPoke[]) => void
}

const Home = () => {

    const {dataPokeList, setDataPokeList} = useContext(mainContext) as IDataPokeListProps

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

    return (  
        <section className="grid grid-cols-2 gap-x-5 gap-y-10 p-7">
            {
                dataPokeList ?
                dataPokeList.map((singlePoke: ListPoke) => {
                    return <SinglePoke key={singlePoke.name} pokemonFromList={singlePoke} />;
                }
            ): <p>Hmmm</p>}
        </section>
    );
}

export default Home