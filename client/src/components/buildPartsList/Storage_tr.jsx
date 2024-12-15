import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';
import { PartNameTd } from './PartNameTd';
import { useContext } from 'react';
import { BuildContext } from '../../context/BuildContext';

export function Storage_tr() {

    const navigate = useNavigate();
    const {build} = useContext(BuildContext);

    let list = <tr className={s.tr}>
            <td  className={s.td}><img src="#" alt="partPIC" /></td>
            <td  className={s.td}>Kietasis diskas</td>
            <PartNameTd partType={'kietiejiDiskai'} partNum={0} />
            <td  className={s.td}>
                <button onClick={() => navigate(`/dalys/Kietieji-diskai`)}>CHOOSE PART</button>
            </td>
        </tr>;

    if (build.kietiejiDiskai.length !== 0) {
        list = build.kietiejiDiskai.map((part, index) => 
            {<tr className={s.tr}>
                <td  className={s.td}><img src="#" alt="partPIC" /></td>
                <td  className={s.td}>Kietasis diskas</td>
                <PartNameTd partType={'kietiejiDiskai'} partNum={index} />
                <td  className={s.td}>
                    <button onClick={() => navigate(`/dalys/Kietieji-diskai`)}>CHOOSE PART</button>
                </td>
            </tr>
           }).join('');
    }
    console.log("list: ", build.kietiejiDiskai);
    
    return (
        <>
            {list}
        </>
    );
}