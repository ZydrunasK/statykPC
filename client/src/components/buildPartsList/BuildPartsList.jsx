/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { BuildContext } from '../../context/BuildContext.jsx';

import { BuildListMaker } from '../../functions/BuildListMaker.jsx';

export function BuildPartsList() {
 
    return (
        <>
            {BuildListMaker('cpu', 'CPU')}
            {BuildListMaker('ausintuvas', 'Ausintuvai')}
            {BuildListMaker('pagrindinePlokste', 'Pagrindines-plokstes')}
            {BuildListMaker('atmintis', 'Atmintis')}
            {BuildListMaker('kietiejiDiskai', 'Kietieji-diskai')}
            {BuildListMaker('gpu', 'GPU')}
            {BuildListMaker('maitinimoBlokas', 'Maitinimo-blokai')}
            {BuildListMaker('korpusas', 'Korpusai')}
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
{/* <table className={s.table}>
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
</table>    */}