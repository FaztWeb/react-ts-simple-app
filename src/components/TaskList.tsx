import * as React from 'react';

import { ITask } from './Task';

class TaskList extends React.Component<ITaskListProps, any> {
    render(): JSX.Element[] {
        return this.props.tasks.map((task: ITask, i: number) => {
            return (
                <div className="col-md-4 mt-2" key={task.id}>
                    <div className="card card-body text-center">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button 
                            className="btn btn-danger btn-block"
                            onClick={() => this.props.deleteATask(task.id)}
                            >
                            Delete
                        </button>
                    </div>
                </div>
            )
        });
    }
}

interface ITaskListProps {
    tasks: ITask[];
    deleteATask: (id: number) => any;
}

export default TaskList;