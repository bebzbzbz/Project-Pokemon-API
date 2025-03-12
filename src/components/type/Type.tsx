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

const {singleType, setSingleType} = useContext(mainContext) as any

useEffect(()=> {
    const fetchData = async () => {
        try {
            const response = await axios.get(dataType.url)
            if (response) {
                setSingleType(response.data)
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
}, [])


//fetched mit 2 random ids
console.log(singleType);

    return ( 
    <>
    <Link to={""} className="font-bold bg-red-200 border border-black rounded w-25 h-8 flex items-center justify-center text-white text-sm">
  {dataType.name.toUpperCase()}
</Link>
    </> 
);
}
 
export default Type;