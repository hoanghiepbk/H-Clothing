import './checkout-item.scss';
import {useDispatch, useSelector} from 'react-redux';
import {addProductToCart,removeProductFromCart,clearProductFromCart} from '../../store/cart/cart.action';
import {selectCartList} from '../../store/cart/cart.selector';


const CheckoutItem = ({cartItem}) => {
  const {name, price, imageUrl, quantity} = cartItem;
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  const addItemHandler = ()=> dispatch(addProductToCart(cartList, cartItem));
  const removeItemHandler = ()=> dispatch(removeProductFromCart(cartList, cartItem));
  const clearItemHandler = ()=> dispatch(clearProductFromCart(cartList, cartItem));
  return(
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price} </span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem;
