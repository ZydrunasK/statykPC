import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { PublicHeader } from './PublicHeader';
import { UserHeader } from './UserHeader';


export function Header() {
    const {isLoggedIn} = useContext(UserContext)
    return (
        <div className="container">
            {!isLoggedIn && <PublicHeader />}
            {isLoggedIn && <UserHeader />}
        </div>
    )
}