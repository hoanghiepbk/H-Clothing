import {CART_ACTION_TYPES} from './cart.types';

const CART_INITIAL_STATE = {
  isShowDropdown: false,
  cartList: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const {type,payload} = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_LIST :
      return {...state, cartList: payload};
    case CART_ACTION_TYPES.SET_IS_SHOW_DROP_DOWN :
      return {...state, isShowDropdown: payload};
    default:
      return state;

  }
}
