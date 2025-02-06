import './Blog.css'
import Flower4 from '../../assets/image/flower4.png'
import Flower5 from '../../assets/image/flower5.png'
import Flower6 from '../../assets/image/flower6.png'
import Flower7 from '../../assets/image/flower7.png'
import Icon2 from '../../assets/icon/icon2.svg'

const Blog = () => {
    return (
        <section className='blog'>
            <div className='container blog__container'>
                <h2 className='blog__title'>Our Blog Posts</h2>
                <p className='blog__text'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                <div className='blog__content'>
                    <div className='blog__card'>
                        <img className='blog__image' src={Flower4} alt="" />
                        <p className='blog__calendar'>September 12  I Read in 6 minutes</p>
                        <h3 className='blog__sub-title'>Cactus & Succulent
                            Care Tips</h3>
                        <p className='blog__sub-text'>Cacti are succulents are easy care plants for any home or patio. </p>
                        <a className='blog__link' href="">Read More <img src={Icon2} alt="" /></a>
                    </div>
                    <div className='blog__card'>
                        <img className='blog__image' src={Flower5} alt="" />
                        <p className='blog__calendar'>September 13  I Read in 2 minutes</p>
                        <h3 className='blog__sub-title'>Top 10 Succulents for
                            Your Home</h3>
                        <p className='blog__sub-text'>Cacti are succulents are easy care plants for any home or patio. </p>
                        <a className='blog__link' href="">Read More <img src={Icon2} alt="" /></a>
                    </div>
                    <div className='blog__card'>
                        <img className='blog__image' src={Flower6} alt="" />
                        <p className='blog__calendar'>September 15  I Read in 3 minutes</p>
                        <h3 className='blog__sub-title'>Cacti & Succulent
                            Care Tips</h3>
                        <p className='blog__sub-text'>Cacti are succulents are easy care plants for any home or patio. </p>
                        <a className='blog__link' href="">Read More <img src={Icon2} alt="" /></a>
                    </div>
                    <div className='blog__card'>
                        <img className='blog__image' src={Flower7} alt="" />
                        <p className='blog__calendar'>September 15  I Read in 2 minutes</p>
                        <h3 className='blog__sub-title'>Best Houseplants
                            Room by Room</h3>
                        <p className='blog__sub-text'>Cacti are succulents are easy care plants for any home or patio. </p>
                        <a className='blog__link' href="">Read More <img src={Icon2} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
