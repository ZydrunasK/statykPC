import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { PublicHeader } from './PublicHeader';
import { UserHeader } from './UserHeader';


export function Header() {
    const {isLoggedIn} = useContext(GlobalContext)
    return (
        <div className="container">
            {!isLoggedIn && <PublicHeader />}
            {isLoggedIn && <UserHeader />}
        </div>
    )
}