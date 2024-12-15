import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';
import { PartNameTd } from './PartNameTd';

export function Memory_tr() {

    const navigate = useNavigate();

    return (
        <tr className={s.tr}>
            <td  className={s.td}><img src="#" alt="partPIC" /></td>
            <td  className={s.td}>Atmintis (RAM)</td>
            <PartNameTd partType={'atmintis'} />
            <td  className={s.td}>
                <button onClick={() => navigate(`/dalys/Atmintis`)}>CHOOSE PART</button>
            </td>
        </tr>
    );
}