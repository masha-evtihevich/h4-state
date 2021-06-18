import React from 'react';
import './TextItalic.css';

class TextItalic extends React.Component {
    state = {
        text: 'Hello, world',
        italic: false
    }

    changeText = () => {
        // Solution 1
        const nextText =  this.state.italic === false ? true : false
        this.setState({italic: nextText })
        // solution 2
        this.setState({italic: !this.state.italic})
    }
    render() {
        return (
            <p className={this.state.italic && 'text' } onClick={this.changeText}>{this.state.text}</p>
        )
    }
}
export default TextItalic;