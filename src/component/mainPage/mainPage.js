import React,{Component} from "react"
import "./mainpage.css"

 class Mainpage extends Component{

  state = {
    value1:"",
    value2:"",
    value3:"",
    final:""
  }

  handleChange = e => {
    let message = e.target.value
    this.setState({value1:message})
    console.log(message)
  }

  handleChange1 = e => {
    let message1 = e.target.value
    this.setState({value2:message1}) 
    console.log(message1)
  }

  dropDownValue=e => {
    let  value = e.target.value
    this.setState({value3:value})
    console.log(value)
  }
  
  calculate = e =>{
    let total = this.state.value1
    let people = this.state.value2
    let percent = this.state.value3
    let percentAmount = (percent/100)*total
    let out = percentAmount/people
    this.setState({final:out})
    console.log(out) 
  }

  reset = e => {
    this.setState({value1:""})
    this.setState({value2:""})
    this.setState({value3:""})
    this.setState({final:""})
  }

  render() {

      return(
        <div className="tip-main">
          <div>
            <p>How Much is your bill</p> 
            <a className="tip-rupee">&#x20B9;</a><input className="tip-input"  type="number" onChange={this.handleChange} value={this.state.value1} ></input>
          </div>

          <div>
            <p>How many people sharing the bill</p>
            <a>&#x26F9;</a><input className="tip-input" type="number"  onChange={this.handleChange1} value={this.state.value2} ></input>
          </div>

          <div>
            <p>How much percent</p>
            <select onChange={this.dropDownValue}  >
              <option>Choose</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
            </select>
            <p></p>
          </div>

          <div>
            <button onClick={this.calculate} >calculate</button>
            <input  type="reset" onClick={this.reset}></input>
            <p>Each will contribute  { Math.floor( this.state.final)} rupee</p>
          </div>

        </div>
      )
    }
 }

 export default Mainpage