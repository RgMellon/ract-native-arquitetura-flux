import produce from 'immer';

export function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_CART_SUCCESS': {
      const { product } = action;

      return [...state, product];
    }

    case '@cart/UPDATE_AMOUNT_SUCCES': {
      return produce(state, draft => {
        const index = draft.findIndex(p => p.id === action.id);

        if (index >= 0) {
          draft[index].amount = Number(action.amount);
        }
      });
    }

    case '@cart/REMOVE_ITEM': {
      return produce(state, draft => {
        const index = draft.findIndex(p => p.id === action.id);

        if (index >= 0) {
          draft.splice(index, 1);
        }
      });
    }

    default:
      return state;
  }
}

export default cart;
