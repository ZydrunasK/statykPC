
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { tableMaker } from '../../functions/tableMaker.jsx';
import s from './parts.module.css';

export function CPU() {
    const parts = [
        {
            id: 1,
            type: 'CPU',
            name: 'r5 5600',
            architecture: 'zen 3',
            coreClock: '3.5 GHz'
        },
        {
            id: 2,
            type: 'CPU',
            name: 'r7 7700x',
            architecture: 'zen 3',
            coreClock: '3.5 GHz'
        },
        {
            id: 3,
            type: 'CPU',
            name: 'i3 12100f',
            architecture: 'alder lake',
            coreClock: '3.5 GHz'
        },
        {
            id: 4,
            type: 'CPU',
            name: 'i5 13500',
            architecture: 'raptor lake',
            coreClock: '3.5 GHz'
        },
        {
            id: 5,
            type: 'CPU',
            name: 'r9 7950x',
            architecture: 'zen 4',
            coreClock: '3.5 GHz'
        },
    ];
    const tableHead = ['type', 'name', 'architecture', 'coreClock' ]
    
    return (
        <main className={s.main}>

            <ListFilter />

            <div className={s.partsList}>
                {tableMaker(tableHead, parts)}
            </div>
        </main>
    );
}