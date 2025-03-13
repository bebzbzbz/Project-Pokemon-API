import axios from "axios";
import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import Type from "../../components/type/Type";
import { TType } from "../../interfaces/interfaces";
import { Link, useParams } from "react-router-dom";

interface IPropsDataTypes {
  dataTypes: TType[]
  setDataTypes: (dataTypes: TType[]) => void
}


const Selection = () => {

    //daten für fetchen der type Seite
  const { dataTypes, setDataTypes } = useContext(mainContext) as IPropsDataTypes;
  

  //type fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        if (response) {
          setDataTypes(response.data.results);

        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <>
      <header className=" flex items-center justify-between px-5 py-5">
        <div>
          <img src="../../../public/images/Pokemon.png" alt="Pokemon Logo" />
        </div>
        <Link to={"/"}>
          <img src="../../../public/images/Vector.png" alt="X" />
        </Link>
      </header>
      <div className=" flex justify-center">
      <h1 className="text-center">TYPES<span className="span-type">TYPES</span></h1>
      </div>

      <section className="grid grid-cols-2 gap-2 px-10 py-8 justify-items-center">
        {dataTypes.map((dataType: TType, index: number) => (
          <div key={index}>
            <Type dataType={dataType} />
          </div>
        ))}
      </section>
      {/* pt-63 weil Bild nicht komplett grau war und ich keine Ahnung habe warum */}
      <section className=" flex justify-center pb-10 lg:pt-23 md:pt-63">
        <button className="bg-poke-yellow px-8 py-3 border-4 rounded-lg border-poke-blue text-poke-blue font-bold">
          SEARCH
        </button>
      </section>
    </>
  );
};

export default Selection;
