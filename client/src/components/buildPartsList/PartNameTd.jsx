/* eslint-disable react/prop-types */
import { useContext } from 'react';
import s from '../../pages/pagesCSS/build.module.css';
import { BuildContext } from '../../context/BuildContext';

export function PartNameTd({ partType }) {

    const {build} = useContext(BuildContext);
    const part = build[partType];
    console.log(part);
    
    return (
        <td  className={s.td}>{part.part_name ?? "PART NAME"}</td>
    );
}