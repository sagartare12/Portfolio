import React, { createContext , useContext, useState} from 'react'
import data from './data.json'


const DataContext = createContext()
export const ContextProvider = ({children}) =>{

console.log(data)

return <DataContext.Provider value={ {data}} >
    {children}
</DataContext.Provider>


}

export const useData = () => useContext(DataContext);
