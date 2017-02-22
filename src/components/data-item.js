import React, { Component } from 'react';

export default class DataItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    edit()
    {
        this.setState({isEditing: true});
    }

    cancel()
    {
        this.setState({isEditing: false});
    }

    saveHandler(e)
    {
        e.preventDefault();
        var old_task = this.props.task;
        var new_task = this.refs.editInput.value;
        this.props.saveTask(old_task, new_task);
        this.setState({isEditing: false});
    }

    renderActionsButtons()
    {
        if(this.state.isEditing)
        {
            return(
                <td>
                    <button onClick={this.saveHandler.bind(this)}>Save</button>
                    <button onClick={this.cancel.bind(this)}>Cancel</button>
                </td>
            );
        }

        return(
            <td>
                <button onClick={this.edit.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }

    renderTask()
    {
        var {task, isCompleted} = this.props;
        var styles = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.isEditing)
        {
            return(
                <td>
                    <form onSubmit={this.saveHandler.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
        }

        return(
            <td style={styles} onClick={this.props.toggleTask.bind(this, task)}>{this.props.task}</td>
        );
    }

    render()
    {
        return (
            <tr>
                {this.renderTask()}
                {this.renderActionsButtons()}
            </tr>
        );
    }
}