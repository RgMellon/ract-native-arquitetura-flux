import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import api from '../../../services/api';

import { addCartSuccess, updateAmountSuccess } from './actions';

import formatPrice from '../../../util/formatPrice';

function* addToCart({ id }) {
  const existProd = yield select(state => state.cart.find(p => p.id === id));

  if (existProd) {
    const oldAmount = existProd.amount + 1;
    yield put(updateAmountSuccess(id, oldAmount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formatedPrice: formatPrice(response.data.price),
    };

    yield put(addCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  const existProd = yield select(state => state.cart.find(p => p.id === id));
  console.tron.log(existProd, amount);
  if (existProd && amount > 0) {
    yield put(updateAmountSuccess(id, amount));
  }
}

export default all([
  takeLatest('@cart/ADD_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
