import { createContext } from "react"

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

  const value = {
    // add shared state later
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
