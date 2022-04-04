import { FaLaptop, FaCode, FaCodeBranch } from 'react-icons/fa'

function TechStackTable() {
    return (
        <div className="tech-stack-table grid grid-cols-3">
            <div className="tech-stack-column frontend">
                <FaLaptop className='tech-stack-icon' />
                <p className="font-heading font-bold text-lg mt-5">Front-End</p>
                <p className="font-main font-thin text-lg text-center mx-2 my-3">I prioritse designing and developing clean user interfaces that follow thoughtful design patterns to help my clients engage their audience.</p>
                <p className="font-main font-extralight text-lg text-center text-blue-600">Proficient in:</p>
                <ul className="skills font-main font-thin text-lg text-center">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript / TypeScript</li>
                    <li>React.js</li>
                    <li>Sass</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
            <div className="tech-stack-column bordered backend">
                <FaCode className='tech-stack-icon' />
                <p className='font-heading font-bold text-lg mt-5'>Back-End</p>
                <p className="font-main font-thin text-lg text-center mx-2 my-3">I place a large emphasis on developing secure, robust, scalable and maintainable back-end infrastructure for your website or application.</p>
                <p className="font-main font-extralight text-lg text-center text-blue-600">Skilled in:</p>
                <ul className="skills font-main font-thin text-lg text-center">
                    <li>Python</li>
                    <li>.NET Core (C#)</li>
                    <li>Flask / Django</li>
                    <li>Node.js</li>
                    <li>PostgreSQL / MySQL / MongoDB</li>
                    <li>REST APIs</li>
                </ul>
            </div>
            <div className="tech-stack-column devops">
                <FaCodeBranch className='tech-stack-icon' />
                <p className='font-heading font-bold text-lg mt-5'>DevOps</p>
                <p className="font-main font-thin text-lg text-center mx-2 my-3">I'm experienced using a range of tools to manage my applications which allows me to continually deliver high-quality software solutions.</p>
                <p className="font-main font-extralight text-lg text-center text-blue-600">Experienced in:</p>
                <ul className="skills font-main font-thin text-lg text-center">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Jenkins</li>
                    <li>Kubernetes</li>
                    <li>Terraform</li>
                    <li>AWS</li>
                </ul>
            </div>
        </div>
    )
}

export default TechStackTable