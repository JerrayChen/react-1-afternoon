import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateInput(v) {
        this.setState({
            userInput: v
        })
    }

    checkPal() {
        let forward = this.state.userInput;
        let backward = '';
        for (let i = forward.length - 1; i >= 0; i--) {
            backward += forward[i];
        }
        this.setState({
            palindrome: backward === forward ? 'true' : 'false'
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => { this.updateInput(e.target.value) }} />
                <button className="confirmationButton" onClick={() => { this.checkPal() }}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;