import './Hero.css'
import Flower from '../../assets/image/flower.png'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <h3 className="hero__sub-title">WELCOME TO GREENSHOP</h3>
                    <h2 className="hero__title">LET’S MAKE A
                        BERTER <span className='hero__title-span'>PLANET</span></h2>
                    <p className="hero__text">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <button className="hero__btn">SHOP NOW</button>
                </div>
                <img className='hero__image' src={Flower} alt="" />
            </div>
        </section>
    )
}

export default Hero
