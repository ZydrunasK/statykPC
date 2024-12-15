import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';
import { PartNameTd } from './PartNameTd';

export function Gpu_tr() {

    const navigate = useNavigate();

    return (
        <tr className={s.tr}>
            <td  className={s.td}><img src="#" alt="partPIC" /></td>
            <td  className={s.td}>Vaizdo plokštė</td>
            <PartNameTd partType={'gpu'} />
            <td  className={s.td}>
                <button onClick={() => navigate(`/dalys/GPU`)}>CHOOSE PART</button>
            </td>
        </tr>
    );
}