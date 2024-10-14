import { Footer } from '../components/Footer.jsx';
import { Header } from '../components/Header.jsx';
import { Login } from '../components/login/Login.jsx';

export function Main() {
    return (
        <>
        <Header />
        <main className=''>
            <Login />
        </main>
        <Footer />
        </>
    );
}