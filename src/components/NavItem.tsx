import { NavLink } from 'react-router-dom'

type NavItemProps = {
    href: string,
    title: string
}

function NavItem(props:NavItemProps) {
    return (
        <NavLink
            to={(props.href)}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >{(props.title)}</NavLink>
    )
}

export default NavItem