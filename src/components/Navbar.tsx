import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar mt-5 flex flew-row place-content-center'>
            <div className='links font-main font-light text-base'>
                <Link to='/' className='nav-link font-bold'>Home</Link>
                <Link to='/about' className='nav-link'>About</Link>
                <Link to='/contact' className='nav-link'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;