/*!

=========================================================
* Paper Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import axios from "axios"
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo from "assets/img/Artboard 15.png";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position : "",
      username:"",
      password:"",
      orgid:"0",
      link:"",
      

    }
    this.handleClick=this.handleClick.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
  handleClick = () =>{
    const datar = {email:this.state.email,passwd:this.state.password
    }

        axios({
        method: 'post',
        url: 'http://localhost:3001/api/v1/login',
        data: datar
      })
      .then(res => {
        console.log(res.data.data[0])
        if(res.data.code == "200"){
          this.setState({
            orgid:'1',
            status: "Online"
           
          })
      console.log(this.state.orgid)
        }
      })

  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })  

    console.log(this.state.email)
    
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  render() {

    console.log(this.state.orgid)
    if(this.state.status === 'Online'){

      return(
        <Redirect to="/admin/Dashboard" />
      );

  }
    return (
      <div className="login-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                    <img src={logo} alt="react-logo" width="auto" height="auto"/>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      name="email"
                      value={this.state.email}
                      placeholder="Email" 
                      type="text" 
                      onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                   
                   
                          
                          <NavLink to="" className="nav-link" >
                           ลืมรหัสผ่าน?
                          </NavLink>
                          
                        
                  </CardBody>
                  <CardFooter>
                  
                    <Button
                      block
                      className="btn-round mb-3"
                      color="success"
                      onClick={() => this.handleClick()}
                    >
                      เข้าสู่ระบบ
                    </Button>
                   
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/LoginImg.png")})`
          }}
        />
      </div>
    );
  }
}

export default Login;
