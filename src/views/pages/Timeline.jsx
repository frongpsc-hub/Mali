


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
        name: "ryuntp",
        tel: "0873269511",
        email: "ryu_r@hotmail.com",
        totalfield: "3",
        totalwarranty: "1",
        details: 
          <Appuserinfo/>
        ,
      },
      {
        id: 1,
        name: "suthep",
        tel: "0837272626",
        email: "suthep@hotmail.com",
        totalfield: "4",
        totalwarranty: "1",
        details: <Appuserinfo/>,
      },
      {
        id: 4,
        name: "mali",
        tel: "0855555555",
        email: "mali@hotmail.com",
        totalfield: "2",
        totalwarranty: "1",
        details: (
          <Appuserinfo/>
        ),
      },
      {
        id: 7,
        name: "boss",
        tel: "0850493939",
        email: "bossposeidon@hotmail.com",
        totalfield: "2",
        totalwarranty: "1",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 11,
        name: "frong",
        tel: "0859203918",
        email: "frong@hotmail.com",
        totalfield: "1",
        totalwarranty: "1",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 3,
        name: "ice",
        tel: "0823234242",
        email: "ice@hotmail.com",
        totalfield: "1",
        totalwarranty: "1",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 2,
        name: "ailada",
        tel: "0983738282",
        email: "woww@hotmail.com",
        totalfield: "6",
        totalwarranty: "6",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 8,
        name: "bit",
        tel: "0928382828",
        email: "bit@hotmail.com",
        totalfield: "5",
        totalwarranty: "9",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 9,
        name: "sawan",
        tel: "0810202020",
        email: "sawan@hotmail.com",
        totalfield: "8",
        totalwarranty: "8",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 111,
        name: "sun",
        tel: "0869690929",
        email: "sunlnw@hotmail.com",
        totalfield: "3",
        totalwarranty: "3",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 333,
        name: "วิชัย",
        tel: "0983726354",
        email: "wichai@hotmail.com",
        totalfield: "2",
        totalwarranty: "2",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 123,
        name: "euei",
        tel: "0927461638",
        email: "reuei1998@gmail.com",
        totalfield: "1",
        totalwarranty: "2",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
    ],


    products2: [
      
      {
        id: 1,
        name: "suthep",
        tel: "0837272626",
        email: "suthep@hotmail.com",
        position: "ผู้ดูแลระบบ",
        status: "เปิดใช้งาน",
        manageuser: <Appuserinfo/>,
      },
      {
        id: 4,
        name: "mali",
        tel: "0855555555",
        email: "mali@hotmail.com",
        position: "ผู้ดูแลระบบ",
        status: "เปิดใช้งาน",
        manageuser: (
          <Appuserinfo/>
        ),
      },
      {
        id: 7,
        name: "boss",
        tel: "0850493939",
        email: "bossposeidon@hotmail.com",
        position: "ผู้ดูแลระบบ",
        status: "เปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 11,
        name: "frong",
        tel: "0859203918",
        email: "frong@hotmail.com",
        position: "ผู้ดูแลระบบ",
        status: "เปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 3,
        name: "ice",
        tel: "0823234242",
        email: "ice@hotmail.com",
        position: "เจ้าหน้าที่",
        status: "เปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 2,
        name: "ailada",
        tel: "0983738282",
        email: "woww@hotmail.com",
        position: "เจ้าหน้าที่",
        status: "ปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 8,
        name: "bit",
        tel: "0928382828",
        email: "bit@hotmail.com",
        position: "เจ้าหน้าที่",
        status: "ปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 9,
        name: "sawan",
        tel: "0810202020",
        email: "sawan@hotmail.com",
        position: "เจ้าหน้าที่",
        status: "ปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 111,
        name: "sun",
        tel: "0869690929",
        email: "sunlnw@hotmail.com",
        position: "เจ้าหน้าที่",
        status: "ปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 333,
        name: "วิชัย",
        tel: "0983726354",
        email: "wichai@hotmail.com",
        position: "เจ้าหน้าที่",
        status: "ปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
      {
        id: 123,
        name: "euei",
        tel: "0927461638",
        email: "reuei1998@gmail.com",
        position: "เจ้าหน้าที่",
        status: "ปิดใช้งาน",
        manageuser: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        ),
      },
    ],
  };

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
        dataField: "name",
        sort: true,
        text: "ชื่อ-สกุล",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 250
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
        dataField: "totalfield",
        sort: true,
        text: "จำนวนแปลง",
        editable: false,
        align :'center',
        headerAlign :'center',
      },
      {
        dataField: "totalwarranty",
        sort: true,
        text: "จำนวนการยื่นขอความช่วยเหลือ",
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
        dataField: "name",
        sort: true,
        text: "ชื่อ-สกุล",
        editable: false,
        align :'center',
        headerAlign :'center',
        headerStyle:{
          width : 250
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
        dataField: "position",
        sort: true,
        text: "สิทธิ์ผู้ใช้งาน",
        editable: false,
        align :'center',
        headerAlign :'center',
      },
      {
        dataField: "status",
        sort: true,
        text: "สถานะ",
        align :'center',
        headerAlign :'center',
        editor: {
          type: Type.SELECT,
          options: [
            { value: "เปิดใช้งาน", label: "เปิดใช้งาน" },
            { value: "ปิดใช้งาน", label: "ปิดใช้งาน" },
          ],
        }
      },
      {
        dataField: "manageuser",
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
                  <InputGroupAddon addonType="append">
                    <h4 style={{ paddingRight: 7 }}> ค้นหาจากตาราง </h4>
                    
                    <i
                      style={{ paddingTop: 3, paddingRight: 7 }}
                      className="nc-icon nc-zoom-split"
                      
                    />
                    
                  </InputGroupAddon>
                  
                  <SearchBar style={searchStyle} {...props.searchProps} />
                  <Adduser/>
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
                  <CardTitle tag="h2">การยื่นขอความช่วยเหลือ</CardTitle>
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
