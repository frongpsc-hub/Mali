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
import avatar from "assets/img/faces/ayo-ogunseinde-2.jpg";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  
                </div>
                <CardBody>
                  <div className="author">
                   
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={avatar}
                      />
                      <h5 className="title"></h5>
                    
                    <p className="description"></p>
                  </div>
                  <p className="description text-center">
                  <Button color="danger">แก้ไขรูปภาพ</Button>{' '}
                  </p>
                  
                </CardBody>
                
              </Card>
              
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">ข้อมูลผู้ใช้งาน</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>สิทธิ์ผู้ใช้งาน</label>
                          <Input
                            defaultValue="ผู้ดูแลระบบ"
                            disabled
                            placeholder="สิทธิ์ผู้ใช้งาน"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>ชื่อ</label>
                          <Input
                            defaultValue="น้องมะลิซ้อน"
                            placeholder="ชื่อ"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>นามสกุล</label>
                          <Input
                            defaultValue="ประกันวินาศภัย"
                            placeholder="นามสกุล"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row> 
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>เบอร์โทร</label>
                          <Input
                            defaultValue="081-234-5679"
                            placeholder="เบอร์โทร"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>อีเมล</label>
                          <Input
                            defaultValue="infuse@hotmail.com"
                            placeholder="อีเมล"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>                                 
                      
                                        
                    <Col className="text-center text-md-right">
                      <Button color="success">แก้ไขข้อมูล</Button>{' '}
                    </Col>
                      
                      
                    </Row>
                    
                    
                   
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
