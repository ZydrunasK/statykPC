import { Link } from 'react-router-dom';
import logo from '/src/assets/vite.svg';
import { HeaderNav } from '../HeaderNav';


export function PublicHeader() {

    return (
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

                <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={logo} alt="Logo" />
                </Link>

                <HeaderNav />

                <div className='text-end'>
                <Link to='/login' className='btn btn-primary'>Log In</Link>
                <Link to='/register' className='btn btn-secondary'>Register</Link>
                </div>
            </header>
    )
}