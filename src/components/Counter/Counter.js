import React, {Component}from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    }
    state = {
        value: this.props.initialValue,
    };

    handelIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
            }));
       };

    handelDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
       };

    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">{this.state.value}</span>

                <Controls
                    onIncrement={this.handelIncrement}
                    onDecrement={this.handelDecrement}
                />
            </div>
        );
    }
}

export default Counter;