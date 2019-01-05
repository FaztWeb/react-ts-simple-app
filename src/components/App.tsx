import * as React from 'react';

import { ITask } from './Task';

// Components
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: []
        };
        this.addANewTask = this.addANewTask.bind(this);
    }

    public addANewTask(task: ITask): void {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    public deleteATask(id: number): void {
        const tasks: ITask[] = this.state.tasks.filter(
            (task: ITask) => task.id !== id
        );
        this.setState({ tasks });
    }


    public render(): JSX.Element {
        console.log(this.state)
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </nav>

                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <TaskForm addANewTask={this.addANewTask} />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <TaskList
                                    tasks={this.state.tasks}
                                    deleteATask={this.deleteATask.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface IProps {
    title?: string;
}

interface IState {
    tasks: ITask[];
}
