import React from 'react'
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };


    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.log("handleSubmit")
    event.preventDefault();
    axios
      .post('http://localhost:5000/auth')
      .then(response => response.data)
      .then(data => {
        console.log("gg", data)
        this.setState({
          users: data,
        });
        console.log (users)
      })
      .catch(e=>console.log(e))
  }

  render() {
    return (
      <Form inlin style={{ margin : "auto"}} onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <button type="submit" value="se logger"/>
      </Form>
    );
  }
}

export default Admin;