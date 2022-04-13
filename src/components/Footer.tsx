import { FiLinkedin, FiCodepen, FiGithub } from 'react-icons/fi'

function Footer() {
    return (
        <section className="footer wrapper flex flex-row justify-between py-20">
            <div className="copyright text-gray-600">© 2022 Jayden Beattie</div>
            <div className="social-icons flex flex-row">
                <a href='https://www.linkedin.com/in/jkbeattie'><FiLinkedin className="social-icon" /></a>
                <a href='https://codepen.io/jkbeattie'><FiCodepen className='social-icon' /></a>
                <a href='https://github.com/jkbeattie'><FiGithub className='social-icon' /></a>
            </div>
        </section>
    )
}

export default Footer