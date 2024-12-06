import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';

export function Case_tr() {

    const navigate = useNavigate();

    return (
        <tr className={s.tr}>
            <td  className={s.td}><img src="#" alt="partPIC" /></td>
            <td  className={s.td}>Korpusas</td>
            <td  className={s.td}>PART NAME</td>
            <td  className={s.td}>
                <button onClick={() => navigate(`/dalys/Korpusai`)}>CHOOSE PART</button>
            </td>
        </tr>
    );
}