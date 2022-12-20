import {createContext , useState, useEffect} from 'react';

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

export const CartProvider = ({children}) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [cartTotalCount, setCartTotalCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addProductToCart = (productAdded) => {
    setCartList(addProduct(cartList, productAdded));
  }
  const removeProductFromCart = (productRemoved) => {
    setCartList(removeProduct(cartList, productRemoved));
  }
  const clearProductFromCart = (productClear) => {
    setCartList(clearProduct(cartList, productClear));
  }

  useEffect(() => {
    const cartCount = cartList.reduce((total, product) => {
      return total + product.quantity
    }, 0)
    setCartTotalCount(cartCount);
  },[cartList])

  useEffect(()=> {
    const cartTotal = cartList.reduce((total, cartItem) => {
      return total + cartItem.quantity*cartItem.price
    },0)
    setCartTotal(cartTotal);
  },[cartList])

  const value = {isShowDropdown, setIsShowDropdown, cartList , cartTotalCount, addProductToCart ,removeProductFromCart ,clearProductFromCart , cartTotal}
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
