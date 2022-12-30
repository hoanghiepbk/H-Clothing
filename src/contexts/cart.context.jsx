import {createContext , useState, useReducer } from 'react';

import {createAction} from '../utils/reducer/reducer.utils';

export const addProduct = (cartList, productAdded) => {
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

export const removeProduct = (cartList, productRemoved) => {
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

export const clearProduct = (cartList, productClear)=> {
  return cartList.filter((cartItem) => {
    return cartItem.id !== productClear.id
  })
}

export const CartContext = createContext({
  isShowDropdown: false,
  cartList: [],
  addProductToCart: () => {},
  cartTotalCount: 0,
  cartTotal: 0,
});

const INITIAL_STATE = {
  isShowDropdown: false,
  cartList: [],
  cartTotalCount: 0,
  cartTotal: 0,
}

export const CART_ACTION_TYPE = {
  SET_CART_LIST: 'SET_CART_LIST',
}

const cartReducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case CART_ACTION_TYPE.SET_CART_LIST :
      return {...state, ...payload};
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
}

export const CartProvider = ({children}) => {

  const [{cartList,cartTotalCount,cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const updateCartList = (cartList) => {
    const cartTotalCount = cartList.reduce((total, product) => {
      return total + product.quantity
    }, 0)
    const cartTotal = cartList.reduce((total, cartItem) => {
      return total + cartItem.quantity*cartItem.price
    },0)
    const payload = {
      cartList,
      cartTotalCount,
      cartTotal,
    }
    dispatch(createAction(CART_ACTION_TYPE.SET_CART_LIST, payload));
  }

  const addProductToCart = (productAdded) => {
    const cartItems = addProduct(cartList, productAdded);
    updateCartList(cartItems);
  }
  const removeProductFromCart = (productRemoved) => {
    const cartItems = removeProduct(cartList, productRemoved);
    updateCartList(cartItems);
  }
  const clearProductFromCart = (productClear) => {
    const cartItems = clearProduct(cartList, productClear);
    updateCartList(cartItems);
  }


  const value = {isShowDropdown, setIsShowDropdown, cartList , cartTotalCount, cartTotal, addProductToCart ,removeProductFromCart ,clearProductFromCart}
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
