
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { tableMaker } from '../../functions/tableMaker.jsx';
import s from './parts.module.css';

export function CPU() {
    const parts = [
        {
            id: 1,
            part_type: 'CPU',
            part_name: 'r5 5600',
            architecture: 'zen 3',
            coreClock: '3.5 GHz'
        },
        {
            id: 2,
            part_type: 'CPU',
            part_name: 'r7 7700x',
            architecture: 'zen 3',
            coreClock: '3.5 GHz'
        },
        {
            id: 3,
            part_type: 'CPU',
            part_name: 'i3 12100f',
            architecture: 'alder lake',
            coreClock: '3.5 GHz'
        },
        {
            id: 4,
            part_type: 'CPU',
            part_name: 'i5 13500',
            architecture: 'raptor lake',
            coreClock: '3.5 GHz'
        },
        {
            id: 5,
            part_type: 'CPU',
            part_name: 'r9 7950x',
            architecture: 'zen 4',
            coreClock: '3.5 GHz'
        },
    ];
    const partInfo = ['part_type', 'part_name', 'architecture', 'coreClock'];
    const headersArr = ['type', 'name', 'architecture', 'coreClock'];

    
    return (
        <main className={s.main}>

            <ListFilter />

            <div className={s.partsList}>
                {tableMaker(partInfo, parts, headersArr)}
            </div>
        </main>
    );
}