import { useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { tableMaker } from '../../functions/tableMaker.jsx';
import s from './parts.module.css';

export function Storage() {

    const [partsArr, setPartsArr] = useState('');
    const partInfo = ['manufacturer', 'part_name', 'type', 'capacity', 'form_factor', 'interface']; 
    const head = ['Gamintojas', 'Pavadinimas', 'Tipas', 'Talpa', 'Forma', 'jungtis']; 
    
    useEffect(() => {
        fetch('http://localhost:5123/api/dalys/Kietieji-diskai', {
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