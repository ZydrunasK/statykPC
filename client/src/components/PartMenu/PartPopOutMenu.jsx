import { Link } from 'react-router-dom';
import s from './partMenu.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export function PartPopOutMenu() {
    const {visible} = useContext(GlobalContext);

    return (
        <>
        <div className={s.partMenuDiv} data-visible={visible}>
            <ul className={s.partMenu}>
                <li className={s.part}>
                    <Link to='/CPU' className={s.name}>Procesoriai</Link>
                </li>
                <li className={s.part}>
                    <Link to='/MotherBoard' className={s.name}>Pagrindines plokstes</Link>
                </li>
                <li className={s.part}>
                    <Link to='/Memory' className={s.name}>Atmintis (RAM)</Link>
                </li>
                <li className={s.part}>
                    <Link to='/GPU' className={s.name}>Vaizdo kortos</Link>
                </li>
                <li className={s.part}>
                    <Link to='/Storage' className={s.name}>Kietieji diskai</Link>
                </li>
                <li className={s.part}>
                    <Link to='/Cooler' className={s.name}>Ausintuvai</Link>
                </li>
                <li className={s.part}>
                    <Link to='/PSU' className={s.name}>Maitinimo saltiniai</Link>
                </li>
            </ul>
        </div>
        </>
    );
}