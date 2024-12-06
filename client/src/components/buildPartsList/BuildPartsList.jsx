/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import s from '../../pages/pagesCSS/build.module.css';
import { useContext } from 'react';
import { BuildContext } from '../../context/BuildContext.jsx';
import { Cpu_tr } from './cpu_tr.jsx';
import { Cooler_tr } from './Cooler_tr';
import { Mobo_tr } from './mobo_tr';
import { Memory_tr } from './Memory_tr';
import { Storage_tr } from './storage_tr';
import { Gpu_tr } from './Gpu_tr';
import { Psu_tr } from './Psu_tr';
import { Case_tr } from './Case_tr';

export function BuildPartsList() {

    const { build }  = useContext(BuildContext);
 
    return (
        <>
            <table className={s.table}>
                <tbody className={s.tbody}>
                    <Cpu_tr />
                    <Cooler_tr />
                    <Mobo_tr />
                    <Memory_tr />
                    <Storage_tr />
                    <Gpu_tr />
                    <Psu_tr />
                    <Case_tr />  
                </tbody>
            </table>       
        </>
    )
}


// const partTypeList = [
//     'Procesorius',
//     'Aušintuvas',
//     'Pagrindine plokštė',
//     'Atmintis (RAM)',
//     'Kietasis diskas',
//     'Vaizdo plokštė',
//     'Maitinimo blokas',
//     'Korpusas'
// ];
// const partTypePageList = [
//     '/CPU',
//     '/Ausintuvai',
//     '/Pagrindines-plokstes',
//     '/Atmintis',
//     '/Kietieji-diskai',
//     '/GPU',
//     '/Maitinimo-blokai',
//     '/Korpusai'
// ];