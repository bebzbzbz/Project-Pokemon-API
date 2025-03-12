import { createContext, useState } from "react";

export const mainContext = createContext({});


const MainProvider = ({children}: {children: React.ReactNode}) => {

const [dataPokeList, setDataPokeList] = useState()

    return (  
        <>
        <mainContext.Provider value={{dataPokeList, setDataPokeList}}>
            {children}
        </mainContext.Provider>
        </>
    );
}

export default MainProvider;