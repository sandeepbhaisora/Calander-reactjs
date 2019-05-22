import React from "react"
import "./App.css"
import * as math from "mathjs"



class App extends React.Component{

  constructor(){
    super()
    this.state = {
      inp : "",
      old : 0,
      new : 0,
    }
    this.handle  = this.handle.bind(this)
    this.clearall = this.clearall.bind(this)
  }

  clearall(){
    this.setState({inp : ""})
    console.log("cl")
  }

  handle(event)
  {


   if(event.target.name === "perform"){

        this.setState({

          inp :  math.eval(this.state.inp)
        })
    }

  else{
    this.setState( {

      inp : this.state.inp + event.target.value
    })
  }
  }


  render(){
    return(

      <div className="m" >
        <header><center>Calculator</center></header>
        <br/>
        <div className ="nayi">
        <main >
          <label className = "input" > {this.state.inp}</label>
          <br/>
          <button value = "1" onClick ={this.handle} className="button">1</button>
          <button value = "2" onClick = {this.handle}className= "button">2</button>
          <button value = "3" onClick ={this.handle}className= "button">3</button>
          <button value = "/" onClick ={this.handle}className= "op">/</button>
          <br/>
          <button value = "4" onClick ={this.handle}className= "button">4</button>
          <button value = "5" onClick ={this.handle}className= "button">5</button>
          <button value = "6" onClick ={this.handle}className= "button">6</button>
          <button value = "*" onClick ={this.handle}className= "op">*</button>
          <br/>
          <button value = "7" onClick ={this.handle}className= "button">7</button>
          <button value = "8" onClick ={this.handle}className= "button">8</button>
          <button value = "9" onClick ={this.handle}className= "button">9</button>
          <button value = "+" onClick ={this.handle}className= "op">+</button>

          <br/>
          <button value = "." onClick ={this.handle}className= "button">.</button>
          <button value = "0" onClick ={this.handle}className= "button">0</button>
          <button value= "=" onClick= {this.handle} className="button" name= "perform">=</button>

          <button value = "-" onClick ={this.handle}className= "op">-</button>

          <br/>

          <button name ="clear" onClick = {this.clearall} className = "clearb">clear </button>

        </main>
      </div>
      </div>
    )
  }
}
export default App
