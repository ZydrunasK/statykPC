
import { useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { TableMaker } from '../../functions/TableMakers.jsx';
import s from './parts.module.css';

export function CPU() {

    const [partsArr, setPartsArr] = useState('')
    const partInfo = ['manufacturer', 'part_name', 'socket', 'core_clock', 'boost_clock', 'TDP'];
    const headersArr = ['Gamintojas', 'Pavadinimas', 'Lizdas', 'Branduoliu daznis', 'Boost daznis', 'TDP'];

    useEffect(() => {
        fetch('http://localhost:5123/api/dalys/CPU', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        })
        .then(res => res.json())
        .then(data => {
            setPartsArr(data)
        })
        .catch(error => console.error(error));
    }, [])

    
    
    return (
        <main className={s.main}>

            <ListFilter />

            <div className={s.partsList}>
                {TableMaker(partInfo, partsArr, headersArr)}
            </div>
        </main>
    );
}
