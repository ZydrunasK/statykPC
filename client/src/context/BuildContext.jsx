/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const initialContext = {
    build: [],
    selectPart: () => {}
};

export const BuildContext = createContext(initialContext);

export function BuildContextWrapper(props) {

    const [build, setBuild] = useState(initialContext.build);

    function selectPart(part) {
        setBuild([...build, part]);
        console.log('something happened');
        console.log(build);
        
    }

    const value = {
        build,
        selectPart
    };

    return (
        <BuildContext.Provider value={value}>
            {props.children}
        </BuildContext.Provider>
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