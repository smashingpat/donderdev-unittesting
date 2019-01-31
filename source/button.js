import React from 'react';
import styles from './button.css';

export default class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.setState({
            count: this.state.count + 1,
        });
        this.props.onClick();
    }

    render() {
        return <button {...this.props} onClick={this.onClickHandler}>I am a button!</button>;
    }
}
