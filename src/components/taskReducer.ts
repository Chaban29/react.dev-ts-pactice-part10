import { ITasks, initialTasks } from './AddTask/tasks';

interface ITaskReducer {
  tasks: ITasks[];
}

export const initialState: ITaskReducer = { tasks: initialTasks };

export const enum ActionsTypes {
  ADD = 'add',
  CHANGED = 'changed',
  DELETE = 'delete',
}

type TypeActions =
  | { type: ActionsTypes.ADD; id: number; text: string }
  | { type: ActionsTypes.CHANGED; task: ITasks }
  | { type: ActionsTypes.DELETE; taskId: number };

export const taskReducer = (state = initialState, action: TypeActions) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: action.id, text: action.text, done: false },
        ],
      };
    }
    case 'changed': {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        }),
      };
    }
    case 'delete': {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.taskId),
      };
    }
    default: {
      throw new Error(`Unknown task ${action.type}`);
    }
  }
};
