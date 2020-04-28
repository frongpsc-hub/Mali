
import CustomizedDialogs from './warrantyinfo';
import axios from 'axios';
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
    products: [],
    products2: [],
    products3: [],
    products4: [],
  };
  componentDidMount() {
    // this.getAcceptedcount();
 
    this.getAllwar();
    this.getPasswar();
    this.getNowar();
    this.getWaitwar();
    

}
  getAllwar = () => {
    axios.get(`http://localhost:3001/api/v1/allwarrantytable`)
        .then(res => {
        //console.log(res.data)
        const product = res.data.Data.map(p => {
          p.details = <div><CustomizedDialogs uid={p.warranty_id}/></div>
          return p
        })
  
  
        this.setState({ products: product });
        //console.log(this.state.products)
        })
  }
   getPasswar = () => {
    axios.get(`http://localhost:3001/api/v1/warrantytable`, {headers: {"pid": 1}})
        .then(res => {
        console.log(res.data)
        const product2 = res.data.Data.map(p => {
          p.details = <div><CustomizedDialogs uid={p.warranty_id}/></div>
          return p
        })
  
  
        this.setState({ products2: product2 });
        console.log(this.state.products2)
        })
  }
  getNowar = () => {
    axios.get(`http://localhost:3001/api/v1/warrantytable`, {headers: {"pid": 2}})
        .then(res => {
        console.log(res.data)
        const product3 = res.data.Data.map(p => {
          p.details = <div><CustomizedDialogs uid={p.warranty_id}/></div>
          return p
        })
  
  
        this.setState({ products3: product3 });
        console.log(this.state.products3)
        })
  }
  getWaitwar = () => {
    axios.get(`http://localhost:3001/api/v1/warrantytable`, {headers: {"pid": 3}})
        .then(res => {
        console.log(res.data)
        const product4 = res.data.Data.map(p => {
          p.details = <div><CustomizedDialogs uid={p.warranty_id}/></div>
          return p
        })
  
  
        this.setState({ products4: product4 });
        console.log(this.state.products4)
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
  render() {
    const { selectedOption } = this.state;
    const { shownumOp } = this.state;
    const { completeInf } = this.state;

    const { SearchBar } = Search;

    const columns = [
      {
        dataField: "warranty_id",
        text: "ลำดับ",
        align :'center',
        sort: true,
        headerAlign :'center',
        headerStyle:{
          width : 80
        }
      },
      {
        dataField: "warranty_fname",
        sort: true,
        align :'center',
        text: "ชื่อ",
        headerAlign :'center',
        editable: false,
        headerStyle:{
          width : 100
        }
      },
      {
        dataField: "warranty_lname",
        sort: true,
        align :'center',
        text: "สกุล",
        headerAlign :'center',
        editable: false,
        headerStyle:{
          width : 100
        }
      },
      {
        dataField: "tel",
        sort: true,
        align :'center',
        text: "เบอร์โทร",
        headerAlign :'center',
        editable: false,
        headerStyle:{
          width : 100
        }
      },
      {
        dataField: "email",
        sort: true,
        align :'center',
        text: "อีเมล",
        headerAlign :'center',
        editable: false,
        headerStyle:{
          width : 200
        }
      },
      {
        dataField: "disaster_nameth",
        sort: true,
        align :'center',
        text: "ประเภทภัย",
        headerAlign :'center',
        editable: false,
        headerStyle:{
          width : 140
        }
      },
      {
        dataField: "province_t",
        sort: true,
        align :'center',
        text: "จังหวัด",
        headerAlign :'center',
        editable: false,
        headerStyle:{
          width : 80
        }
      },
      {
        dataField: "status_name",
        sort: true,
        align :'center',
        text: "ผลการตรวจสอบ",
        headerAlign :'center',
        editor: {
          type: Type.SELECT,
          options: [
            { value: "ยืนยัน", label: "ยืนยัน" },
            { value: "ไม่ยืนยัน", label: "ไม่ยืนยัน" },
            { value: "รอการยืนยัน", label: "รอการยืนยัน" },
          ],
        },
      },
      {
        dataField: "full_name",
        sort: true,
        align :'center',
        text: "ข้อมูลครบถ้วน",
        editable: false,
        headerAlign :'center',
        headerStyle:{
          width : 130
        }
        
      },
      {
        dataField: "details",
        text: "ดูข้อมูล",
        headerAlign :'center',
        align :'center',
        editable: false,
        csvExport: false,
        headerStyle:{
          width : 110
        }
      },
      
    ];

  
    // const rowStyle = row => {
    //   return {
    //     backgroundColor: row.rightInfo == "ข้อมูลไม่ครบ" ? "red" : "blue"
    //   };
    // };
    const rowStyle2 = (row, rowIndex) => {
      const style = {};
      if (row.full_name == "ข้อมูลไม่ครบ") {
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
        menuItem: "ทั้งหมด" + "(" + this.state.products.length + ")",
        render: () => (<Tab.Pane>
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
                          [row.rightInfo]: newValue,
                        },
                      }));
                      console.log("=====> ", row.id, row.rightInfo);
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
          "ยืนยัน" + "(" + this.state.products2.length + ")",
        render: () => (
          <Tab.Pane>
            {" "}
            <ToolkitProvider
              keyField="id"
              data={this.state.products2}
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
                            [row.rightInfo]: newValue,
                          },
                        }));
                        console.log("=====> ", row.id, row.rightInfo);
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
                      แสดงจากข้อมูลทั้งหมด {this.state.products2.length} แถว
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
        menuItem: "ไม่ผ่านการยืนยัน"+ "(" + this.state.products3.length + ")",
        render: () => 
        <Tab.Pane>
            {" "}
            <ToolkitProvider
              keyField="id"
              data={this.state.products3}
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
                            [row.rightInfo]: newValue,
                          },
                        }));
                        console.log("=====> ", row.id, row.rightInfo);
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
                      แสดงจากข้อมูลทั้งหมด {this.state.products3.length} แถว
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
          </Tab.Pane>,
      },
      {
        menuItem: "รอการยืนยัน"+ "(" + this.state.products4.length + ")",
        render: () => <Tab.Pane>
        {" "}
        <ToolkitProvider
          keyField="id"
          data={this.state.products4}
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
                        [row.rightInfo]: newValue,
                      },
                    }));
                    console.log("=====> ", row.id, row.rightInfo);
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
                  แสดงจากข้อมูลทั้งหมด {this.state.products4.length} แถว
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
      </Tab.Pane>,
      },
    ];

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">การแจ้งรายงานความเสียหาย</CardTitle>
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
