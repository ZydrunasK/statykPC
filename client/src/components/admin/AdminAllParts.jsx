import { useEffect, useState } from 'react';
import s from './adminPanel.module.css';
import { AdminSideBar } from './AdminSideBar.jsx';
import { TableMaker } from '../../functions/TableMaker.jsx';


export function AdminAllParts() {

    const [parts, setParts] = useState();

    useEffect(() => {
        fetch(`http://localhost:5123/api/dalys/Vaizdo-plokstes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {setParts(data)})
        .catch(error => console.error(error));
    }, []);
    let partsInfoArr = [];

    if (Array.isArray(parts)) {
        partsInfoArr = Object.keys(parts[0]);
    }

    return (
        <section className={s.adminPanel}>
            <AdminSideBar />
            {TableMaker(partsInfoArr, parts)}
        </section>
    );
}