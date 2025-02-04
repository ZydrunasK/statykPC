import { AdminSideBar } from "../components/admin/AdminSideBar.jsx";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/headers/Header.jsx";
import { Outlet } from 'react-router-dom';

export function AdminLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}