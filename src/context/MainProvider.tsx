import { createContext, useState } from "react";
import { ListPoke, TType } from "../interfaces/interfaces";

export const mainContext = createContext({});

const MainProvider = ({ children }: { children: React.ReactNode }) => {
    //useState für fetch mit Liste 20 Pokes
    const [dataPokeList, setDataPokeList] = useState<ListPoke>({
    name: "",
    url: "",
  });

  //useState für fetch der Types
  const [dataTypes, setDataTypes] = useState<TType>({
    name: "",
    url: "",
  })

  return (
    <>
      <mainContext.Provider value={{ dataPokeList, setDataPokeList, dataTypes, setDataTypes }}>
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainProvider;
