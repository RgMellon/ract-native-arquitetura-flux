export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_CART_REQUEST',
    id,
  };
}

export function addCartSuccess(product) {
  return {
    type: '@cart/ADD_CART_SUCCESS',
    product,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCES',
    id,
    amount,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function removeItem(id) {
  return {
    type: '@cart/REMOVE_ITEM',
    id,
  };
}
