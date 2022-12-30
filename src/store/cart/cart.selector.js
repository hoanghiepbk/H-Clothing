import {createSelector} from 'reselect';

const selectCartState = (state) => state.cart;

export const selectIsShowDropdown = createSelector(
  [selectCartState],
  (cartState) => cartState.isShowDropdown
)

export const selectCartList = createSelector(
  [selectCartState],
  (cartState) => cartState.cartList
)

export const selectCartTotalCount = createSelector(
  [selectCartList],
  (cartList) =>
    cartList.reduce((total, product) => {
      return total + product.quantity
    }, 0)
)

export const selectCartTotal = createSelector(
  [selectCartList],
  (cartList) =>
    cartList.reduce((total, cartItem) => {
     return total + cartItem.quantity*cartItem.price
    },0)
)
