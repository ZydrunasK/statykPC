import { useContext } from 'react';
import { MenuLink } from './MenuLink.jsx';
import { PartPopOutMenu } from './PartMenu/PartPopOutMenu.jsx';
import { GlobalContext } from '../context/GlobalContext.jsx';

export function HeaderNav() {
    const {handleVisible} = useContext(GlobalContext);
    return (
        <div className='headerNavDiv'>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center align-items-center mb-md-0">
                <MenuLink href='/build' title='statyk' />
                <p onClick={handleVisible} className='linkDalys'>Dalys</p>
                <MenuLink href='/faq' title='DUK' />
                <MenuLink href='/forum' title='forum' />
            </ul>
            <PartPopOutMenu />
        </div>
    );
}