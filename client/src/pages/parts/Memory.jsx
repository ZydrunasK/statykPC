import { useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { tableMaker } from '../../functions/tableMaker.jsx';
import s from './parts.module.css';

export function Memory() {

    const [partsArr, setPartsArr] = useState('');
    const partInfo = ['part_name', 'form_factor', 'RAM_type','RAM_speed', 'CAS_latency', 'modules_amount']; 
    const head = ['Pavadinimas', 'Jungties lizdas', 'Tipas', 'Greitis', 'CAS', 'Moduliu kiekis']; 
    
    useEffect(() => {
        fetch('http://localhost:5123/api/dalys/Atmintis', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPartsArr(data)
        })
        .catch(error => console.error(error));
    }, [])

    return (
        <main className={s.main}>

            <ListFilter />

            <div className={s.partsList}>
                {tableMaker(partInfo, partsArr, head)}
            </div>
        </main>
    );
}