import * as React from 'react';

import { ITask } from './Task';

class TaskForm extends React.Component<ITaskFormProps, any> {

    private titleInput = React.createRef<HTMLInputElement>();

    constructor(props: ITaskFormProps) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };
    }

    private getCurrentTimestamp(): number {
        const date: Date = new Date();
        console.log(date.getTime())
        return date.getTime();
    }

    public handleNewTask(e: React.FormEvent<HTMLFormElement>): any {
        e.preventDefault();
        const newTask: ITask = {
            title: this.state.title,
            description: this.state.description,
            id: this.getCurrentTimestamp(),
            completed: false
        };
        this.setState({ title: '', description: '' });
        this.titleInput.current.focus();
        this.props.addANewTask(newTask);
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="card card-body">
                <form onSubmit={e => this.handleNewTask(e)}>
                    <div className="form-group">
                        <input type="text"
                            placeholder="Add A Task"
                            name="title"
                            onChange={e => this.handleInputChange(e)}
                            value={this.state.title}
                            className="form-control"
                            autoFocus
                            ref={this.titleInput}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            onChange={e => this.handleInputChange(e)}
                            name="description"
                            className="form-control"
                            value={this.state.description}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

interface ITaskFormProps {
    addANewTask: (task: ITask) => void;
}

export default TaskForm;