import s from './adminPanel.module.css';
import { AdminSideBar } from './AdminSideBar.jsx';


export function AdminAddParts() {
    return (
        <section className={s.adminPanel}>
            <AdminSideBar />
            <div>admin ADD panel</div>
        </section>
    );
}