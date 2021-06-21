import React from 'react';
import './TextItalic.css';

class TextItalic extends React.Component {
    state = {
        italic: false
    }

    changeText = () => {
        // Solution 1
        // const nextText =  this.state.italic === false ? true : false
        // this.setState({italic: nextText })
        // solution 2
        this.setState({italic: !this.state.italic})
    }
    render() {
        return (
            <p className={this.state.italic && 'text' } onClick={this.changeText}>Hello, world</p>
        )
    }
}
export default TextItalic;