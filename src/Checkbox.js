import React from 'react';

// Solution 1
class Checkbox extends React.Component {
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
class Checkbox extends React.Component {
    state = {
        button: true
    }

    changeButton = () => {
        const nextButton = this.state.button === true ? false : true
        this.setState({ button: nextButton })
    }
    render() {
        return (
            <button onClick={this.changeButton}>{this.state.button === true ? 'x' : 'y'}</button>
        )
    }
}

export default Checkbox;