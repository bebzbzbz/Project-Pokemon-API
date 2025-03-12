import { Link } from "react-router-dom";
import { TType } from "../../interfaces/interfaces";
import { useContext } from "react";

//Props für Kommunikation zwischen hier und Selection
interface ITypeProps {
    dataType : TType
}



const Type = ({dataType}: ITypeProps) => {

const {singleType, setSingleType} = useContext(mainContext) as any

    return ( 
    <>
    <Link to={""} className="font-bold bg-red-200 border border-black rounded w-25 h-8 flex items-center justify-center text-white text-sm">
  {dataType.name.toUpperCase()}
</Link>
    </> 
);
}
 
export default Type;