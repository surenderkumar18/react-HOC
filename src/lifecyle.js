import React, { Component} from 'react';

class LifeCycle extends Component {
  constructor(props){
    console.log("I am constructor")
    super(props);
    this.state ={
      birth: 0
    }
  }
  componentDidMount(){
     console.log("I am componentDidMount")
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("I am getDerivedStateFromProps")
    return null;
  }
   incrementLife = () => {
    this.setState({ birth: this.state.birth + 1});
  }
  render(){  
    console.log("I am Render")  
    return (
      <div>
        <h1>The count is test</h1>
        <button onClick={this.incrementLife}>Birth Count</button>
        <h1>The count is {this.state.birth}</h1>
      </div>
    );
  }
  componentDidUpdate(){
    console.log("I am componentDidUpdate")
  }
}

export default LifeCycle;