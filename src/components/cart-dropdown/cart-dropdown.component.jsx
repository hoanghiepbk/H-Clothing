import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item.component';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const {cartList} = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutPage = () => navigate('/checkout');
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
      {cartList.length ? (
           cartList.map((cartItem) => {
             return(
               <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
             )
           })
         ) : (
           <span className='empty-message'>Your cart is empty</span>
         )
       }
      </div>
      <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;
