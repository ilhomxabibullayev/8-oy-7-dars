import { NavLink, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Shop.css'
import { useCart } from '../../context/CartContext';
import Like from '../../components/Like';
import GreenShop from '../../components/GreenShop';
import Like2 from '../../assets/icon/like.svg'
import Facebook from '../../assets/icon/facebook2.svg'
import Twitter from '../../assets/icon/twitter2.svg'
import Linkedin from '../../assets/icon/linkedin2.svg'
import Message from '../../assets/icon/message2.svg'

interface Product {
    id: number;
    name: string;
    price: number;
    pictures: string;
    description: string;
}

const Shop = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get<Product>(`https://www.e-commerce-api-v3.nt.azimumarov.uz/api/v1/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch product');
                setLoading(false);
                console.error(err);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            picture: product.pictures,
            quantity: 1,
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container shop__container">
            <div className='shop__content'>
                <NavLink className='shop__link' to='/'>Home</NavLink>
                <span>/</span>
                <NavLink className='shop__link' to='/shop'>Shop</NavLink>
            </div>
            <div className='shop__card'>
                <img src={product.pictures} alt={product.name} className="shop__image" />
                <div className='shop__block'>
                    <h2 className='shop__name'>{product.name}</h2>
                    <p className='shop__price'>${product.price}</p>
                    <span className='shop__span'></span>
                    <p className='shop__description'>Short Description:</p>
                    <p className='shop__text'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                    <p className='shop__size'>Size:</p>
                    <div className='shop__button'>
                        <button className='shop__btn'>S</button>
                        <button className='shop__btn'>M</button>
                        <button className='shop__btn'>L</button>
                        <button className='shop__btn'>XL</button>
                    </div>
                    <div className='shop__buttons'>
                        <div className='shop__button2'>
                            <button className='shop__btn2'>-</button>
                            <span>1</span>
                            <button className='shop__btn2'>+</button>
                        </div>
                        <div className='shop__button2'>
                            <button className='shop__btn3'>BUY NOW</button>
                            <button className='shop__btn3' onClick={handleAddToCart}>ADD TO CART</button>
                            <button className='shop__btn4'><img src={Like2} alt="" /></button>
                        </div>
                    </div>
                    <h3 className='shop__title'>SKU: <span>1995751877966</span></h3>
                    <h3 className='shop__title'>Categories: <span>Potter Plants</span></h3>
                    <h3 className='shop__title'>Tags: <span>Home, Garden, Plants</span></h3>
                    <div className='shop__block2'>
                        <h2 className='shop__description'>Share this products:</h2>
                        <div className='shop__content2'>
                            <img src={Facebook} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Linkedin} alt="" />
                            <img src={Message} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='shop__block2'>
                <a className='shop__link2' href="">Product Description</a>
                <a className='shop__link2' href="">Reviews (19)</a>
            </div>
            <div className='shop__descroptions'>
                <p className='shop__text2'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                <p className='shop__text2'>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                <p className='shop__descroption'>Living Room:</p>
                <p className='shop__text2'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='shop__descroption'>Dining Room:</p>
                <p className='shop__text2'>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
                <p className='shop__descroption'>Office:</p>
                <p className='shop__text2'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Like />
            <GreenShop />
        </div>
    );
};

export default Shop;
