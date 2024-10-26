import { Link } from 'react-router-dom';
import s from './partMenu.module.css';

export function PartMenu() {
    return (
        <>
        <div className={s.partMenuDiv}>
            <ul className={s.partMenu}>
                <li className={s.part}>
                    <Link to='/CPU' className={s.name}>Procesoriai</Link>
                </li>
                <li className={s.part}>
                    <Link to='/MotherBoard' className={s.name}>Motinine plokstes</Link>
                </li>
                <li className={s.part}>
                    <Link to='/MotherBoard' className={s.name}>Atmintis</Link>
                </li>
                <li className={s.part}>
                    <Link to='/MotherBoard' className={s.name}>vaizdo kortos</Link>
                </li>
                <li className={s.part}>
                    <Link to='/MotherBoard' className={s.name}>kietieji diskai</Link>
                </li>
            </ul>
        </div>
        </>
    );
}