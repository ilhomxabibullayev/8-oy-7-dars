import './GreenShop.css'
import Logo from '../../assets/icon/logo.svg'
import Location from '../../assets/icon/location.svg'
import Message from '../../assets/icon/message.svg'
import Phone from '../../assets/icon/phone.svg'

const GreenShop = () => {
    return (
        <section className='greenshop'>
            <div className='container greenshop__container'>
                <img src={Logo} alt="" />
                <div className='greenshop__block'>
                    <img src={Location} alt="" />
                    <p className='greenshop__text'>70 West Buckingham Ave.
                        Farmingdale, NY 11735</p>
                </div>
                <div className='greenshop__block'>
                    <img src={Message} alt="" />
                    <p className='greenshop__text'>contact@greenshop.com</p>
                </div>
                <div className='greenshop__block'>
                    <img src={Phone} alt="" />
                    <p className='greenshop__text'>+88 01911 717 490</p>
                </div>
            </div>
        </section>
    )
}

export default GreenShop
