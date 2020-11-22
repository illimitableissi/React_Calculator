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
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>+</Button>
      </Row>
      <Row>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>-</Button>
      </Row>
      <Row>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>*</Button>
      </Row>
      <Row>
      <Button>/</Button>
      <Button>CE</Button>
      <Button>Enter</Button>
      </Row>
      </Container>
    </div>
    );
  }
}

export default App;
