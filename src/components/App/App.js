import React from 'react';
import './App.css';
import Validation from '../validation/validation';
import Char from '../char/char';




 class App extends React.Component{
  constructor(props){
    super(props);
    this.state={userInput:" "};
  }
  inputChangeHandler= (e) => {
    this.setState({userInput:e.target.value})
    console.log(e)
  }
  deleteHandler= (index)=> {
    const text= this.state.userInput.split("");
    text.splice(index,1);
    const updateText=text.join("");
    this.setState({userInput:updateText})

  }
  charList=()=>{
    var result= [];
    let text=this.state.userInput.split("");
    for(var i=0; i <text.length; i++ ){
     result.push(<Char cliecked={()=>this.deleteHandler(i)} character={text[i]}/>)
    }

   return result ;


  }


render(){

  return(
    <div>
        <input type="text" value={this.state.userInput} onChange={this.inputChangeHandler} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}  />
        {this.charList()}
    </div>
   
  )
}
}
export default App;

