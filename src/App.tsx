import { FC } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
// import { TaskApp } from './components/TaskApp/TaskApp';

export const App: FC = () => {
  return (
    <>
      <h1>Prague itinerary</h1>
      {/* <TaskApp /> */}
      <Counter />
    </>
  );
};
