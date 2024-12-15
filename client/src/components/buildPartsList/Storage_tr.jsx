import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';
import { PartNameTd } from './PartNameTd';

export function Storage_tr() {

    const navigate = useNavigate();

    return (
        <tr className={s.tr}>
            <td  className={s.td}><img src="#" alt="partPIC" /></td>
            <td  className={s.td}>Kietasis diskas</td>
            <PartNameTd partType={'kietiejiDiskai'} />
            <td  className={s.td}>
                <button onClick={() => navigate(`/dalys/Kietieji-diskai`)}>CHOOSE PART</button>
            </td>
        </tr>
    );
}