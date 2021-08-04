import { TaskProps } from "src/components/Task";
import React, { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}
interface TaskContextProps {
  tasks: TaskProps[];
  editTask: (id: number, title: string) => void;
  addNewTask: (parent: number | null) => void;
  removeTask: (id: number) => void;
  changeParent: (id: number, parent: number | null) => void;
}
export const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  editTask: () => {},
  addNewTask: () => {},
  removeTask: () => {},
  changeParent: () => {},
});
export default function TasKProvider({ children }: Props) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    const tasksList = JSON.parse(localStorage.getItem("tasksList")!) ?? [];
    if (tasksList) {
      setTasks(tasksList);
    }
  }, []);
  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem("tasksList", JSON.stringify(tasks));
    }
  }, [tasks]);
  const addNewTask = (parent: number | null) => {
    setTasks([...tasks, { id: new Date().getTime(), parent, title: "" }]);
  };
  const removeTask = (id: number) => {
    let temp = [...removeChildren(id, tasks).filter((item) => item.id !== id)];
    setTasks(temp);
  };
  const removeChildren = (parentId: number, list: TaskProps[]) => {
    let temp = [...list];
    for (let index = 0; index < tasks.length; index++) {
      const element = tasks[index];

      if (element.parent === parentId) {
        temp = [...removeChildren(element.id, temp)];
        temp = [...temp.filter((item) => item.parent !== parentId)];
      }
    }
    return temp;
  };
  const editTask = (id: number, title: string) => {
    let temp = [...tasks];
    const index = tasks.findIndex((item) => item.id === id);
    if (index >= 0) {
      temp[index] = { ...temp[index], title };
      setTasks(temp);
    }
  };
  const changeParent = (id: number, parent: number | null) => {
    let temp = [...tasks];
    const index = tasks.findIndex((item) => item.id === id);
    if (index >= 0) {
      temp[index] = { ...temp[index], parent };
      setTasks(temp);
    }
  };
  return (
    <TaskContext.Provider value={{ tasks, editTask, addNewTask, removeTask, changeParent }}>
      {children}
    </TaskContext.Provider>
  );
}
