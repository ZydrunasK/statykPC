import { MenuLink } from './MenuLink.jsx';

export function HeaderNav() {
    return (
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <MenuLink href='/' title='Pagrindinis' />
            <MenuLink href='/faq' title='DUK' />
            <MenuLink href='/about-us' title='Apie mus' />
            <MenuLink href='/feed' title='FEED' />
        </ul>
    );
}