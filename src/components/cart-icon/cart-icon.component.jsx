import './cart-icon.scss';
import { useContext } from 'react';
import {ReactComponent as ShoppingBar} from '../../assets/shopping-bag.svg';
import {setIsShowDropdown} from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotalCount } from '../../store/cart/cart.selector';
import { selectIsShowDropdown } from '../../store/cart/cart.selector';

const CartIcon = () => {

  const cartTotalCount = useSelector(selectCartTotalCount);

  const isShowDropdown = useSelector(selectIsShowDropdown);

  const dispatch = useDispatch();

  const toggleShowDropdown = () => {
    dispatch(setIsShowDropdown(!isShowDropdown));
  }
  return (
    <div className='cart-icon-container' onClick={toggleShowDropdown}>
      <ShoppingBar className='shopping-icon'></ShoppingBar>
      <span className='item-count'>{cartTotalCount}</span>
    </div>
  )
}

export default CartIcon;
