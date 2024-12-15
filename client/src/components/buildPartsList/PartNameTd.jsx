/* eslint-disable react/prop-types */
import { useContext } from 'react';
import s from '../../pages/pagesCSS/build.module.css';
import { BuildContext } from '../../context/BuildContext';

export function PartNameTd({ partType, partNum }) {

    const {build} = useContext(BuildContext);
    let part = build[partType];

    if (Array.isArray(part)
        && part.length > 0) {
        part = build[partType][partNum];
    }
    
    return (
        <td  className={s.td}>{part.part_name ?? "PART NAME"}</td>
    );
}