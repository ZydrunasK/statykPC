/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

export const initialContext = {
    structureData: [],
    allParts: [],
    selectPart: () => {},
    removePart: () => {},
    returnAllParts: () => {},
};

export const AdminContext = createContext(initialContext);

export function AdminContextWrapper(props) {
    const type = [
        'CPU',
        'Ausintuvai',
        'Pagrindines-plokstes',
        'Atmintis',
        'Kietieji-diskai',
        'Vaizdo-Plokstes',
        'Maitinimo-blokai',
        'Korpusai'
    ]

    const [structureData, setStructureData] = useState(initialContext.structureData);
    
    useEffect(() => {
        fetch(`http://localhost:5123/api/dalys/Korpusai/structure`, {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => setStructureData(data[0]))
        .catch(error => console.error(error))

    }, [])
        
    const value = {
        structureData,
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
}

// cpu: {},
// ausintuvai: {},
// pagrindinesPlokstes: {},
// atmintis: {},
// kietiejiDiskai: {},
// gpu: {},
// maitinimoBlokai: {},
// korpusai: {},