import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';

export function Psu_tr() {

    const navigate = useNavigate();

    return (
        <tr className={s.tr}>
            <td  className={s.td}><img src="#" alt="partPIC" /></td>
            <td  className={s.td}>Maitinimo blokas</td>
            <td  className={s.td}>PART NAME</td>
            <td  className={s.td}>
                <button onClick={() => navigate(`/dalys/Maitinimo-blokai`)}>CHOOSE PART</button>
            </td>
        </tr>
    );
}