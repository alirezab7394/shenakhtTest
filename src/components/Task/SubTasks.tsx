import Task, { TaskProps } from "./index";
import React, { memo } from "react";

interface Props {
  showChildren: boolean;
  childrenList: TaskProps[];
  rootParentID?: null | number;
}
function SubTasks({ showChildren, childrenList, rootParentID = null }: Props) {
  if (!showChildren) return <></>;
  return (
    <div className={`Task--container`}>
      {childrenList.map((item, index, list) => (
        <Task {...item} beforeSibling={list[index - 1] ?? null} key={item.id} rootParentID={rootParentID} />
      ))}
    </div>
  );
}
export default memo(SubTasks);
