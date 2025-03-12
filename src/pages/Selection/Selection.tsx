import axios from "axios";
import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import Type from "../../components/type/Type";
import { TType} from "../../interfaces/interfaces";

const Selection = () => {

 const {dataTypes, setDataTypes} = useContext(mainContext) as any


    useEffect(()=> {
        const fetchData = async () => {
try {
    const response = await axios.get("https://pokeapi.co/api/v2/type/")
    if (response) {
        setDataTypes(response.data.results)
    }
} catch (error) {
    console.log(error);
}
        }
        fetchData()
    }, [])

    console.log(dataTypes);

    return (  
        <section className="flex flex-wrap  justify-center gap-5 mx-10 my-20">
        {
            dataTypes.map((dataType: TType, index: number ) => (
                <div key={index}>
                    <Type dataType={dataType}/>
                </div>
            )
        )}
    </section>
    );
}

export default Selection;