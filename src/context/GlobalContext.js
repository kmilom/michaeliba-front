import { createContext } from "react";

export const GlobalContext = createContext();

export default function GlobalContextProvider(props){

    return(
       <GlobalContext.Provider value={0}>
            {props.children}
       </GlobalContext.Provider>
    );
}
