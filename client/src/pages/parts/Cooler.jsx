import { useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { TableMaker } from '../../functions/TableMakers.jsx';
import s from './parts.module.css';

export function Cooler() {
    const [partsArr, setPartsArr] = useState('')
    const partInfo = ['manufacturer', 'part_name', 'noise_level', 'cpu_socket','fan_rpm', 'height']; 
    const head = ['Gamintojas', 'Pavadinimas', 'garso lygis', 'CPU', 'RPM', 'aukstis']; 

    useEffect(() => {
        fetch('http://localhost:5123/api/dalys/Ausintuvai', {
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