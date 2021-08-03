import { useContext } from "react";
import { TaskContext } from "src/components/Providers/TasksProvider";

const useTasks = () => {
  const { tasks, editTask } = useContext(TaskContext);
  return { tasks, editTask };
};

export default useTasks;
