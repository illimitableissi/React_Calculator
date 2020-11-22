import React, {Component} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class App extends Component {

  state = {
    firstNumber: 0,
    secondNumber: "",
    isCalculated: false,
    isOperatorChosen: false,
    result: 0
  }

  result = () => {
    this.setState({
      result: this.state.firstNumber + this.state.secondNumber
    })
  }

  addValue = () => {
    this.setState({
      firstNumber: this.state.firstNumber + parseInt(this.value)
    })
    console.log(this.state.firstNumber)
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value,
        firstNumber: value
    });
    console.log(value);
  };

  showValue = () => {
    console.log(parseInt(this.value))
  }

  render(){
  return (
    <div>
      <Container>
      <p>{this.state.firstNumber}</p>
      <Row>
      <input type="button" value="1" onClick={this.handleInputChange}></input>
      <button value="2">2</button>
      <button value="3">3</button>
      <button value= "+">+</button>
      </Row>
      <Row>
      <button value="4">4</button>
      <button value="5">5</button>
      <button value="6">6</button>
      <button value="-">-</button>
      </Row>
      <Row>
      <button value="7">7</button>
      <button value="8">8</button>
      <button value="9">9</button>
      <button value="*">X</button>
      </Row>
      <Row>
      <button value="/">/</button>
      <button value="clear">CE</button>
      <button value="=">Enter</button>
      </Row>
      </Container>
    </div>
    );
  }
}

export default App;
