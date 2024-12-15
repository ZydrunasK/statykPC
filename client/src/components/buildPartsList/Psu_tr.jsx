import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';
import { PartNameTd } from './PartNameTd';

export function Psu_tr() {

    const navigate = useNavigate();

    return (
        <tr className={s.tr}>
            <td  className={s.td}><img src="#" alt="partPIC" /></td>
            <td  className={s.td}>Maitinimo blokas</td>
            <PartNameTd partType={'maitinimoBlokas'} />
            <td  className={s.td}>
                <button onClick={() => navigate(`/dalys/Maitinimo-blokai`)}>CHOOSE PART</button>
            </td>
        </tr>
    );
}