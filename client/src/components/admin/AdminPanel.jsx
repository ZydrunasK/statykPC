import s from './adminPanel.module.css';
import { AdminSideBar } from './AdminSideBar.jsx';


export function AdminPanel() {
    return (
        <section className={s.adminPanel}>
            <AdminSideBar />
            <div>admin panel</div>
        </section>
    );
}