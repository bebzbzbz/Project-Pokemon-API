import { useParams } from "react-router-dom";

const PokeListType = () => {

    const {typeParam} = useParams();
    console.log(typeParam);

    return ( <></> );
}
 
export default PokeListType;

//das ist die Seite wo die Params hin müsen, wenn ich mit cocktail vergleiche
//ich brauche aber noch link dahin (in TYpe-> Link to)
//dieser Link muss dynamisch sein--> water/ground usw..also quasi dataType.name ---> das muss ich irgendwie als Params reinbekommen