import React from 'react';

// Solution 1
class Checkbox1 extends React.Component {
    state = {
        button: 'x'
    }

    changeButton = () => {
        const nextButton = this.state.button === 'x' ? 'y' : 'x'
        this.setState({ button: nextButton })
    }
    render() {
        return (
            <button onClick={this.changeButton}>{this.state.button}</button>
        )
    }
}


// Solution 2
class Checkbox2 extends React.Component {
    state = {
        button: true
    }

    changeButton = () => {
        const nextButton = this.state.button ? false : true
        this.setState({ button: nextButton })
    }
    render() {
        return (
            <button onClick={this.changeButton}>{this.state.button ? 'x' : 'y'}</button>
        )
    }
}

export {Checkbox1, Checkbox2};