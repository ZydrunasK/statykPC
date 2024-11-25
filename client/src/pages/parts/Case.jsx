import { useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { TableMaker } from '../../functions/TableMaker.jsx';
import s from './parts.module.css';

export function Case() {

    const [partsArr, setPartsArr] = useState()
    const partInfo = ['manufacturer', 'part_name', 'type','max_gpu_length', 'color']; 
    const head = ['Gamintojas', 'Pavadinimas', 'tipas', 'max gpu ilgis', 'spalva']; 
    
    useEffect(() => {
        fetch('http://localhost:5123/api/dalys/Korpusai', {
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