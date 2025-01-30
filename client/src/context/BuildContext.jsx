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
    selectPart: () => {},
    removePart: () => {},
};

export const BuildContext = createContext(initialContext);

export function BuildContextWrapper(props) {

    const [build, setBuild] = useState(initialContext.build)

    function removePart(partType, num = null) {
        if (num === null) {
            setBuild((prevBuild) => ({...prevBuild, [partType]: {}}));
        } else {
            const newPartList = build[partType].filter(part => part !== build[partType][num])
            setBuild((prevBuild) => ({...prevBuild, [partType]: [...newPartList]}))

        }

    }

    function selectPart(part) {

        
        const keys = Object.keys(build);
        let key = null;
        
        for (let i = 0; i < keys.length; i++) {
            if (part.part_type_id === i + 1) {
                key = keys[i]
            }
        }
        
        // console.log("build: ", build);

        if (part.part_type_id > 0
            && part.part_type_id < 4
            || part.part_type_id > 6
            && part.part_type_id <= 8
        ) {
            setBuild((prevBuild) => ({...prevBuild, [key]: part})); 
        }
        
        if (part.part_type_id === 4) {
            setBuild((prevBuild) => ({...prevBuild, [key]: [...prevBuild.atmintis, part]}))
        }

        if (part.part_type_id === 5) {
            setBuild((prevBuild) => ({...prevBuild, [key]: [...prevBuild.kietiejiDiskai, part]}))
        }
        
        if (part.part_type_id === 6) {
            setBuild((prevBuild) => ({...prevBuild, [key]: [...prevBuild.gpu, part]}))
        }



    }

    const value = {
        build,
        selectPart,
        removePart
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