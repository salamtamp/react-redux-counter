import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';

const increment = () => ({
    type: INCREMENT_COUNTER,
});

const decrement = () => ({
    type: DECREMENT_COUNTER,
});

export { increment, decrement }