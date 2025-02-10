import { NavLink } from 'react-router';
import { useCart } from '../../context/CartContext';
import './Cart.css';
import Like from '../../components/Like';
import GreenShop from '../../components/GreenShop';
import Delete from '../../assets/icon/delete.svg';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='cart'>
      <div className='container cart__container'>
        <div className='cart__content'>
          <NavLink className='cart__link' to='/'>Home</NavLink>
          <p>/</p>
          <NavLink className='cart__link' to='/shop'>Shop</NavLink>
          <p>/</p>
          <NavLink className='cart__link' to='/cart'>Shoping Cart</NavLink>
        </div>
        <div className='cart__container2'>
          <div className='cart__container3'>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul className='cart__list'>
                <div className='cart__content2'>
                  <h3 className='cart__title2'>Products</h3>
                  <div className='cart__item'>
                    <h3 className='cart__title2'>Price</h3>
                    <h3 className='cart__title2'>Quantity</h3>
                    <h3 className='cart__title2'>Total</h3>
                  </div>
                </div>
                {cartItems.map((item) => (
                  <li className='cart__item2' key={item.id}>
                    <div className='cart__block'>
                      <img className='cart__image' src={item.picture} alt={item.name} />
                      <div className='cart__block2'>
                        <h4 className='cart__name'>{item.name}</h4>
                        <p className='cart__sub-title'>SKU: 1995751877966</p>
                      </div>
                    </div>
                    <p className='cart__price'>${item.price}</p>
                    <div className='cart__button'>
                      <button
                        className='cart__btn'
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <p className='cart__add'>{item.quantity}</p>
                      <button
                        className='cart__btn'
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className='cart__item3'>
                      <p className='cart__price2'>${item.price * item.quantity}</p>
                      <button className='cart__btn2' onClick={() => removeFromCart(item.id)}>
                        <img src={Delete} alt="Delete" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className='cart__card'>
            <h2 className='cart__title'>Cart Totals</h2>
            <p className='cart__sub-title'>Coupon Apply</p>
            <div className='cart__form'>
              <input className='cart__input' type="text" placeholder='Enter coupon code here...' />
              <button className='cart__btn3'>Apply</button>
            </div>
            <div className='cart__checkout'>
              <h3 className='cart__sub-title'>Total</h3>
              <p className='cart__price2'>${calculateTotal()}</p>
            </div>
            <div>
              <button className='cart__btn4'>Proceed To Checkout</button>
            </div>
            <a className='cart__link4' href="">Continue Shopping</a>
          </div>
        </div>
        <Like />
        <GreenShop />
      </div>
    </div>
  );
};

export default Cart;
