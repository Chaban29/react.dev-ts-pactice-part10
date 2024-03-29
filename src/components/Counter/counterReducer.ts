export interface ICounterReducer {
  count: number;
}

export const initialState: ICounterReducer = { count: 10 };

export const enum Actions {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
  MULTIPLE = 'multiple',
}

export type TypeActions =
  | { type: Actions.INCREMENT; count: number; payload?: number }
  | { type: Actions.DECREMENT; count: number; payload?: number }
  | { type: Actions.MULTIPLE; count: number; payload?: number };

export const counterReducer = (
  state = initialState,
  { type, payload = 5 }: TypeActions
) => {
  switch (type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + 10,
      };
    }
    case 'decrement': {
      return {
        ...state,
        count: state.count <= 0 ? state.count : state.count - 10,
      };
    }
    case 'multiple': {
      return {
        ...state,
        count: state.count * payload,
      };
    }
    default: {
      throw new Error(`Unknown action ${type}`);
    }
  }
};
