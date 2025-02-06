import { NavLink } from "react-router"
import './Footer.css'
import Facebook from '../../assets/icon/facebook.svg'
import Instagram from '../../assets/icon/instagram.svg'
import Twitter from '../../assets/icon/twitter.svg'
import Linkedin from '../../assets/icon/linkedin.svg'
import Union from '../../assets/icon/union.svg'
import Visa from '../../assets/image/visa.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__content">
          <ul className="footer__list">
            <h3 className="footer__sub-title">My Account</h3>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>My Account</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Our stores</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Contact us</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Career</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Specials</NavLink>
            </li>
          </ul>
          <ul className="footer__list">
            <h3 className="footer__sub-title">Help & Guide</h3>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Help Center</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>How to Buy</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Shipping & Delivery</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Product Policy</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>How to Return</NavLink>
            </li>
          </ul>
          <ul className="footer__list">
            <h3 className="footer__sub-title">Categories</h3>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>House Plants</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Potter Plants</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Seeds</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Small Plants</NavLink>
            </li>
            <li className="footer__item">
              <NavLink className='footer__link' to=''>Accessories</NavLink>
            </li>
          </ul>
          <div className="footer__block">
            <h3 className="footer__sub-title">Social Media</h3>
            <div className="footer__icon">
              <a href=""><img className="footer__icon-image" src={Facebook} alt="" /></a>
              <a href=""><img className="footer__icon-image" src={Instagram} alt="" /></a>
              <a href=""><img className="footer__icon-image" src={Twitter} alt="" /></a>
              <a href=""><img className="footer__icon-image" src={Linkedin} alt="" /></a>
              <a href=""><img className="footer__icon-image" src={Union} alt="" /></a>
            </div>
            <h3 className="footer__sub-title">We accept</h3>
            <img className="footer__image" src={Visa} alt="" />
          </div>
        </div>
        <span className="footer__span"></span>
        <p className="footer__text">© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
