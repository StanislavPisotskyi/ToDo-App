import React, { Component } from 'react';
import _ from 'lodash';

export default class DataCreate extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            error: null
        }
    }

    validate(task)
    {
        if(!task)
        {
            return 'Plese, type a task!';
        } else if(_.find(this.props.data, data => data.task === task))
        {
            return 'Task already exist!';
        } else
        {
            return null;
        }
    }

    createHandler(e)
    {
        e.preventDefault();
        var create_input = this.refs.createInput;
        var create_input_value = create_input.value;
        var validate_input = this.validate(create_input_value);

        if(validate_input)
        {
            this.setState({error: validate_input});
            return;
        }

        this.setState({error: null});
        this.props.newItem(create_input_value);
        create_input.value = '';
    }

    renderError()
    {
        if(this.state.error === null)
        {
            return null;
        }

        return <div style={{color: 'red'}}>{this.state.error}</div>;
    }

    render()
    {
        return (
            <form onSubmit={this.createHandler.bind(this)}>
                <input type="text" ref="createInput" placeholder="what do i need to do?" />
                <button>Create</button>
                {this.renderError()}
            </form>
        );
    }
}