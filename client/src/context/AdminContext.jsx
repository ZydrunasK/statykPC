/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const initialContext = {
    partType: [
        'CPU',
        'Ausintuvai',
        'Pagrindines-plokstes',
        'Atmintis',
        'Kietieji-diskai',
        'Vaizdo-Plokstes',
        'Maitinimo-blokai',
        'Korpusai'
    ],
    allParts: [],
    selectPart: () => {},
    removePart: () => {},
    returnAllParts: () => {},
};

export const AdminContext = createContext(initialContext);

export function AdminContextWrapper(props) {
    const [partType] = useState(initialContext.partType);
        
    const value = {
        partType
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