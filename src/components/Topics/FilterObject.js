import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {name: 'Jonny Cage', title: 'Fighter', age: 33}, 
                {name: 'Maria', age: 22, hairColor: 'White'},
                {name: 'Teddy', title: 'Bear'}
            ],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(v){
        console.log(v);
        this.setState({
            userInput: v
        })
    }

    filterObj(){
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(el => this.state.userInput in el)
        })
    }

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={e=>{this.updateInput(e.target.value)}}></input>
                <button className="confirmationButton" onClick={()=>{this.filterObj()}}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;