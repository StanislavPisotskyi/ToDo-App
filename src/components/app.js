import React, { Component } from 'react';
import Data from './data';
import DataCreate from './data-create';

var data = [
    {
        task: 'Make React CRUD App',
        isCompleted: false
    },
    {
        task: 'do something else',
        isCompleted: true
    }
];

export default class App extends Component
{
    constructor(props)
    {
        super();

        this.state = {
            data: data
        };
    }

    create(task)
    {
        this.state.data.push({
            task: task,
            isCompleted: false
        });

        this.setState({data: this.state.data});
    }

    toggleTask(task)
    {
        var item = _.find(this.state.data, data => data.task === task);
        item.isCompleted = !item.isCompleted;
        this.setState({data: this.state.data});
    }

    save(old_task, new_task)
    {
        var item = _.find(this.state.data, data => data.task === old_task);
        item.task = new_task;
        this.setState({data: this.state.data});
    }

    deleteTask(task)
    {
        _.remove(this.state.data, data => data.task === task);
        this.setState({data: this.state.data});
    }

    render()
    {
        return (
            <div>
                <h1>ToDo App</h1>
                <div>
                    <DataCreate data={this.state.data} newItem={this.create.bind(this)} />
                    <Data
                        data={this.state.data}
                        toggleTask={this.toggleTask.bind(this)}
                        saveTask={this.save.bind(this)}
                        deleteTask={this.deleteTask.bind(this)}
                        />
                </div>
            </div>
        );
    }
}