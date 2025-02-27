import { Link } from 'react-router-dom';
import logo from '/src/assets/vite.svg';
import { HeaderNav } from '../HeaderNav';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


export function UserHeader() {
    const {logout, role} = useContext(UserContext);

    function handleLogout() {
        fetch('http://localhost:5123/api/logout', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                logout();
            }
        })
    }
    
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
                {role === 'admin' ? <Link to='/adminPanel' className='btn btn-primary'>admin panel</Link> : ''}
                <Link to='/profile' className='btn btn-primary'>Profile</Link>
                <Link onClick={handleLogout} to='/' className='btn btn-primary'>Log Out</Link>
            </div>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
            <HeaderNav />
        </div>
    </header>
    )
}