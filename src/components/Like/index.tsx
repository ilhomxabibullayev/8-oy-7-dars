import './Like.css'
import Flowers from '../../assets/icon/flower.svg'
import Flowers2 from '../../assets/icon/flower2.svg'

const Like = () => {
    return (
        <section className='like'>
            <div className='container like__container'>
                <div className='like__card'>
                    <div className='like__round'>
                        <img className='like__image' src={Flowers} alt="" />
                    </div>
                    <h3 className='like__title'>Garden Care</h3>
                    <p className='like__text'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className='like__card'>
                    <div className='like__round'>
                        <img className='like__image' src={Flowers} alt="" />
                    </div>
                    <h3 className='like__title'>Plant Renovation</h3>
                    <p className='like__text'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className='like__card'>
                    <div className='like__round'>
                        <img className='like__image' src={Flowers2} alt="" />
                    </div>
                    <h3 className='like__title'>Watering Graden</h3>
                    <p className='like__text'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className='like__card'>
                    <h3 className='like__sub-title'>Would you like to join newsletters?</h3>
                    <input className='like__input' type="text" placeholder='enter your email address...' />
                    <button className='like__btn'>Join</button>
                    <p className='like__text'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
            </div>
        </section>
    )
}

export default Like
