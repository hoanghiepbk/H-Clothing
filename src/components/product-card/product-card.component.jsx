import './product-card.scss';
import {useContext} from 'react';
import Button from '../button/button.component';
import {addProductToCart} from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartList } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const cartList = useSelector(selectCartList);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addProductToCart(cartList, product));
  }
  return(
    <div className='product-card-container'>
      <img src={imageUrl} alt="Product Image"/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard;
