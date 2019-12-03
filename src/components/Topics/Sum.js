import React, {Component} from 'react';

class Sum extends Component{
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateInput1(v){
        this.setState({
            number1: parseInt(v)
        })
    }
    updateInput2(v){
        this.setState({
            number2: parseInt(v)
        })
    }

    addTogether(){
        this.setState({
            sum: parseInt(this.state.number1)+parseInt(this.state.number2)
        })
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=>{this.updateInput1(e.target.value)}}/>
                <input className="inputLine" onChange={(e)=>{this.updateInput2(e.target.value)}}/>
                <button className="confirmationButton" onClick={()=>{this.addTogether()}}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;