import { Link } from 'react-router-dom';
import s from './adminPanel.module.css';

export function AdminSideBar() {
    return (
        <>
            <section className={s.sideBar}>
                <ul className={s.sideBar}>
                    <li className={s.sideBarTitle}>HOME</li>
                    <li className={s.sideBarNav}>
                        <Link to='/adminPanel'>Main</Link>
                    </li>
                    <li className={s.sideBarTitle}>PARTS</li>
                    <li className={s.sideBarNav}>
                        <Link to='/adminAllParts'>ALL PARTS</Link>
                    </li>
                    <li className={s.sideBarNav}>
                        <Link to='/adminAddParts'>ADD PARTS</Link>
                    </li>
                </ul>
            </section>
        </>
    );
}