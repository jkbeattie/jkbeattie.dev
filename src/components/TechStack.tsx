import TechStackTable from "./TechStackTable"

function TechStack() {
    return (
        <div className="tech-stack flex flex-col items-center">
            <h1 className="text-3xl font-bold font-heading">My Technology Stack</h1>
            <p className="text-lg font-light font-main">As a software engineer, I believe flexibility and adaptability is key -- therefore, I use a range of tools and technologies to build software solutions.</p>
            <TechStackTable />
        </div>
    )
}

export default TechStack