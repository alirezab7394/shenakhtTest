import { TaskProps } from "src/components/Task";
import React, { memo, useEffect, useState } from "react";
import "./style.scss";

export interface TaskInputProps {
  value?: string;
  onBlur: (value: string) => void;
  isTitle?: boolean;
  addNewTask?: (value: null | number) => void;
  parentID?: null | number;
  id?: number;
  removeTask?: (id: number) => void;
  beforeSibling?: TaskProps;
  changeParent?: (id: number, parent: number | null) => void;
  rootParentID?: null | number;
}
function TaskInput({
  value: initialValue = "",
  onBlur,
  isTitle,
  addNewTask,
  parentID,
  removeTask,
  id,
  beforeSibling,
  changeParent,
  rootParentID,
}: TaskInputProps) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    if (initialValue !== value) {
      setValue(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (addNewTask)
      if (e.key === "Enter") {
        addNewTask(parentID!);
      }
    if (removeTask)
      if (e.ctrlKey && e.key === "Delete") {
        removeTask(id!);
      }

    if (changeParent) {
      if (e.shiftKey && e.key === "Tab") {
        changeParent(id!, rootParentID!);
        e.preventDefault();
      } else if (e.key === "Tab") {
        if (beforeSibling) {
          changeParent(id!, beforeSibling.id);
        }
        e.preventDefault();
      }
    }
  };
  return (
    <input
      className={`TaskInput ${isTitle && "title"}`}
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={() => onBlur(value)}
      autoFocus
    />
  );
}
export default memo(TaskInput);
