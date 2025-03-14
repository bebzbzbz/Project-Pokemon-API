import { createContext, useState } from "react";
import { ISingleType, ListPoke } from "../interfaces/interfaces";

interface MainContextProps {
  dataPokeList: ListPoke[]
  setDataPokeList: (dataPokeList: ListPoke[]) => void
  singleType: ISingleType | null
  setSingleType: (singelType: ISingleType) => void 
  dark: boolean
  setDark: (dark: boolean) => void
  dataTypes: ListPoke[]
  setDataTypes: (dataTypes: ListPoke[]) => void
  searchName: string
  setSearchName: (searchName: string) => void
}

export const mainContext = createContext<MainContextProps | null>(null);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
    //useState für fetch mit Liste 20 Pokes
    const [dataPokeList, setDataPokeList] = useState<ListPoke[]>([]);

  //useState für fetch der Types
  const [dataTypes, setDataTypes] = useState<ListPoke[]>([])

  //useState für fetch der einzelnen Types
  const [singleType, setSingleType] = useState<ISingleType | null>(null)

  //useState zum Togglen des light/dark modus
  const [dark, setDark] = useState<boolean>(false)

  //useState für die InputSearchFunction
  const [searchName, setSearchName] = useState<string>("")

  return (
    <>
      <mainContext.Provider value={{ dataPokeList, setDataPokeList, dataTypes, setDataTypes, singleType, setSingleType, dark, setDark, searchName, setSearchName}}>
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainProvider;
