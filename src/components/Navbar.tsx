import NavItem from './NavItem'
import Avatar from '../static/avatar.png'

function Navbar() {
    return (
        <div className='navbar mt-5 flex flew-row justify-between items-center'>
            <div className='avatar'>
                <img src={Avatar} alt="jkbeattie.dev" />
            </div>
            <div className='links font-main font-light text-base'>
                <NavItem href='/' title='Home' />
                <NavItem href='/about' title='About' />
                <NavItem href='/contact' title='Contact' />
            </div>
        </div>
    )
}

export default Navbar;