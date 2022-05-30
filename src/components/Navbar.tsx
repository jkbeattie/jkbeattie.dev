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
            </div>
        </div>
    )
}

export default Navbar;