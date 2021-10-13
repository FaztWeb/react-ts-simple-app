import React from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "../interfaces/Task";
import { BiTaskX } from "react-icons/bi";

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => any;
}

export const TaskList = ({ tasks, deleteATask }: Props): JSX.Element => {
  if (tasks.length === 0)
    return (
      <div className="text-light text-center">
        <h1>There are no tasks yet</h1>
        <BiTaskX size="20rem" />
      </div>
    );

  return (
    <>
      {tasks.map((task, i) => (
        <div className="col-md-4 mt-2">
          <TaskCard key={task.id} task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
};
