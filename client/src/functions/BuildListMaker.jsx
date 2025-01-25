import { useNavigate } from 'react-router-dom';
import { PartNameTd } from '../components/buildPartsList/PartNameTd.jsx';
import s from '../pages/pagesCSS/build.module.css';
import { useContext } from 'react';
import { BuildContext } from '../context/BuildContext.jsx';

export function BuildListMaker(partType, nav) {

    const navigate = useNavigate();
    const build = useContext(BuildContext)

    let part = (                    
            <tr className={s.tr}>
                <td className={s.td}><img src="#" alt="partPIC" /></td>
                <PartNameTd partType={partType} partNum={}/>
                <td className={s.td}> 
                    <button onClick={() => navigate(`/dalys/CPU`)}>REMOVE PART</button>
                </td>
            </tr>
        )
    return (
        <>
            <table className={s.table}>
                <thead>
                    <th>{partType}</th>
                    <th> 
                        <button onClick={() => navigate(`/dalys/${nav}`)}>CHOOSE PART</button>
                    </th>
                </thead>
                <tbody>
                    {part}  
                </tbody>
            </table>
        </>
    );
}