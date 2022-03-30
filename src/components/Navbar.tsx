import NavItem from './NavItem'

function Navbar() {
    return (
        <div className='navbar mt-5 flex flew-row place-content-center'>
            <div className='links font-main font-light text-base'>
                <NavItem href='/' title='Home' />
                <NavItem href='/about' title='About' />
                <NavItem href='/contact' title='Contact' />
            </div>
        </div>
    )
}

export default Navbar;