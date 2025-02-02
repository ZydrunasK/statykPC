import { Link } from 'react-router-dom';
import logo from '/src/assets/vite.svg';
import { HeaderNav } from '../HeaderNav.jsx';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';


export function PublicHeader() {

    const {role} = useContext(UserContext);
    return (
            <header >

                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mt-2">
                    <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={logo} alt="Logo" />
                        {role}
                    </Link>

                    <form role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>

                    <div className='text-end'>
                    <Link to='/register' className='btn btn-secondary'>Register</Link>
                    <Link to='/login' className='btn btn-primary'>Log In</Link>
                    </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
                    <HeaderNav />
                </div>
            </header>
    )
}