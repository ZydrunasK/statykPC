import { PartNameTd } from '../components/buildPartsList/PartNameTd.jsx';
import s from './REPLACE.module.css';

export function BuildListMaker() {



    let part = (                    
            <tr className={s.tr}>
                <td  className={s.td}><img src="#" alt="partPIC" /></td>
                <td  className={s.td}>Procesorius</td>
                <PartNameTd partType={'cpu'} />
                <td  className={s.td}>
                    <button onClick={() => navigate(`/dalys/CPU`)}>CHOOSE PART</button>
                </td>
            </tr>
        )
    return (
        <>
            {part}
        </>
    );
}