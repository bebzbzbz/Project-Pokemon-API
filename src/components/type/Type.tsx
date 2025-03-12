import { Link } from "react-router-dom";
import { TType } from "../../interfaces/interfaces";

//Props für Kommunikation zwischen hier und Selection
interface ITypeProps {
    dataType : TType
}

const Type = ({dataType}: ITypeProps) => {



    return ( 
    <>
    <Link to={""} className="bg-red-200 border border-black rounded px-3 py-2">{dataType.name}</Link>
    </> 
);
}
 
export default Type;