import NavItem from './NavItem'
import Avatar from '../static/avatar.png'

function Navbar() {
    return (
        <div className='navbar mt-5 flex flew-row justify-between items-center wrapper'>
            <div className='avatar'>
                <img src={Avatar} alt="jkbeattie.dev" />
            </div>
            <div className='links font-main font-light text-lg'>
                <NavItem href='/' title='Home' />
                <NavItem href='/about' title='About' />
                <NavItem href='/contact' title='Contact' />
                <NavItem href='/blog' title='Blog' />
            </div>
        </div>
    )
}

export default Navbar;