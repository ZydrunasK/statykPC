
import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { tableMaker } from '../../functions/tableMaker.jsx';
import s from './parts.module.css';

export function CPU() {
    const parts = [
        {
            id: 1,
            type: 'mobo',
            name: 'Gigabyte b550 ds3h',
            chipset: 'AMD b550',
            memory: 'DDR4',
            formFactor: 'micro ATX'
        },
        {
            id: 2,
            type: 'mobo',
            name: 'Asus b550M-K',
            chipset: 'AMD b550',
            memory: 'DDR4',
            formFactor: 'micro ATX'
        },
        {
            id: 3,
            type: 'mobo',
            name: 'Asrock b550M Steel legend',
            chipset: 'AMD b550',
            memory: 'DDR4',
            formFactor: 'micro ATX',
            bomb: 'yabadabadoooo'
        },
        {
            id: 4,
            type: 'mobo',
            name: 'Asrock b450M-HDV R4.0',
            chipset: 'AMD b450',
            memory: 'DDR4',
            formFactor: 'micro ATX',
            bomb: 't4'
        },
        {
            id: 5,
            type: 'mobo',
            name: 'MSI b550',
            chipset: 'AMD b550',
            memory: 'DDR4',
            formFactor: 'ATX',
        },
    ];
    const tableHead = ['name', 'chipset', 'formFactor', 'memory']; 
    
    return (
        <main className={s.main}>

            <ListFilter />

            <div className={s.partsList}>
                {tableMaker(tableHead, parts)}
            </div>
        </main>
    );
}