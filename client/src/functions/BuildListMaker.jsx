import { useNavigate } from 'react-router-dom';
import { PartNameTd } from '../components/buildPartsList/PartNameTd.jsx';
import s from '../pages/pagesCSS/build.module.css';

export function BuildListMaker(partType, nav) {

    const navigate = useNavigate();

    let part = (                    
            <tr className={s.tr}>
                <td className={s.td}><img src="#" alt="partPIC" /></td>
                <PartNameTd partType={'cpu'} />
                <td className={s.td}> 
                    <button onClick={() => navigate(`/dalys/CPU`)}>REMOVE PART</button>
                </td>
            </tr>
        )
    return (
        <>
            <table className={s.table}>
                <thead>
                    <th>CPU</th>
                    <th> 
                        <button onClick={() => navigate(`/dalys/CPU`)}>CHOOSE PART</button>
                    </th>
                </thead>
                <tbody>
                    {part}  
                </tbody>
            </table>
        </>
    );
}