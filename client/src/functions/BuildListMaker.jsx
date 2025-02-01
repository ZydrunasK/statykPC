import { useNavigate } from 'react-router-dom';
import { PartNameTd } from '../components/buildPartsList/PartNameTd.jsx';
import s from '../pages/pagesCSS/build.module.css';
import { useContext } from 'react';
import { BuildContext } from '../context/BuildContext.jsx';

export function BuildListMaker(partType, nav) {

    const navigate = useNavigate();
    const {build, removePart} = useContext(BuildContext)
    
    let part = [];
    
    if (Array.isArray(build[partType])
        && build[partType].length > 0) {
            for (let i = 0; i < build[partType].length; i++) {
                part.push(
                    <tr className={s.tr} key={i * Math.random()}>
                    <td className={s.td}><img src="#" alt="partPIC" /></td>
                    <PartNameTd partType={partType} partNum={i}/>
                    <td className={s.td}> 
                        <button onClick={() => removePart(partType, i)}>REMOVE PART</button>
                    </td>
                </tr>)
            }
            } else {
                 part = (                    
                    <tr className={s.tr}>
                        <td className={s.td}><img src="#" alt="partPIC" /></td>
                        <PartNameTd partType={partType}/>
                        <td className={s.td}> 
                            <button onClick={() => removePart(partType)}>REMOVE PART</button>
                        </td>
                    </tr>
            )
    }

    return (
        <>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th>{partType}</th>
                        <th> 
                            <button onClick={() => navigate(`/dalys/${nav}`)}>CHOOSE PART</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {part}
                </tbody>
            </table>
        </>
    );
}