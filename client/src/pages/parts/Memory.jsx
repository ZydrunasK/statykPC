import { ListFilter } from '../../components/listFilter/ListFilter.jsx';
import { tableMaker } from '../../functions/tableMaker.jsx';
import s from './parts.module.css';

export function Memory() {
    
    return (
        <main className={s.main}>

            <ListFilter />

            <div className={s.partsList}>
                {tableMaker()}
            </div>
        </main>
    );
}