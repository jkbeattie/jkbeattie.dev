import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar flex flew-row place-content-center'>
            <div className="links">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;