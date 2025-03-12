import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import axios from "axios";

const Home = () => {

    const {dataPokeList, setDataPokeList} = useContext(mainContext) as any

useEffect(()=> {
    const fetchData = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
            if (response) {
                setDataPokeList(response.data.results)
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
}, [])

console.log(dataPokeList);

    return (  
        <></>
    );
}

export default Home;