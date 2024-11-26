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
 
    return (
        <>
            <table className={s.table}>
                <tbody className={s.tbody}>
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Procesorius</td>
                        <td  className={s.td}>
                            {
                            build[0] === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 1) === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 1).part_name
                            } 
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/CPU`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Aušintuvas</td>
                        <td  className={s.td}>
                           {
                            build[0] === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 2) === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 2).part_name
                            }  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Ausintuvai`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Pagrindine plokštė</td>
                        <td  className={s.td}>
                           {
                            build[0] === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 3) === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 3).part_name
                            }  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Pagrindines-plokstes`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Atmintis (RAM)</td>
                        <td  className={s.td}>
                           {
                            build[0] === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 4) === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 4).part_name
                            }  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Atmintis`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Kietasis diskas</td>
                        <td  className={s.td}>
                           {
                            build[0] === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 5) === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 5).part_name
                            }  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Kietieji-diskai`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Vaizdo plokštė</td>
                        <td  className={s.td}>
                           {
                            build[0] === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 6) === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 6).part_name
                            }  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/GPU`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Maitinimo blokas</td>
                        <td  className={s.td}>
                           {
                            build[0] === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 7) === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 7).part_name
                            }  
                        </td>
                        <td  className={s.td}>
                            <button onClick={() => navigate(`/dalys/Maitinimo-blokai`)}>CHOOSE PART</button>
                        </td>
                    </tr>
                    
                    <tr className={s.tr}>
                        <td  className={s.td}><img src="#" alt="partPIC" /></td>
                        <td  className={s.td}>Korpusas</td>
                        <td  className={s.td}>
                           {
                            build[0] === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 8) === undefined 
                            ? 'PART NAME' : build.find(part => part.part_type_id === 8).part_name
                            }  
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
