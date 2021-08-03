import React from "react";
import Task from "../Task";
import useGetTasksList from "../hooks/useTasks";
import "./style.scss";

export default function TaskContainer() {
  const { tasks } = useGetTasksList();
  return (
    <div className="TaskContainer">
      {tasks
        .filter((item) => item.parent === null)
        .map((item) => (
          <Task title={item.title} id={item.id} parent={item.parent} key={item.id} />
        ))}
    </div>
  );
}
