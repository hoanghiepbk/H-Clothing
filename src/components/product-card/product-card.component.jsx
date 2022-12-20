import './product-card.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
import Button from '../button/button.component';

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const {addProductToCart} = useContext(CartContext);
  const addToCart = () => {
    addProductToCart(product);
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
