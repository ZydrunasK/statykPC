import { MenuLink } from './MenuLink.jsx';

export function HeaderNav() {
    return (
        <div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <MenuLink href='/build' title='statyk' />
                <MenuLink href='/parts' title='dalys' />
                <MenuLink href='/faq' title='DUK' />
                <MenuLink href='/forum' title='forum' />
            </ul>
            
        </div>
    );
}