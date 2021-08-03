import React, { createContext, useState } from "react";
import { TaskProps } from "src/components/Task";

interface Props {
  children: React.ReactNode;
}
interface TaskContextProps {
  tasks: TaskProps[];
  editTask: (id: number, title: string) => void;
}
export const TaskContext = createContext<TaskContextProps>({ tasks: [], editTask: () => {} });
export default function TasKProvider({ children }: Props) {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { id: 1, title: "task number 1", parent: null },
    { id: 2, title: "task number 2", parent: null },
    { id: 3, title: "task number 3", parent: 2 },
    { id: 4, title: "task number 4", parent: 2 },
    { id: 5, title: "task number 5", parent: 1 },
    { id: 6, title: "task number 6", parent: 5 },
    { id: 7, title: "task number 7", parent: 5 },
  ]);
  const addNewTask = () => {};
  const editTask = (id: number, title: string) => {
    let temp = [...tasks];
    const index = tasks.findIndex((item) => item.id === id);
    if (index >= 0) {
      temp[index] = { ...temp[index], title };
      setTasks(temp);
    }
  };
  return <TaskContext.Provider value={{ tasks, editTask }}>{children}</TaskContext.Provider>;
}
