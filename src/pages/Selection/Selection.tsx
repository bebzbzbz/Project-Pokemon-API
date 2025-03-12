import axios from "axios";
import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import Type from "../../components/type/Type";
import { TType } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";

const Selection = () => {
    //daten für fetchen der type Seite
  const { dataTypes, setDataTypes } = useContext(mainContext) as any;

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
        <img src="../../../public/images/TYPE.png" alt="TYPE" />
      </div>

      <section className="grid grid-cols-2 gap-2 px-10 py-8 justify-items-center">
        {dataTypes.map((dataType: TType, index: number) => (
          <div key={index}>
            <Type dataType={dataType} />
          </div>
        ))}
      </section>
      <section className=" flex justify-center pb-10 bg-">
        <button className="bg-poke-yellow px-8 py-3 border-4 rounded-lg border-poke-blue text-poke-blue font-bold">
          SEARCH
        </button>
      </section>
    </>
  );
};

export default Selection;
