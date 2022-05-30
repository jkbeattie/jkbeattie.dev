import Typical from 'react-typical'
import data from '../data/siteData'

import { Button } from './Button';

function Hero() {
    return (
        <section className="hero flex flex-col place-content-center wrapper">
            <h1 className="text-5xl font-bold font-heading leading-tight">Hi, my name is <span className="text-blue-600">Jayden Beattie</span></h1>
            <h1 className="text-5xl font-bold font-heading leading-tight">
                <Typical
                steps={
                    ['My portfolio is coming soon...', 3000, 'I am excited to share it with you!', 3000]
                }
                loop={Infinity}
                wrapper='span'
                className='inline-block'
                />
            </h1>
        </section>
    )
}

export default Hero;