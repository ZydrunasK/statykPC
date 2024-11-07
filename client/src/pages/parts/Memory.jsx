import { useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { tableMaker } from '../../functions/tableMaker.jsx';
import s from './parts.module.css';

export function Memory() {
    const [partArr, setPartArr] = useState(null)
    const partInfoArr = ['part_name', 'RAM_type', 'RAM_speed', 'modules_amount', 'CAS_latency'];
    const headers = ['name', 'type', 'speed', 'modules amount', 'CAS latency'];
    useEffect (() => {
        fetch('http://localhost:5123/api/Memory', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        }) 
            .then(res => res.json())
            .then(data => {
                setPartArr(data);
            })
            .catch(error => console.log('error: ' + error));
    }, [])
    
    

    return (
        <main className={s.main}>

            <ListFilter />

            <div className={s.partsList}>
                {tableMaker(partInfoArr, partArr, headers)}
            </div>
        </main>
    );
}