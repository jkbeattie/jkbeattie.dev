import TechStackTable from "./TechStackTable"

function TechStack() {
    return (
        <div className="tech-stack flex flex-col items-center">
            <h1 className="text-3xl font-bold font-heading leading-loose">My Technology Stack</h1>
            <p className="text-lg font-thin font-main leading-loose">I write clean and organised code, with a passion for helping my clients achieve their goals.</p>
            <p className="text-lg font-thin font-main leading-loose">When it comes to delivering high-quality software solutions, I use a range of tools and technologies to meet my clients needs.</p>
            <TechStackTable />
        </div>
    )
}

export default TechStack