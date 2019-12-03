import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateValue(value){
        // console.log(value);
        this.setState({
            userInput: value 
        })
    }

    splitValue(){
        // console.log(this.state.userInput);
        let arr = this.state.userInput.split(',')
        // console.log(arr);
        this.setState({
            evenArray: arr.filter(el=>el%2===0),
            oddArray: arr.filter(el=>el%2===1)
        })

    }

    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={(e) => {this.updateValue(e.target.value)}}/>
                <button className='confirmationButton' onClick={e=>{this.splitValue()}}>Split</button>
                <span className='resultsBox'>Evens: [{this.state.evenArray.join(',')}]</span>
                <span className='resultsBox'>Odds: [{this.state.oddArray.join(',')}]</span>

            </div>
        )
    }
}

export default EvenAndOdd;