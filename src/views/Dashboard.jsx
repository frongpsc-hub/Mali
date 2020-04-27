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
import axios from 'axios';
import React from "react";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import {  Pie } from "react-chartjs-2";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,

  UncontrolledTooltip
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample11,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8
} from "variables/charts.jsx";



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_users:0,
      num_war:0,
      num_warno:0,
      num_warwait:0
    }
  }
  componentDidMount() {
    // this.getAcceptedcount();
 
    this.getNumeberAppUser();
    this.getNumeberwar();
    this.getNumeberwarwait();
    this.getNumeberwarno();

}

  getNumeberAppUser = () => {
    axios.get(`http://localhost:3001/api/v1/countuser`)
        .then(res => {
        console.log(res.data.Data[0].count)
        this.setState({ num_users: res.data.Data[0].count });
        })
    }

  getNumeberwar = () => {
    axios.get(`http://localhost:3001/api/v1/countwarranty`, {headers: {"pid":1}})
        .then(res => {
         console.log(res.data.Data[0].count)
         this.setState({ num_war: res.data.Data[0].count});
        })
    }
  getNumeberwarno = () => {
    axios.get(`http://localhost:3001/api/v1/countwarranty`, {headers: {"pid":2}})
        .then(res => {
         console.log(res.data.Data[0].count)
         this.setState({ num_warno: res.data.Data[0].count});
        })
    } 
  getNumeberwarwait = () => {
    axios.get(`http://localhost:3001/api/v1/countwarranty`, {headers: {"pid":3}})
        .then(res => {
         console.log(res.data.Data[0].count)
         this.setState({ num_warwait: res.data.Data[0].count});
        })
    }     
  /*var request = new Request('http://localhost:3001/api/v1/countuser', {

    method: 'POST',
  });
  
  fetch(request)
    .then((res) => res.json())
    .then((res) => {
      // // console.log("num_user: " + JSON.stringify(responseJson));

      console.log(res)
      this.setState({ num_users: res });
    })
    .catch(function (err) {
      console.log(err);
    })*/


  render() {
    var n1=parseInt(this.state.num_war)
    var n2=parseInt(this.state.num_warno)
    var n3=parseInt(this.state.num_warwait)
    var Total=n1+n2+n3
    return (
      <>
        <div className="content">
          
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-single-02 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category" >ผู้ใช้งานทั้งหมด</p>
                        <CardTitle tag="p">{this.state.num_users}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <br></br>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="2" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-paper text-success" />
                      </div>
                    </Col>
                    <Col md="10" xs="7">
                      <div className="numbers">
                        <p className="card-category2 "  >การแจ้งรายงานความเสียหายทีผ่านยืนยัน</p>
                        <CardTitle tag="p">{this.state.num_war}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="stats">รายงานทั้งหมด</div>
                    </Col>
                    <Col sm="5">
                    <div className="stats" align="right">
                      {Total}
                      </div>
                    </Col>
                  </Row>

                  
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="2" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-paper text-warning" />
                      </div>
                    </Col>
                    <Col md="10" xs="7">
                      <div className="numbers">
                        <p className="card-category2">การแจ้งรายงานความเสียหายทีไม่ผ่านยืนยัน</p>
                        <CardTitle tag="p">{this.state.num_warno}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="stats">รายงานทั้งหมด</div>
                    </Col>
                    <Col sm="5">
                    <div className="stats" align="right">
                      {Total}
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="2" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-paper text-danger" />
                      </div>
                    </Col>
                    <Col md="10" xs="8">
                      <div className="numbers">
                        <p className="card-category2">การแจ้งรายงานความเสียหายทีรอการการยืนยัน</p>
                        <CardTitle tag="p">{this.state.num_warwait}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="stats">รายงานทั้งหมด</div>
                    </Col>
                    <Col sm="5">
                    <div className="stats" align="right">
                      {Total}
                    </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col lg="6" sm="6">
              <Card>
              <CardHeader>
                  
                  </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                  สถิติจํานวนสมาชิกในแอปพลิเคชั่น
                  </h6>
                  <Line
                    data={chartExample1.data}
                    options={chartExample1.options}
                    height={380}
                    width={826}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">{this.state.num_users}</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="success" pill>
                          +18%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" sm="6">
              <Card>
                <CardHeader>
                  
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                  สถิติการยื่นขอความช่วยเหลือทั้งหมด
                  </h6>
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                    height={380}
                    width={828}
                  />
                </CardBody>
                <CardFooter>
                  <hr /> 
                  <Row>
                    <Col sm="">
                      <div className="numbers pull-left">{Total}</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="danger" pill>
                          -14%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle ></CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <h6 className="big-title">สถิติการยื่นขอความช่วยเหลือในแต่ละภูมิภาคของไทย</h6>
                      <Row>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                          <h6 className="big-title2">ภูมิภาคของไทย</h6>
                          <h6 className="big-title3">ภาคเหนือ</h6>
                          <h6 className="big-title3">ภาคตะวันออกเฉียงเหนือ</h6>
                          <h6 className="big-title3">ภาคตะวันตก</h6>
                          <h6 className="big-title3">ภาคกลาง</h6>
                          <h6 className="big-title3">ภาคตะวันออก</h6>
                          <h6 className="big-title3">ภาคใต้</h6>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                          <h6 className="big-title2">%</h6>
                          <h6 className="big-title4">12</h6>
                          <h6 className="big-title4">16</h6>
                          <h6 className="big-title4">28</h6>
                          <h6 className="big-title4">15</h6>
                          <h6 className="big-title4">18</h6>
                          <h6 className="big-title4">11</h6>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="ml-auto mr-auto" md="6">
                    <Pie
                    data={chartExample11.data}
                    options={chartExample11.options}
                    width={456}
                    height={300}
                    />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        </div>
      </>
    );
  }
}

export default Dashboard;
