
import { useContext, useEffect, useState } from 'react';
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { TableMaker } from '../../functions/TableMaker.jsx';
import s from './parts.module.css';
import { useNavigate } from 'react-router-dom';
import { BuildContext } from '../../context/BuildContext.jsx';

export function CPU() {

    
    const {selectPart} = useContext(BuildContext)
    const navigate = useNavigate();

    function handleSelect(event, part) {
        event.preventDefault();
        selectPart(part);
        console.log(part);
        navigate('/build');
    }

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
                {TableMaker(partInfo, partsArr, headersArr, handleSelect)}
            </div>
        </main>
    );
}
