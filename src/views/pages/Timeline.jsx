import axios from 'axios';
import Select from "react-select";
import { NavLink } from "react-router-dom";
import React from "react";
import Appuserinfo from "Modals/ข้อมูลผู้ใช้งาน.jsx"

import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";

import { Tab } from "semantic-ui-react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Adduser from "Modals/เพิ่มผู้ใช้งาน.jsx"
import Viewuser from "Modals/ดูข้อมูลผู้ใช้งาน.jsx"
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
const claimres = [
  { value: "อนุมัติ", label: "อนุมัติ" },
  { value: "ไม่อนุมัติ", label: "ไม่อนุมัติ" },
  { value: "รอการอนุมัติ", label: "รอการอนุมัติ" },
];

const shownum = [
  { value: 10, label: "10" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

const completeInfo = [
  { value: "ข้อมูลครบ", label: "ข้อมูลครบ" },
  { value: "ข้อมูลไม่ครบ", label: "ข้อมูลไม่ครบ" },
  { value: "รอการอนุมัติ", label: "รอการอนุมัติ" },
];

const { ExportCSVButton } = CSVExport;

export default class RegularTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_users:0,
      num_war:0,
      num_warno:0,
      num_warwait:0,
      selectedOption: "รอการอนุมัติ",
    shownumOp: 10,
    completeInf: "รอการอนุมัติ",
    products: [],


    products2: [],
    }
  }
  componentDidMount() {
    // this.getAcceptedcount();
 
    this.getAppUserinfo();
    this.getWebUserinfo();

}
getAppUserinfo = () => {
  axios.get(`http://localhost:3001/api/v1/manageuser`)
      .then(res => {
      //console.log(res.data.Data)
      const product = res.data.Data.map(p => {
        p.details = <div><Appuserinfo uid={p.uid}/></div>
        return p
      })


      this.setState({ products: product });
      //console.log(this.state.products)
      })
}

getWebUserinfo = () => {
  axios.get(`http://localhost:3001/api/v1/managewebusers`)
      .then(res => {
      console.log(res.data.Data)
      const product2 = res.data.Data.map(p => {
        p.details = <div><Viewuser uid={p.uid}/></div>
        return p
      })


      this.setState({ products2: product2 });
      console.log(this.state.products2)
      })
}

  // for status option
 

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
  render() {
    const { selectedOption } = this.state;
    const { shownumOp } = this.state;
    const { completeInf } = this.state;

    const { SearchBar } = Search;

    const columns = [
      {
        dataField: "uid",
        text: "ลำดับ",
        sort: true,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 80
        }
      },
      {
        dataField: "fname",
        sort: true,
        text: "ชื่อ",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 125
        }
      },
      {
        dataField: "lname",
        sort: true,
        text: "สกุล",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 125
        }
      },
      {
        dataField: "tel",
        sort: true,
        text: "เบอร์โทร",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 120
        }
      },
      {
        dataField: "email",
        sort: true,
        text: "อีเมล",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 250
        }
      },
      {
        dataField: "fieldcount",
        sort: true,
        text: "จำนวนแปลง",
        editable: false,
        align :'center',
        headerAlign :'center',
      },
      {
        dataField: "warrantycount",
        sort: true,
        text: "จำนวนการรายงานความเสียหาย",
        editable: false,
        align :'center',
        headerAlign :'center',
      },
      {
        dataField: "details",
        align :'center',
        text: "ดูข้อมูล",
        editable: false,
        headerAlign :'center',
        csvExport: false,
      },
    ];

    const columns2 = [
      {
        dataField: "uid",
        text: "ลำดับ",
        sort: true,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 80
        }
      },
      {
        dataField: "fname",
        sort: true,
        text: "ชื่อ",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 125
        }
      },
      {
        dataField: "lname",
        sort: true,
        text: "สกุล",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 125
        }
      },
      {
        dataField: "tel",
        sort: true,
        text: "เบอร์โทร",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 120
        }
      },
      {
        dataField: "email",
        sort: true,
        text: "อีเมล",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 250
        }
      },
      {
        dataField: "role_name",
        sort: true,
        text: "สิทธิ์ผู้ใช้งาน",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 120
        }
      },
      {
        dataField: "disabled",
        sort: true,
        text: "สถานะ",
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 120
        },
        editor: {
          type: Type.SELECT,
          options: [
            { value: "เปิดใช้งาน", label: "เปิดใช้งาน" },
            { value: "ปิดใช้งาน", label: "ปิดใช้งาน" },
          ],
        }
      },
      {
        dataField: "details",
        align :'center',
        text: "จัดการผู้ใช้งาน",
        editable: false,
        headerAlign :'center',
        csvExport: false,
      },
    
    ];
    // const rowStyle = row => {
    //   return {
    //     backgroundColor: row.rightInfo == "ข้อมูลไม่ครบ" ? "red" : "blue"
    //   };
    // };
    const rowStyle2 = (row, rowIndex) => {
      const style = {};
      if (row.rightInfo == "ข้อมูลไม่ครบ") {
        style.backgroundColor = "#f08a84";
      }
      // if (row.id > 2) {
      //   style.backgroundColor = "#f08a84";
      // }
      return style;
    };
    const searchStyle = { width: 250 }; // search bar style

    const panes = [
        
      {
        menuItem:
          "ผู้ใช้งานบนแอปพลิเคชั่น" + "(" + this.state.products.length + ")",
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
                  <InputGroupAddon addonType="append">
                    <h4 style={{ paddingRight: 7 }}> ค้นหาจากตาราง </h4>
                    <i
                      style={{ paddingTop: 3, paddingRight: 7 }}
                      className="nc-icon nc-zoom-split"
                    />
                  </InputGroupAddon>
                  <SearchBar style={searchStyle} {...props.searchProps} />

                  <hr />
                  <BootstrapTable
                    rowStyle={rowStyle2}
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
                    <td style={{ paddingLeft: 550, paddingBottom: 35 }}>
                      <ExportCSVButton {...props.csvProps}>
                        Export CSV
                      </ExportCSVButton>
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
      {
        menuItem:
          "ผู้ใช้งานบนเว็บไซต์" + "(" + this.state.products2.length + ")",
        render: () => (
          <Tab.Pane>
            {" "}
            <ToolkitProvider
              keyField="id"
              data={this.state.products2}
              columns={columns2}
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
                  <Adduser/>
                  </Col>
                  </Row>
                  
                  

                  
                  <hr />
                  <BootstrapTable
                    rowStyle={rowStyle2}
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
                    <td style={{ paddingLeft: 550, paddingBottom: 35 }}>
                      <ExportCSVButton {...props.csvProps}>
                        Export CSV
                      </ExportCSVButton>
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
      
    ];

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">จัดการผู้ใช้งาน</CardTitle>
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
