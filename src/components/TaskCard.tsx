import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export const TaskCard = ({ task, deleteATask }: Props) => (
  <div className="card card-body bg-secondary rounded-0">
    <h3>{task.title}</h3>
    <p>{task.id}</p>
    <p>{task.description}</p>
    <button
      className="btn btn-danger btn-block"
      onClick={() => task.id && deleteATask(task.id)}
    >
      Delete
    </button>
  </div>
);
