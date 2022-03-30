import Typical from 'react-typical'
import data from '../data/siteData'

function Hero() {
    return (
        <div className="hero flex flex-col place-content-center pl-24">
            <h1 className="text-5xl font-bold font-heading leading-tight">Hi, my name is <span className="text-blue-600">Jayden Beattie</span></h1>
            <h1 className="text-5xl font-bold font-heading leading-tight">I'm a <Typical
                steps={data.typical}
                loop={Infinity}
                wrapper='span'
                className='inline-block'
            /></h1>
        </div>
    )
}

export default Hero;