import './Flower.css'
import Flower2 from '../../assets/image/flower2.png'
import Flower3 from '../../assets/image/flower3.png'
import Icon from '../../assets/icon/icon.svg'

const Flower = () => {
    return (
        <section className='flower'>
            <div className='container flower__container'>
                <div className='flower__card'>
                    <img className='flower__image' src={Flower2} alt="" />
                    <div className='flower__content'>
                        <h3 className='flower__sub-title'>SUMMER CACTUS
                            & SUCCULENTS</h3>
                        <p className='flower__text'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                        <button className='flower__btn'>Find More <img src={Icon} alt="" /></button>
                    </div>
                </div>
                <div className='flower__card'>
                    <img className='flower__image' src={Flower3} alt="" />
                    <div className='flower__content'>
                        <h3 className='flower__sub-title'>STYLING TRENDS
                            & MUCH MORE</h3>
                        <p className='flower__text'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                        <button className='flower__btn'>Find More <img src={Icon} alt="" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Flower
