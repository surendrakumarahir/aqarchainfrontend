import {SAVE_QUOTE_ITEM, GET_ORDER_LISTING} from '../actions/types';
let initialState = {
  quotaItem: [],
  orderListing: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    // extra
    case SAVE_QUOTE_ITEM:
      return {...state, quotaItem: action.payload};
    case GET_ORDER_LISTING:
      return {
        ...state,
        requestListing: {...state.orderListing, ...action.payload},
      };
    default:
      return state;
  }
}
