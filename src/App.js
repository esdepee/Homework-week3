import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import { addModel } from "./actions/addModels"


const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  updateSelection = event => {
    this.setState({currentState: event.target.value})
 };

 // updateOptions() => {
 //   <option value="">-- pick a model --</option>
 //     {(Object.keys(data)).map(pc => (
 //       <option value={pc}>
 //         {pc} ({data[pc].year})
 //       </option>
 //     ))}
 // }

  render() {
    return (
      <div className="App">
        <select onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
            {(Object.keys(data)).map(pc => (
              <option value={pc}>
                ({pc} ({data[pc].year}))
              </option>
            ))}
        </select>

        <button> add </button>
      </div>
    );
  }
}



export default App
