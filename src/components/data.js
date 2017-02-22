import React, { Component } from 'react';
import _ from 'lodash';
import DataHeader from './data-header';
import DataItem from './data-item';

export default class Data extends Component
{
    list()
    {
        var props = _.omit(this.props, 'data');

        return _.map(this.props.data, (data, index) => <DataItem key={index} {...data} {...props} />);
    }

    render()
    {
        return (
            <table>
                <DataHeader />
                <tbody>
                    {this.list()}
                </tbody>
            </table>
        );
    }
}