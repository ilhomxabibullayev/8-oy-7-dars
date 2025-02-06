import { NavLink } from "react-router"
import './Navbar.css'
import Logo from '../../assets/icon/logo.svg'
import Search from '../../assets/icon/search.svg'
import Cart from '../../assets/icon/cart.svg'
import Logout from '../../assets/icon/logout.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbar__container">
        <div className="navbar__content">
          <img className="navbar__logo" src={Logo} alt="" />
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink className='navbar__link' to=''>Home</NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className='navbar__link' to='/shop'>Shop</NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className='navbar__link' to='/plantCare'>Plant Care</NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className='navbar__link' to='/blogs'>Blogs</NavLink>
            </li>
          </ul>
          <div className="navbar__icon">
            <img src={Search} alt="" />
            <NavLink to='/cart'><img src={Cart} alt="" /></NavLink>
            <NavLink to='/login'><button className="navbar__btn"><img src={Logout} alt="" />Login</button></NavLink>
          </div>
        </div>
        <span className="navbar__span"></span>
      </div>
    </div>
  )
}

export default Navbar
