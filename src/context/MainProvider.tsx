import { createContext, useState } from "react";
import { ISingleType, ListPoke, Pokemon, TType } from "../interfaces/interfaces";

interface MainContextProps {
  dataPokeList: ListPoke[]
  setDataPokeList: (dataPokeList: ListPoke[]) => void
  singleType: ISingleType | null
  setSingleType: (singelType: ISingleType) => void 
  dark: boolean
  setDark: (dark: boolean) => void
  dataTypes: TType[]
  setDataTypes: (dataTypes: TType[]) => void
  searchName: string
  setSearchName: (searchName: string) => void
  filteredArray: Pokemon[]
  setFilteredArray: (filteredArray: Pokemon[]) => void
}

export const mainContext = createContext<MainContextProps | null>(null);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
    //useState für fetch mit Liste 20 Pokes
    const [dataPokeList, setDataPokeList] = useState<ListPoke[]>([]);

  //useState für fetch der Types
  const [dataTypes, setDataTypes] = useState<TType[]>([])

  //useState für fetch der einzelnen Types
  const [singleType, setSingleType] = useState<ISingleType | null>(null)

  //useState zum Togglen des light/dark modus
  const [dark, setDark] = useState<boolean>(false)

  //useState für die InputSearchFunction
  const [searchName, setSearchName] = useState<string>("")


  const [filteredArray, setFilteredArray] = useState<Pokemon[]>([])



  return (
    <>
      <mainContext.Provider value={{ dataPokeList, setDataPokeList, dataTypes, setDataTypes, singleType, setSingleType, dark, setDark, searchName, setSearchName, filteredArray, setFilteredArray}}>
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainProvider;
