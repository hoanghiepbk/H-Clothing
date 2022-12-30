import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsShowDropdown = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_SHOW_DROP_DOWN, boolean);

const addProduct = (cartList, productAdded) => {
  const productInCart = cartList.find((product) => {
    return product.id === productAdded.id
  });

  if(productInCart) {
    return cartList.map((product) => {
        return product.id === productAdded.id ? {...product, quantity : product.quantity + 1} : product
      });
  }
  return [...cartList, {...productAdded, quantity: 1 } ];
};

const removeProduct = (cartList, productRemoved) => {
  const productInCart = cartList.find((product) => {
    return product.id === productRemoved.id
  });

  if(productInCart.quantity > 1) {
    return cartList.map((product) => {
        return product.id === productRemoved.id ? {...product, quantity : product.quantity - 1 } : product
      });
  }
  return cartList.filter((cartItem)=> {
    return cartItem.id !== productRemoved.id
  })
};

const clearProduct = (cartList, productClear)=> {
  return cartList.filter((cartItem) => {
    return cartItem.id !== productClear.id
  })
}

export const addProductToCart = (cartList,productAdded) => {
  const cartItems = addProduct(cartList, productAdded);
  return createAction(CART_ACTION_TYPES.SET_CART_LIST, cartItems);
}

export const removeProductFromCart = (cartList,productRemoved) => {
  const cartItems = removeProduct(cartList, productRemoved);
  return createAction(CART_ACTION_TYPES.SET_CART_LIST, cartItems);
}

export const clearProductFromCart = (cartList,productClear) => {
  const cartItems = clearProduct(cartList, productClear);
  return createAction(CART_ACTION_TYPES.SET_CART_LIST, cartItems);
}
