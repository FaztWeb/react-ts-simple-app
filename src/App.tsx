import { useState } from "react";
import { Task } from "./interfaces/Task";
import logo from "./logo.svg";

// Components
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

interface Props {
  title?: string;
}

export const App = ({ title = "default title" }: Props): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addANewTask = (task: Task): void =>
    setTasks([
      ...tasks,
      { ...task, completed: false, id: getCurrentTimestamp() },
    ]);

  const deleteATask = (id: number): void =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <h6 className="text-light d-flex justify-content-end">
                Total Tasks <span className="badge bg-primary ms-2">{tasks.length}</span>
              </h6>

              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
