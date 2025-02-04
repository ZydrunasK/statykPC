import s from './adminPanel.module.css';
import { AdminSideBar } from './AdminSideBar.jsx';


export function AdminAllParts() {
    return (
        <section className={s.adminPanel}>
            <AdminSideBar />
            <div>admin ALL panel</div>
        </section>
    );
}