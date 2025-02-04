/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const initialContext = {
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
        
    const value = {

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