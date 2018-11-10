import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/types';

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    const { count } = state;
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: count + 1 }
        case DECREMENT_COUNTER:
            return { ...state, count: count - 1 }
        default:
            return state
    }
}

export default counterReducer;