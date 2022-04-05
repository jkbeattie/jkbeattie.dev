import { FiLinkedin, FiCodepen, FiGithub } from 'react-icons/fi'

function Footer() {
    return (
        <section className="footer wrapper flex flex-row justify-between py-20">
            <div className="copyright text-gray-600">© 2022 Jayden Beattie</div>
            <div className="social-icons flex flex-row">
                <FiLinkedin className="social-icon" />
                <FiCodepen className='social-icon' />
                <FiGithub className='social-icon' />
            </div>
        </section>
    )
}

export default Footer