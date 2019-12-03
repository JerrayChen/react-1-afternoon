import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(v) {
        this.setState({
            userInput: v
        })
    }

    filterStr() {
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(e=>e.includes(this.state.userInput))
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={e => { this.updateInput(e.target.value) }} />
                <button className="confirmationButton" onClick={() => this.filterStr()}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;