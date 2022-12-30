import './checkout.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {useSelector} from 'react-redux';
import {selectCartList, selectCartTotal} from '../../store/cart/cart.selector';
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartList = useSelector(selectCartList);
  const cartTotal = useSelector(selectCartTotal);
  return(
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartList.map((cartItem)=>{
        return(
          <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        )
      })}
      <div className='total'>TOTAL: ${cartTotal}</div>
      <PaymentForm />
    </div>
  )
}

export default Checkout;
