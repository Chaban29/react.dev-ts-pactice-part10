import { FC, useState } from 'react';
import { ITasks } from '../AddTask/tasks';

interface ITaskProps {
  tasks: ITasks;
  onChange: (task: ITasks) => void;
  onDelete: (taskId: number) => void;
}

export const Task: FC<ITaskProps> = ({
  tasks,
  onChange,
  onDelete,
}: ITaskProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <>
      <label htmlFor='check'>
        <input
          type='checkbox'
          name='check'
          id='check'
          checked={tasks.done}
          onChange={(event) =>
            onChange({ ...tasks, done: event.target.checked })
          }
        />
      </label>
      {isEditing ? (
        <>
          <label htmlFor='save'>
            <input
              type='text'
              id='save'
              name='save'
              value={tasks.text}
              onChange={(event) =>
                onChange({ ...tasks, text: event.target.value })
              }
            />
          </label>
          <button type='button' onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      ) : (
        <>
          {tasks.text}
          <button type='button' onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
      <button type='button' onClick={() => onDelete(tasks.id)}>
        Delete task
      </button>
    </>
  );
};
