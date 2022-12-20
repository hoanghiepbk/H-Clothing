import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.scss';
import {ReactComponent as Icon } from "../../assets/icon.svg";
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isShowDropdown} = useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <Icon></Icon>
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>
          {currentUser ?
            (
              <Link onClick={signOutUser} className='nav-link'>
                SIGN OUT
              </Link>
            )
            :
            (
              <Link to='/auth' className='nav-link'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon></CartIcon>
        </div>
        {isShowDropdown && <CartDropdown></CartDropdown>}
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;
