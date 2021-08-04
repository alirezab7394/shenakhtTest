import useTasks from "src/components/hooks/useTasks";
import "./style.scss";

interface AddNewTaskProps {
  parent: number | null;
}
export default function AddNewTask({ parent }: AddNewTaskProps) {
  const { addNewTask } = useTasks();
  return (
    <div className={`AddNew`} onClick={() => addNewTask(parent)}>
      <span className="AddNew--main">+</span>
    </div>
  );
}
