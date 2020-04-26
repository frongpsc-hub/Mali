


import Select from "react-select";
import { NavLink } from "react-router-dom";
import React from "react";


import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Button,
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
  // for status option
  state = {
    selectedOption: "รอการอนุมัติ",
    shownumOp: 10,
    completeInf: "รอการอนุมัติ",
    products: [
      {
        id: 993,
        question: "ryuntp",
        ans: "0873269511",
        editdate: "2/2/2020",
        editby: "3",
        details: 
        <Button size="sm" variant="outlined" color="primary">
            ดูข้อมูล
        </Button>
        ,
      },
      {
        id: 1,
        question: "suthep",
        ans: "0837272626",
        editdate: "suthep@hotmail.com",
        editby: "4",
        details: <Button size="sm" variant="outlined" color="primary">
        ดูข้อมูล
    </Button>,
      },
      {
        id: 4,
        question: "mali",
        ans: "0855555555",
        editdate: "mali@hotmail.com",
        editby: "2",
        details: <Button size="sm" variant="outlined" color="primary">
        ดูข้อมูล
    </Button>
      },
      
    ]
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
  render() {
    const { selectedOption } = this.state;
    const { shownumOp } = this.state;
    const { completeInf } = this.state;

    const { SearchBar } = Search;

    const columns = [
      {
        dataField: "id",
        text: "ลำดับ",
        sort: true,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 80
        }
      },
      {
        dataField: "question",
        sort: true,
        text: "คำถาม",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 250
        }
      },
      {
        dataField: "ans",
        sort: true,
        text: "คำตอบ",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 400
        }
      },
      {
        dataField: "editdate",
        sort: true,
        text: "วันที่แก้ไข",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 100
        }
      },
      {
        dataField: "editby",
        sort: true,
        text: "แก้ไขโดย",
        editable: false,
        align :'center',
        headerAlign :'center',
      },
     
      {
        dataField: "details",
        align :'center',
        text: "จัดการข้อมูล",
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
          "คำถามทั้งหมด" + "(" + this.state.products.length + ")",
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
      
    ];

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">คำถามทั้งหมด</CardTitle>
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
