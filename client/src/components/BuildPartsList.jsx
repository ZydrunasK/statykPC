import { useNavigate } from 'react-router-dom';
import s from '../pages/pagesCSS/build.module.css';
import { useContext } from 'react';
import { BuildContext } from '../context/BuildContext';

export function BuildPartsList() {
    const navigate = useNavigate();
    const { build }  = useContext(BuildContext);

    const partTypeList = [
        'Procesorius',
        'Aušintuvas',
        'Pagrindine plokštė',
        'Atmintis (RAM)',
        'Kietasis diskas',
        'Vaizdo plokštė',
        'Maitinimo blokas',
        'Korpusas'
    ];
    const partTypePageList = [
        '/CPU',
        '/Ausintuvai',
        '/Pagrindines-plokstes',
        '/Atmintis',
        '/Kietieji-diskai',
        '/GPU',
        '/Maitinimo-blokai',
        '/Korpusai'
    ];
    
    const tableBody = [];
    build.sort((a, b) => a.part_type_id - b.part_type_id);
    console.log(build);
    
    

    for (let i = 0; i < partTypeList.length; i++) {
        tableBody.push(
            <tr className={s.tr} key={i + 50}>
                <td  className={s.td}><img src="#" alt="partPIC" /></td>
                <td  className={s.td}>{partTypeList[i]}</td>
                <td  className={s.td}>
                    PART NAME 
                </td>
                <td  className={s.td}>
                    <button onClick={() => navigate(`/dalys${partTypePageList[i]}`)}>CHOOSE PART</button>
                </td>
            </tr>
        );
    }
 
    return (
        <>
            <table className={s.table}>
                <tbody className={s.tbody}>
                    {tableBody}
                </tbody>
            </table>       
        </>
    )
}
