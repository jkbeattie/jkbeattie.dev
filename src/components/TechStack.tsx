import TechStackTable from "./TechStackTable"

function TechStack() {
    return (
        <div className="tech-stack my-20">
            <div className="tech-stack-text py-20 text-center full-bleed bg-blue-600 text-white">
                <div className="wrapper">
                    <h1 className="text-4xl font-bold font-heading leading-loose">My Technology Stack</h1>
                    <p className="text-xl font-light font-main leading-loose">I write clean and organised code, with a passion for helping my clients achieve their goals.</p>
                    <p className="text-xl font-light font-main leading-loose">When it comes to delivering high-quality software solutions, I use a range of tools and technologies to meet my clients needs.</p>
                </div>
            </div>
            <div className="wrapper my-20">
                <TechStackTable />
            </div>
        </div>
    )
}

export default TechStack