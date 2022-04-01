import { NavLink } from 'react-router-dom'

interface NavItem {
    href: string,
    title: string
}

function NavItem(props:NavItem) {
    return (
        <NavLink
            to={(props.href)}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >{(props.title)}</NavLink>
    )
}

export default NavItem