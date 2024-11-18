import { Link } from 'react-router-dom';
import s from './partMenu.module.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export function PartPopOutMenu() {
    const {visible, handleVisible} = useContext(UserContext);

    return (
        <>
        <div className={s.partMenuDiv} data-visible={visible}>
            <ul className={s.partMenu}>
                <li onClick={handleVisible} className={s.part}>
                    <Link to='/dalys/CPU' className={s.name}>Procesoriai</Link>
                </li>
                <li onClick={handleVisible} className={s.part}>
                    <Link to='/dalys/Ausintuvai' className={s.name}>Ausintuvai</Link>
                </li>
                <li onClick={handleVisible} className={s.part}>
                    <Link to='/dalys/Pagrindines-plokstes' className={s.name}>Pagrindines plokstes</Link>
                </li>
                <li onClick={handleVisible} className={s.part}>
                    <Link to='/dalys/Atmintis' className={s.name}>Atmintis (RAM)</Link>
                </li>
                <li onClick={handleVisible} className={s.part}>
                    <Link to='/dalys/GPU' className={s.name}>Vaizdo kortos</Link>
                </li>
                <li onClick={handleVisible} className={s.part}>
                    <Link to='/dalys/Kietieji-diskai' className={s.name}>Kietieji diskai</Link>
                </li>
                <li onClick={handleVisible} className={s.part}>
                    <Link to='/dalys/Maitinimo-blokai' className={s.name}>Maitinimo saltiniai</Link>
                </li>
                <li onClick={handleVisible} className={s.part}>
                    <Link to='/dalys/Korpusai' className={s.name}>Korpusas</Link>
                </li>
            </ul>
        </div>
        </>
    );
}