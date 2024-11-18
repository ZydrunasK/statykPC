import { useNavigate } from 'react-router-dom';
import s from '../pages/pagesCSS/build.module.css';

export function BuildPartsList() {
    const navigate = useNavigate();

    const partTypeList = [
        'Procesorius',
        'Aušintuvas',
        'Pagrindine plokštė',
        'Atmintis (RAM)',
        'Kietasis diskas',
        'Vaizdo plokštė',
        'Maitinimo blokas',
        'Korpusas'
    ];
    const partTypePageList = [
        '/CPU',
        '/Cooler',
        '/MotherBoard',
        '/Memory',
        '/Storage',
        '/GPU',
        '/PSU',
        '/Case'
    ];

    const html = partTypeList.map((part, id) => <div key={id} className={s.partDiv}>
        <img src="#" alt="partPIC" />
        <p className={s.para}>{part}</p>
        <p className={s.para}>PART NAME</p>
        <button onClick={() => navigate(`/dalys${partTypePageList[id]}`)}>CHOOSE PART</button>
    </div>);
 
    return (
        <>
            {html}        
        </>
    )
}