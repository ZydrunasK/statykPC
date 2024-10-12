import { Login } from '../login/Login';
import s from './main.module.css';

export function Main() {
    return (
        <main className={s.mainCont}>
            <Login />
        </main>
    );
}