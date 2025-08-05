import { createContext, useState } from "react";
export const SelectedBookContext = createContext()
export function Provider ({children}){
      const [selected, setSelected] = useState(" ")
      return (
      <SelectedBookContext.Provider value={{selected, setSelected}}>
        {children}
      </SelectedBookContext.Provider>
      )
}

