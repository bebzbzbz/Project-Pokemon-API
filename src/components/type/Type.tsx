import { Link } from "react-router-dom";
import { TType } from "../../interfaces/interfaces";
import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import axios from "axios";

//Props für Kommunikation zwischen hier und Selection
interface ITypeProps {
    dataType : TType
}

const Type = ({dataType}: ITypeProps) => {

// const {singleType, setSingleType} = useContext(mainContext) as any

// useEffect(()=> {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(dataType.url)
//             if (response) {
//                 setSingleType(response.data)
//                 console.log(response);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     fetchData()
// }, [])

// console.log(dataType);

    return ( 
    <>
    <Link to={`/selection/${dataType.name}`} className={`${dataType.name === "normal" ? "bg-normal" : dataType.name === "fighting" ? "bg-fighting" : dataType.name === "flying" ? "bg-flying" : dataType.name === "poison" ? "bg-poison" : dataType.name === "ground" ? "bg-ground" : dataType.name === "rock" ? "bg-rock" : dataType.name === "bug" ? "bg-bug" : dataType.name === "ghost" ? "bg-ghost" : dataType.name === "steel" ? "bg-steel" : dataType.name === "fire" ? "bg-fire" : dataType.name === "water" ? "bg-water" : dataType.name === "grass" ? "bg-grass" : dataType.name === "electric" ? "bg-electric" : dataType.name === "psychic" ? "bg-psychic" : dataType.name === "ice" ? "bg-ice" : dataType.name === "dragon" ? "bg-dragon" : dataType.name === "dark" ? "bg-dark" : dataType.name === "fairy" ? "bg-fairy" : dataType.name === "stellar" ? "bg-stellar" : dataType.name === "unknown" ? "bg-unknown" : ""} font-bold border border-black rounded w-25 h-8 lg:w-40 lg:h-12 flex items-center justify-center text-white text-sm`}
    >
  {dataType.name.toUpperCase()}
</Link>
    </> 
);
}
 
export default Type;