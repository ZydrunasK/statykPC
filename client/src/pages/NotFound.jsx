import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/headers/Header.jsx";

export function NotFound() {
    return (
        <>
        <Header />
        <main className=''>
            <h1>404 Page Not Found</h1>
        </main>
        <Footer />
        </>
    );
}