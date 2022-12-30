import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.scss';
import {ReactComponent as Icon } from "../../assets/icon.svg";
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {useSelector} from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsShowDropdown } from '../../store/cart/cart.selector';

const Navigation = () => {
  // const {currentUser} = useContext(UserContext);
  const isShowDropdown = useSelector(selectIsShowDropdown);

  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <Icon></Icon>
        </Link>
        <div className='nav-links-container'>
        {currentUser && <span>{currentUser.email}</span>}
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
