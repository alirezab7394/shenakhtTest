import React, { memo, useMemo, useState } from "react";
import LinkDot from "../Widgets/LinkDot";
import OpenCloseTriangle from "../Widgets/OpenCloseTriangle";
import useGetTasksList from "../hooks/useTasks";
import "./style.scss";

export interface TaskProps {
  title?: string;
  id: number;
  parent: null | number;
}
function Task({ title = "", id, parent }: TaskProps) {
  const { tasks, editTask } = useGetTasksList();
  const [value, setValue] = useState(title);
  const [showChildren, setShowChildren] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  // set the context value onBlur
  const onBlur = () => {
    editTask(id, value);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const childrenList = useMemo(() => tasks.filter((item) => item.parent === id), [tasks, id]);
  const hasChildren = !!childrenList.length;
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
        <LinkDot />
        <input className="Task--input" value={value} onChange={onChange} onBlur={onBlur} />
      </div>
      {showChildren && (
        <div className={`Task--container`}>
          {childrenList.map((item) => (
            <Task {...item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
}
export default memo(Task);
