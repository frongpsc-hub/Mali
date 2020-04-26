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
import React from "react";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { Tab } from "semantic-ui-react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Adduser from "Modals/เพิ่มผู้ใช้งาน.jsx"
import Viewuser from "Modals/ดูข้อมูลผู้ใช้งาน.jsx"
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
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

  chartExample11,

} from "variables/charts.jsx";

const shownum = [
    { value: 10, label: "10" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];

const { ExportCSVButton } = CSVExport;
state = {   
    shownumOp: 10,
    products: [
      {
        ภาค: "ภาคเหนือ",
        จังหวัด: "ryuntp",
        ประเภทภัย: "0873269511",
        email: "ryu_r@hotmail.com",
        totalfield: "3",
        totalwarranty: "1",
        details: 
          
        ,
      },
      
    ],
}
class Dashboard extends React.Component {
  render() {
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
                      <i className="nc-icon nc-paper text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category" >การแจ้งรายงานทั้งหมด</p>
                        <CardTitle tag="p">982</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
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
                        
                        <CardTitle tag="p">861</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
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
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
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
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              
               
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
          <Row>
            <Col md="12">
            <Card>
                <CardHeader>
                  <CardTitle >
                  <h2 className="big-title5">สรุปสถิติการยื่นขอความช่วยเหลือในแต่ละจังหวัด</h2>

                  </CardTitle>
                </CardHeader>
            </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
