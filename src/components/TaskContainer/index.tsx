import Task from "../Task";
import AddNewTask from "../Widgets/AddNewTask";
import TaskInput from "../Widgets/TaskInput/TaskInput";
import useGetTasksList from "../hooks/useTasks";
import { useParams } from "react-router-dom";
import "./style.scss";

export default function TaskContainer() {
  const { tasks, editTask } = useGetTasksList();
  let { id } = useParams() as { id: string };
  const parentID = parseInt(id) ? parseInt(id) : null;
  const currentItem = tasks.find((item) => item.id === parentID);
  const editTitle = (value: string) => {
    editTask(parentID!, value);
  };
  return (
    <div className="TaskContainer">
      {currentItem && <TaskInput value={currentItem.title} onBlur={editTitle} isTitle />}
      {tasks
        .filter((item) => item.parent === parentID)
        .map((item, index, list) => (
          <Task
            title={item.title}
            id={item.id}
            parent={item.parent}
            beforeSibling={list[index - 1] ?? null}
            key={item.id}
          />
        ))}
      <AddNewTask parent={parentID} />
    </div>
  );
}
