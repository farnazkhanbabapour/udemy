import React from 'react';
import './App.css';
import Validation from '../validation/validation';
import Char from '../char/char';
import ReactDom from "react-dom";



 class App extends React.Component{
  constructor(props){
    super(props);
    this.state={userInput:" "};
  }
  inputChangeHandler= (event) => {
    this.setState({userInput:event.target.value})
  }
  deleteHandler= (index)=> {
    const text= this.state.userInput.split("");
    text.splice(index,1);
    const updateText=text.join("");
    this.setState({userInput:updateText})

  }


render(){
  const charList=this.state.userInput.split("").map((ch,index)=> {
    return (
    <Char character={ch} key={index} clicked={()=>{this.deleteHandler(index)}}/>
    )
  });
  return(
    <div>
        <input type="text" value={this.state.userInput} onChange={this.inputChangeHandler} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}  />
        {charList}
    </div>
   
  )
}
}
export default App;

