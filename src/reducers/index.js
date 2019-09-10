import { SWITCH_PAGE } from '../actions/page';

export default (state = {page: 'HOME'}, action) => {
    switch (action.type) {
        case SWITCH_PAGE:
            return { ...state, page: action.payload };
        default:
            return state;
    }
}