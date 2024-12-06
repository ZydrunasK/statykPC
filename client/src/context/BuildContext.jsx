/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const initialContext = {
    build: {
        cpu: {},
        ausintuvas: {},
        pagrindinePlokste: {},
        atmintis: [],
        kietiejiDiskai: [],
        gpu: [],
        maitinimoBlokas: {},
        korpusas: {},
    },
    selectPart: () => {}
};

export const BuildContext = createContext(initialContext);

export function BuildContextWrapper(props) {

    const [build, setBuild] = useState(initialContext.build);

    function selectPart(part) {
        console.log('select part function');
        console.log(part);
        switch (part.part_type_id) {
            case 1:
            setBuild(build.cpu = part); 
            console.log(build.cpu);
               
                break;
        
            default:
                break;
        }
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