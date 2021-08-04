import LinkDot from "../Widgets/LinkDot";
import OpenCloseTriangle from "../Widgets/OpenCloseTriangle";
import TaskInput from "../Widgets/TaskInput/TaskInput";
import useGetTasksList from "../hooks/useTasks";
import SubTasks from "./SubTasks";
import React, { memo, useMemo, useState } from "react";
import "./style.scss";

export interface TaskProps {
  title?: string;
  id: number;
  parent: null | number;
}
interface Props extends TaskProps {
  beforeSibling: TaskProps;
  rootParentID?: null | number;
}

function Task({ title = "", id, parent, beforeSibling, rootParentID = null }: Props) {
  const { tasks, editTask, addNewTask, removeTask, changeParent } = useGetTasksList();
  const [showChildren, setShowChildren] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  // set the context value onBlur
  const onBlur = (value: string) => {
    editTask(id, value);
  };

  const childrenList = useMemo(() => tasks.filter((item) => item.parent === id), [tasks, id]);
  const hasChildren = childrenList.length > 0;

  return (
    <>
      <div className="Task" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        {hasChildren && (
          <OpenCloseTriangle
            isHovered={isHovering}
            open={showChildren}
            onChange={() => setShowChildren(!showChildren)}
          />
        )}
        <LinkDot hasChildren={hasChildren} isOpen={showChildren} id={id} />
        <TaskInput
          value={title}
          onBlur={onBlur}
          addNewTask={addNewTask}
          removeTask={removeTask}
          id={id}
          parentID={parent}
          beforeSibling={beforeSibling}
          changeParent={changeParent}
          rootParentID={rootParentID}
        />
      </div>
      <SubTasks showChildren={showChildren} childrenList={childrenList} rootParentID={parent} />
    </>
  );
}
export default memo(Task);
