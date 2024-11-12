import { useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { tableMaker } from '../../functions/tableMaker.jsx';
import s from './parts.module.css';

export function Cooler() {
    const parts = [
        {
            id: 1,
            part_type: 'mobo',
            part_name: 'Gigabyte b550 ds3h',
            chipset: 'AMD b550',
            memory: 'DDR4',
            formFactor: 'micro ATX'
        },
        {
            id: 2,
            part_type: 'mobo',
            part_name: 'Asus b550M-K',
            chipset: 'AMD b550',
            memory: 'DDR4',
            formFactor: 'micro ATX'
        },
        {
            id: 3,
            part_type: 'mobo',
            part_name: 'Asrock b550M Steel legend',
            chipset: 'AMD b550',
            memory: 'DDR4',
            formFactor: 'micro ATX',
            bomb: 'yabadabadoooo'
        },
        {
            id: 4,
            part_type: 'mobo',
            part_name: 'Asrock b450M-HDV R4.0',
            chipset: 'AMD b450',
            memory: 'DDR4',
            formFactor: 'micro ATX',
            bomb: 't4'
        },
        {
            id: 5,
            part_type: 'mobo',
            part_name: 'MSI b550',
            chipset: 'AMD b550',
            memory: 'DDR4',
            formFactor: 'ATX',
        },
    ];
    const [partsArr, setPartsArr] = useState(parts)
    const partInfo = ['part_name', 'chipset', 'form_factor', 'socket','memory_type', 'max_memory_speed']; 
    const head = ['name', 'chipset', 'form factor', 'socket', 'memory type', 'max memory speed']; 
    
    useEffect(() => {
        fetch('http://localhost:5123/api/Motherboard', {
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