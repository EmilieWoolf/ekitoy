import React from 'react'
import axios from 'axios';
import { Button ,Form, FormGroup, Label, Input } from 'reactstrap';
import ModalProfileConnection from '../components/ModalProfileConnection'

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '' ,
      email : "",
      password : "",
    };
}

  handleEmailChange = (event) => {
    this.setState ({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState ({
      password : event.target.value
    })
  }
  handleSubmit = (event) => {
    console.log("handleSubmit")
    event.preventDefault();
    axios
      .post('http://localhost:5000/auth',{
        email: this.state.email,
        password: this.state.password,
      } )
      .then(response => response.data)
      .then(data => {
        alert ('Connect');
        console.log("gg", data)
        this.setState({
          users: data,
        });
        console.log ("users" , data)
      })
      .catch(e=>console.log(e))
  }

  render() {
    return (
      <Form inlin style={{ margin : "auto"}} onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange = {this.handleEmailChange}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" onChange = {this.handlePasswordChange}/>
        </FormGroup>
        <Button type="submit" value="se logger" style = {{ background : "#9600fa"}}> Login </Button>
        <ModalProfileConnection/>
      </Form>
    );
  }
}

export default Admin;