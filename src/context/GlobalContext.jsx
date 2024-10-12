/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const initialContext = {
    exampleValue: 'example',
    exampleFunction: () => {}
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {

    const [exampleValue, setExampleValue] = useState(initialContext.exampleValue);

    function exampleFunction() {
        setExampleValue(true);
    }

    const value = {
        exampleValue,
        exampleFunction,
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}