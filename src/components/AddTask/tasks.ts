export interface ITasks {
  id: number;
  text: string;
  done: boolean;
}

export const initialTasks: ITasks[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
