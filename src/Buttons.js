import React from 'react';
// Solution 1
class Buttons extends React.Component {
    state = {
        button: 'repeat all'
    }

    changeButton = (button) => {
        // eslint-disable-next-line default-case
        switch (button) {
            case 'repeat all':
                this.setState({ button: 'no repeat' });
                break;
            case 'no repeat':
                this.setState({ button: 'repeat one' });
                break;
            case 'repeat one':
                this.setState({ button: 'repeat all' });
                break;
        }
    }
    render() {
        return (
            <button onClick={() => this.changeButton(this.state.button)}>{this.state.button}</button>
        )
    }
}
export default Buttons;

// Solution 2
export class Button extends React.Component {
    state = {
        count: 0
    }
    states = ['no repeat', 'repeat all', 'repeat one'];

    changeButton = () => {
        let newCount = this.state.count + 1;
        if (newCount > 2) {
            newCount = 0;
        }
        this.setState({ count: newCount });
    }
    render() {
        return (
            <div onClick={this.changeButton}>
                {this.states[this.state.count]}
            </div>
        )
    }
}

