import axios from "axios";
import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import { TType } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import TypeBtn from "../../components/TypeBtn/TypeBtn";

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

      <section className="flex flex-col items-center">
        <h1 className="text-center">TYPES<span className="span-type">TYPES</span></h1>
        <article className="grid grid-cols-2 gap-4 px-10 pt-8">
          {dataTypes.map((dataType: TType) => (
              <TypeBtn dataType={dataType} key={crypto.randomUUID()}/>
          ))}
        </article>


      </section>
    </>
  );
};

export default Selection;
