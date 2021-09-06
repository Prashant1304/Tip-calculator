import React,{Component} from "react"
import MainPage from "./component/mainPage/mainPage"
import "./App.css"

class App extends Component {
  render() {
    return(
      <div>
        <div className="App">
        <h1> Tip Calculator</h1>
        </div>
        <div>
          <MainPage/>
        </div>
      </div>
    )
  }
}
export default App;
