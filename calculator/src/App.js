import React, {Component} from "react"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 


class App extends Component {

  state = {

  }


  render(){
  return (
    <div>
      <Container>
      <input></input>
      <Row>
      <Button value="1">1</Button>
      <Button value ="2">2</Button>
      <Button value ="3">3</Button>
      <Button value= "plus">+</Button>
      </Row>
      <Row>
      <Button value="4">4</Button>
      <Button value="5">5</Button>
      <Button value="6">6</Button>
      <Button value="minus">-</Button>
      </Row>
      <Row>
      <Button value="7">7</Button>
      <Button value="8">8</Button>
      <Button value="9">9</Button>
      <Button value="multiply">X</Button>
      </Row>
      <Row>
      <Button value="divide">/</Button>
      <Button value="clear">CE</Button>
      <Button value="solve">Enter</Button>
      </Row>
      </Container>
    </div>
    );
  }
}

export default App;
