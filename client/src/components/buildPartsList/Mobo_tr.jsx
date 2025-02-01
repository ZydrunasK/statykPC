import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';
import { PartNameTd } from './PartNameTd';

export function Mobo_tr() {

    const navigate = useNavigate();

    return (
        <tr className={s.tr}>
            <td  className={s.td}><img src="#" alt="partPIC" /></td>
            <td  className={s.td}>Pagrindine plokštė</td>
            <PartNameTd partType={'pagrindinePlokste'} />
            <td  className={s.td}>
                <button onClick={() => navigate(`/dalys/Pagrindines-plokstes`)}>CHOOSE PART</button>
            </td>
        </tr>
    );
}