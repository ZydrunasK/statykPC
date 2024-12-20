import s from '../../pages/pagesCSS/build.module.css';
import { useNavigate } from 'react-router-dom';
import { PartNameTd } from './PartNameTd';
import { useContext } from 'react';
import { BuildContext } from '../../context/BuildContext';

export function Storage_tr() {

    const navigate = useNavigate();
    const {build} = useContext(BuildContext);

    let list = [<tr className={s.tr} key={354}>
        <td  className={s.td}><img src="#" alt="partPIC" /></td>
        <td  className={s.td}>Kietasis diskas</td>
        <PartNameTd partType={'kietiejiDiskai'} partNum={0} />
        <td  className={s.td}>
            <button onClick={() => navigate(`/dalys/Kietieji-diskai`)}>CHOOSE PART</button>
        </td>
     </tr>];


       for (let i = 0; i < build.kietiejiDiskai.length; i++) {
        list = list.push(<tr className={s.tr} key={i + 354}>
                    <td  className={s.td}><img src="#" alt="partPIC" /></td>
                    <td  className={s.td}>Kietasis diskas</td>
                    <PartNameTd partType={'kietiejiDiskai'} partNum={i + 1} />
                    <td  className={s.td}>
                        <button onClick={() => navigate(`/dalys/Kietieji-diskai`)}>CHOOSE PART</button>
                    </td>
                 </tr>);  
       }    

    console.log("list length: ", build.kietiejiDiskai.length);
    console.log("list: ", list);
    
    return (
        <>
            {list}
        </>
    );
}