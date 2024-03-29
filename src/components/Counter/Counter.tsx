import { FC, useReducer } from 'react';
import { Actions, counterReducer } from './counterReducer';
import { initialState } from '../Counter/counterReducer';

export const Counter: FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h1>Count {state.count}</h1>
      <button
        onClick={() =>
          dispatch({
            type: Actions.INCREMENT,
            count: 0,
          })
        }
      >
        +10
      </button>
      <button
        onClick={() =>
          dispatch({
            type: Actions.DECREMENT,
            count: 0,
          })
        }
      >
        -10
      </button>
      <button
        type='button'
        onClick={() =>
          dispatch({
            type: Actions.MULTIPLE,
            count: 0,
          })
        }
      >
        multiple
      </button>
    </>
  );
};
