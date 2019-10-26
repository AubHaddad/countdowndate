import React, { Component } from 'react';
import Clock from './Clock'
import './App.css'
import { Form, Button, Container, Row, Col} from 'react-bootstrap';

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            deadline : 'November 11, 2019',
            NewDeadline: ''
        }
    }

    changeDeadline(){

        this.setState({deadline : this.state.NewDeadline});
        
    }

    render(){
        return (
            <div className="App">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <div className="App-title">
                                CountDown to {this.state.deadline}
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Clock
                                deadline={this.state.deadline}
                            />
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form inline>
                                <Form.Control
                                    className="deadline-input"
                                    placeholder='new Date'
                                    onChange={event => this.setState({ NewDeadline: event.target.value })}

                                />
                                <Button onClick={() => this.changeDeadline()}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                
                
                
            </div>
        )
        
    }
}

export default App;