import { MenuLink } from './MenuLink.jsx';
import { PartMenu } from './PartMenu/PartMenu.jsx';

export function HeaderNav() {
    return (
        <div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center align-items-center mb-md-0">
                <MenuLink href='/build' title='statyk' />
                <p className='linkDalys'>Dalys</p>
                <MenuLink href='/faq' title='DUK' />
                <MenuLink href='/forum' title='forum' />
            </ul>
            <PartMenu />
        </div>
    );
}