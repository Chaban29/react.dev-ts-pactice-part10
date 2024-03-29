import { ChangeEvent, FC, useState } from 'react';

interface IAddTaskProps {
  onAddNewTask: (text: string) => void;
}

export const AddTask: FC<IAddTaskProps> = ({ onAddNewTask }: IAddTaskProps) => {
  const [text, setText] = useState<string>('');
  const [isDisabled] = useState<boolean>(false);

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddNewTask = () => {
    onAddNewTask(text);
    setText('');
  };

  return (
    <>
      <label htmlFor='text'>
        <input
          type='text'
          name='text'
          id='text'
          value={text}
          onChange={handleChangeText}
        />
      </label>
      <button
        type='button'
        disabled={text.length === 0 ? !isDisabled : isDisabled}
        onClick={handleAddNewTask}
      >
        Add new task
      </button>
    </>
  );
};
