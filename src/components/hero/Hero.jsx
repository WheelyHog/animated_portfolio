import './hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="textContainer">
                <h2>SERGII GUTSULIAK</h2>
                <h1>React Web Developer</h1>
                <div className="buttons">
                    <button>See The Latest Works</button>
                    <button>Contact Me</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
