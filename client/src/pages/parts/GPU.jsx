import { useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { TableMaker } from '../../functions/TableMakers.jsx';
import s from './parts.module.css';

export function GPU() {

    const [partsArr, setPartsArr] = useState('');
    const partInfo = ['manufacturer', 'part_name', 'chipset', 'memory','memory_type', 'power_connectors']; 
    const head = ['Gamintojas', 'Pavadinimas', 'chipset', 'Atmintis', 'Atminties tipas', 'Maitinimo jungtys']; 
    
    useEffect(() => {
        fetch('http://localhost:5123/api/dalys/Vaizdo-plokstes', {
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
                {TableMaker(partInfo, partsArr, head)}
            </div>
        </main>
    );
}