/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

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

    const [build, setBuild] = useState(initialContext.build)

    function selectPart(part) {

        console.log("build: ", build);
        

        const keys = Object.keys(build);
        let key = null;

        for (let i = 0; i < keys.length; i++) {
            if (part.part_type_id === i + 1) {
                key = keys[i]
            }
        }

        switch (part.part_type_id) {
            case 1:
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); 
                break;
            case 2:
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); ; 
                break;
            case 3:
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); ; 
                break;
            case 4:
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); ; 
                break;
            case 5:
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); ; 
                break;
            case 6:
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); ; 
                break;
            case 7:
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); ; 
                break;
            case 8:
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); ; 
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