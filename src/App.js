  import React, { Component } from 'react';
class App extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            companyName: ''  
        };  
    }  
    changeText(event) {  
        this.setState({  
            companyName: event.target.value  
        });  
    }  
    render() {  
        return (  
            <div className="App-event">  
                <h2>Simple Event 1</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input type="text" id="companyName" onChange={this.changeText.bind(this)} />  
                <h4 className="newText">You entered: { this.state.companyName }</h4>  
            </div>  
        );  
    }  
}  
export default App;  

// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <div className="App__aside"></div>
//      <div className="App__form">
//          <div className="title">
//              <a href="#" className="Page__Switch">Sign in</a>
//              <a href="#" className="Page__Switch__items_active">Sign Out</a>
//          </div>
//      </div>
//     </div>
//   );
// }

// export default App;
