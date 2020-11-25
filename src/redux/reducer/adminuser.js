import {
	ADD_ADMIN_USER,
	ADMIN_USER_SAVE,
} from "../actions/types";
let initialState = {
	data: [],
};
export default function(state = initialState, action) {
	switch (action.type) {
	case ADMIN_USER_SAVE:
		return {...state, data: action.payload};
	default:
		return state;
	}
}
  