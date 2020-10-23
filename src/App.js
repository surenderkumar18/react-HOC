import React, { Component } from "react";
import LifeCycle from "./lifecyle";
import UseEffectHook from "./useEffectHook";
import "./style.css";

 class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      life: 0
    }

  }
  incrementLife = () => {
    this.setState({ life: this.state.life + 1});
  }
  render(){    
    return (
      <div>
      <UseEffectHook />
      <h1>{this.state.life}</h1>
        <button onClick={this.incrementLife}>Life Count</button><br /><br />
        <LifeCycle life= {this.state.life} />
        
      </div>
    )
  }
};
export default App;
