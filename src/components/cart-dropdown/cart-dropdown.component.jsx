import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartList } from '../../store/cart/cart.selector';

const CartDropdown = () => {
  const cartList = useSelector(selectCartList);
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
