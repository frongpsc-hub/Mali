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


const Chart = require("chart.js");
Chart.pluginService.register({
  beforeDraw: function(chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || "Arial";
      var txt = centerConfig.text;
      var color = centerConfig.color || "#000";
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
      //Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = chart.innerRadius * 2;

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

// default color for the charts
let chartColor = "#FFFFFF";

// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
const data1=[]
const data2=[]
const data3=[]
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_users:0,
      num_war:0,
      num_warno:0,
      num_warwait:0,
      data1:[],
      data2:[],
      data3:[]
    }
  }
  componentDidMount() {
    // this.getAcceptedcount();
 
    this.getNumeberAppUser();
    this.getNumeberwar();
    this.getNumeberwarwait();
    this.getNumeberwarno();
    this.getChart1();
    this.getChart2();
    this.getChart3();
}

  getNumeberAppUser = () => {
    axios.get(`http://localhost:3001/api/v1/countuser`)
        .then(res => {
        //console.log(res.data.Data[0].count)
        this.setState({ num_users: res.data.Data[0].count });
        })
    }

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
  getChart1 = () => {
    axios.get(`http://localhost:3001/api/v1/chartusers`)
        .then(res => {
         console.log(res.data.Data)
         res.data.Data.map((item, key) => {        
            data1.push(item.count)
          
         //this.setState({ num_warwait: res.data.Data[0].count});
        })
        this.setState({ data1: data1 });
        console.log(data1)
    })    
  }
  getChart2 = () => {
    axios.get(`http://localhost:3001/api/v1/chartwarranty`)
        .then(res => {
         console.log(res.data.Data)
         res.data.Data.map((item, key) => {        
            data2.push(item.count)
          
         //this.setState({ num_warwait: res.data.Data[0].count});
        })
        this.setState({ data2: data2 });
        console.log(data2)
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
    console.log(this.state.num_users)
    console.log(this.state.data1)
    const { data1 } = this.state;
    const { data2 } = this.state;
    const { data3 } = this.state;
    var Tp=parseInt(data3[0])+parseInt(data3[1])+parseInt(data3[2])+parseInt(data3[3])+parseInt(data3[4])+parseInt(data3[5])
    var p1=((parseInt(data3[0])*100)/Tp).toFixed( 2 )
    var p2=((parseInt(data3[1])*100)/Tp).toFixed( 2 )
    var p3=((parseInt(data3[2])*100)/Tp).toFixed( 2 )
    var p4=((parseInt(data3[3])*100)/Tp).toFixed( 2 )
    var p5=((parseInt(data3[4])*100)/Tp).toFixed( 2 )
    var p6=((parseInt(data3[5])*100)/Tp).toFixed( 2 )
    console.log(Tp)
 
    const chartExample1 = {
  
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Active Users",
            borderColor: "#6bd098",
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            borderWidth: 3,
            data: data1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
    
        tooltips: {
          enabled: false
        },
    
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5
                //padding: 20
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
                zeroLineColor: "transparent",
                display: false
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }
          ]
        }
      }
    };
    const chartExample2 = {
      data: canvas => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#18ce0f");
        gradientStroke.addColorStop(1, chartColor);
    
        let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
        return {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          datasets: [
            {
              label: "Email Stats",
              borderColor: "#ef8156",
              pointHoverRadius: 0,
              pointRadius: 0,
              fill: false,
              backgroundColor: gradientFill,
              borderWidth: 3,
              data: data2
            }
          ]
        };
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5
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
                zeroLineColor: "transparent",
                display: false
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }
          ]
        }
      }
    };
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
          
        </div>
      </>
    );
  }
}

export default Dashboard;
