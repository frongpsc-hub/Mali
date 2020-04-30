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
import axios from "axios";
import React from "react";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { Tab } from "semantic-ui-react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";

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
  InputGroupAddon,

  UncontrolledTooltip
} from "reactstrap";

const shownum = [
    { value: 10, label: "10" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];

  

const { ExportCSVButton } = CSVExport;
const data3=[]

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownumOp: 10,
      num_war:0,
      num_warno:0,
      num_warwait:0,
      data3:[],
      products: [],
    }
  }
  componentDidMount() {
    // this.getAcceptedcount();
 
    this.getNumeberwar();
    this.getNumeberwarwait();
    this.getNumeberwarno();
    this.getChart3();
    this.getreport();
   
}
getreport = () => {
  axios.get(`http://localhost:3001/api/v1/reporttable`)
      .then(res => {
      //console.log(res.data.Data)

      this.setState({ products: res.data.Data });
      //console.log(this.state.products)
      })
}

handleChange = ({ selectedOption }) => {
  this.setState({ selectedOption });
  // console.log(`Option selected:`, selectedOption);
};


ShownumhandleChange = ({ shownumOp }) => {
  this.setState({ shownumOp });
  // console.log(`Option selected:`, shownumOp);
};

CompleteInfohandleChange = ({ completeInf }) => {
  console.log("eiei");

  this.setState({ completeInf });
  console.log(`Option selected:`, completeInf);
};

afterSave = () => {};


getNumeberwar = () => {
  axios.get(`http://localhost:3001/api/v1/countwarranty`, {headers: {"pid":1}})
      .then(res => {
       //console.log(res.data.Data[0].count)
       this.setState({ num_war: res.data.Data[0].count});
      })
  }
getNumeberwarno = () => {
  axios.get(`http://localhost:3001/api/v1/countwarranty`, {headers: {"pid":2}})
      .then(res => {
       //console.log(res.data.Data[0].count)
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
  getChart3 = () => {
    axios.get(`http://localhost:3001/api/v1/chartprovincial`)
        .then(res => {
         console.log(res.data.Data)
         res.data.Data.map((item, key) => {        
            data3.push(item.count)
          
         //this.setState({ num_warwait: res.data.Data[0].count});
        })
        this.setState({ data3: data3});
        console.log(data3)
    })    
  }

  render() {
    
    var n1=parseInt(this.state.num_war)
    var n2=parseInt(this.state.num_warno)
    var n3=parseInt(this.state.num_warwait)
    var Total=n1+n2+n3
    const { data3 } = this.state;
    var Tp=parseInt(data3[0])+parseInt(data3[1])+parseInt(data3[2])+parseInt(data3[3])+parseInt(data3[4])+parseInt(data3[5])
    var p1=((parseInt(data3[0])*100)/Tp).toFixed( 2 )
    var p2=((parseInt(data3[1])*100)/Tp).toFixed( 2 )
    var p3=((parseInt(data3[2])*100)/Tp).toFixed( 2 )
    var p4=((parseInt(data3[3])*100)/Tp).toFixed( 2 )
    var p5=((parseInt(data3[4])*100)/Tp).toFixed( 2 )
    var p6=((parseInt(data3[5])*100)/Tp).toFixed( 2 )
    const chartExample11 = {
      data: {
        labels: ["ภาคกลาง",  "ภาคตะวันตก", "ภาคตะวันออก","ภาคตะวันออกเฉียงเหนือ","ภาคเหนือ" ,"ภาคใต้"],
        datasets: [
          {
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468","#555988","#888455","#885559"],
            borderWidth: 0,
            data: [p1,p2,p3,p4,p5,p6]
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        tooltips: {
          enabled: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: "rgba(255,255,255,0.05)"
              }
            }
          ],
          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(255,255,255,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false
              }
            }
          ]
        }
      }
    };
    const { SearchBar } = Search;

    const columns = [
      {
        dataField: "provincial",
        text: "ภาค",
        sort: true,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 200
        }
      },
      {
        dataField: "province_t",
        sort: true,
        text: "จังหวัด",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 200
        }
      },
      {
        dataField: "disaster_nameth",
        sort: true,
        text: "ประเภทภัย",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 200
        }
      },
      {
        dataField: "count",
        sort: true,
        text: "ทั้งหมด",
        editable: false,
        align :'center',
        headerAlign :'center',
        
      },
      
      {
        dataField: "pass",
        sort: true,
        text: "ยืนยัน",
        editable: false,
        align :'center',
        headerAlign :'center',
       
      },
      {
        dataField: "waiting",
        sort: true,
        text: "รอการยืนยัน",
        editable: false,
        align :'center',
        headerAlign :'center',
       
      },
      {
        dataField: "missingdata",
        sort: true,
        text: "ข้อมูลไม่ครบ",
        editable: false,
        align :'center',
        headerAlign :'center',
      },
      {
        dataField: "fail",
        sort: true,
        text: "ไม่ยืนยัน",
        editable: false,
        align :'center',
        headerAlign :'center',
      },
    
    ];

    
    const searchStyle = { width: 250 }; // search bar style

    const panes = [
        
      {
        menuItem:
          "สถิติการยื่นขอความช่วยเหลือรายภูมิภาคของไทย" ,
        render: () => (
          <Tab.Pane>
            {" "}
            <ToolkitProvider
              keyField="id"
              data={this.state.products}
              columns={columns}
              search
              exportCSV={{
                fileName: "custom.csv",
                exportAll: false,
              }}
            >
              {(props) => (
                <div>
                  <Row>
                  <Col sm="6">
                  <InputGroupAddon addonType="append">
                    <h4 style={{ paddingRight: 7 }}> ค้นหาจากตาราง </h4>
                    <i
                      style={{ paddingTop: 3, paddingRight: 7 }}
                      className="nc-icon nc-zoom-split"
                    />
                    
                  </InputGroupAddon>
                  <SearchBar style={searchStyle} {...props.searchProps} />
                  </Col>
                  <Col sm="6" align="right">
                  <ExportCSVButton {...props.csvProps}>
                        Export CSV
                      </ExportCSVButton>
                  </Col>
                  </Row>
                  
                  <hr />
                  <BootstrapTable
                  
                    onDataSizeChange={this.handleDataChange}
                    striped
                    pagination={paginationFactory()}
                    cellEdit={cellEditFactory({
                      mode: "click",
                      blurToSave: true,
                      afterSaveCell: (oldValue, newValue, row, column) => {
                        // let ind = this.state.products.findIndex(function (
                        //   item,
                        //   i
                        // ) {
                        // console.log("=====> ", row.id, row.rightInfo);
                        this.setState((prevState) => ({
                          row: {
                            ...prevState.row,
                            [row.manageuser]: newValue,
                          },
                        }));
                        console.log("=====> ", row.id, row.manageuser);
                        // });
                        // this.state.products.rightInfo[row] = newValue;
                        // this.state.products[ind] = newValue;
                        // console.log("old ==>", row.id);
                        // this.setState({ rightInfo: newValue });
                      },
                    })}
                    {...props.baseProps}
                  />
                  <tr>
                    <td>
                      แสดงจากข้อมูลทั้งหมด {this.state.products.length} แถว
                    </td>
                   
                  </tr>
                </div>
              )}
              {/* <BootstrapTable
              responsive
              striped
              pagination={paginationFactory()}
              keyField="id"
              data={products}
              columns={columns}
              
            /> */}
            </ToolkitProvider>
          </Tab.Pane>
        ),
      },
    ]

    
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
                        <CardTitle tag="p">{Total}</CardTitle>
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
                        
                        <CardTitle tag="p">{n1}</CardTitle>
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
                        <CardTitle tag="p">{n2}</CardTitle>
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
                        <CardTitle tag="p">{n3}</CardTitle>
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
                        <Col sm={{ size: 'auto', offset: 1 }}>
                          <h6 className="big-title2">ภูมิภาคของไทย</h6>
                          <h6 className="big-title3">ภาคกลาง</h6>
                          <h6 className="big-title3">ภาคตะวันตก</h6>
                          <h6 className="big-title3">ภาคตะวันออก</h6>
                          <h6 className="big-title3">ภาคตะวันออกเฉียงเหนือ</h6>
                          <h6 className="big-title3">ภาคเหนือ</h6>
                          <h6 className="big-title3">ภาคใต้</h6>
                          <h6 className="big-title3">รวม</h6>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                          <h6 className="big-title2">จำนวนราย</h6>
                          <h6 className="big-title4">{data3[0]}</h6>
                          <h6 className="big-title4">{data3[1]}</h6>
                          <h6 className="big-title4">{data3[2]}</h6>
                          <h6 className="big-title4">{data3[3]}</h6>
                          <h6 className="big-title4">{data3[4]}</h6>
                          <h6 className="big-title4">{data3[5]}</h6>
                          <h6 className="big-title4">{Tp}</h6>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                          <h6 className="big-title2">%</h6>
                          <h6 className="big-title4">{p1}</h6>
                          <h6 className="big-title4">{p2}</h6>
                          <h6 className="big-title4">{p3}</h6>
                          <h6 className="big-title4">{p4}</h6>
                          <h6 className="big-title4">{p5}</h6>
                          <h6 className="big-title4">{p6}</h6>
                          <h6 className="big-title4">100%</h6>
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
                  <h2 className="big-title5">สถิติการยื่นขอความช่วยเหลือรายภูมิภาคของไทย</h2>
                  
                  </CardTitle>
                </CardHeader>
                <CardBody className="table-full-width table-hover">
                  <Tab panes={panes} />
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
