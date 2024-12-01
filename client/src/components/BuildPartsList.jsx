import { useNavigate } from 'react-router-dom';
import s from '../pages/pagesCSS/build.module.css';
import { useContext } from 'react';
import { BuildContext } from '../context/BuildContext';

export function BuildPartsList() {
    const navigate = useNavigate();
    const { build }  = useContext(BuildContext);


    
    function partNameByType(partType) {
        console.log();
        
        return partName;
    }
 
    return (
        <>
            <table className={s.table}>
                <tbody className={s.tbody}>
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Procesorius</td>
                        <td  className={s.td}>
                            {partNameByType(1)} 
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/CPU`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Aušintuvas</td>
                        <td  className={s.td}>
                           {partNameByType(2)}  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Ausintuvai`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Pagrindine plokštė</td>
                        <td  className={s.td}>
                           {partNameByType(3)}  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Pagrindines-plokstes`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Atmintis (RAM)</td>
                        <td  className={s.td}>
                           {partNameByType(4)}  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Atmintis`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Kietasis diskas</td>
                        <td  className={s.td}>
                           {partNameByType(5)}  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Kietieji-diskai`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Vaizdo plokštė</td>
                        <td  className={s.td}>
                           {partNameByType(6)}  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/GPU`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Maitinimo blokas</td>
                        <td  className={s.td}>
                           {partNameByType(7)}  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Maitinimo-blokai`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Korpusas</td>
                        <td  className={s.td}>
                           {partNameByType(8)}  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Korpusai`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
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