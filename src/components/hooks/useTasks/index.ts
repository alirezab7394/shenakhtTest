import { TaskContext } from "src/components/Providers/TasksProvider";
import { useContext } from "react";

const useTasks = () => {
  const { tasks, editTask, addNewTask ,removeTask,changeParent} = useContext(TaskContext);
  return { tasks, editTask, addNewTask ,removeTask,changeParent};
};

export default useTasks;
