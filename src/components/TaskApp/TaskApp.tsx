import { FC, useReducer } from 'react';
import { ITasks } from '../AddTask/tasks';
import { AddTask } from '../AddTask/AddTask';
import { TaskList } from '../TaskList/TaskList';
import { ActionsTypes, initialState, taskReducer } from '../taskReducer';

let nextId: number = 3;

export const TaskApp: FC = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  const handleAddNewTask = (text: string) => {
    dispatch({ type: ActionsTypes.ADD, id: nextId++, text });
  };

  const handleChangeTask = (task: ITasks) => {
    dispatch({ type: ActionsTypes.CHANGED, task: task });
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch({ type: ActionsTypes.DELETE, taskId: taskId });
  };

  return (
    <>
      <AddTask onAddNewTask={handleAddNewTask} />
      <TaskList
        tasks={tasks.tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};
