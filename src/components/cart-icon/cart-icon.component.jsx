import './cart-icon.scss';
import { useContext } from 'react';
import {ReactComponent as ShoppingBar} from '../../assets/shopping-bag.svg';
import {CartContext} from '../../contexts/cart.context';

const CartIcon = () => {
  const { isShowDropdown, setIsShowDropdown , cartTotalCount } = useContext(CartContext);

  const toggleShowDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  }
  return (
    <div className='cart-icon-container' onClick={toggleShowDropdown}>
      <ShoppingBar className='shopping-icon'></ShoppingBar>
      <span className='item-count'>{cartTotalCount}</span>
    </div>
  )
}

export default CartIcon;
