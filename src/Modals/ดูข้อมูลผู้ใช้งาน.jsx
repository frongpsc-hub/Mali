import React, { Component } from 'react';
import { withStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from '@material-ui/core/Typography';
import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";
import { Button,Row,Col,CardBody,Card,FormGroup,Input,Label,CardHeader,Form} from 'reactstrap';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#76ff03'),
    backgroundColor: '#76ff03',
    '&:hover': {
      backgroundColor: '#64dd17',
    },
  },
}))(Button);


const styles = (theme) => ({
  root: {
    margin: 13,
    padding: theme.spacing(2),
   
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

class Viewuser extends Component {
  constructor () {
    super()

    this.state = {
      position :'A',
      showModal:false,
      showEdit:false
      
    }
    this.onChange=this.onChange.bind(this)
    this.handleClickOpen=this.handleClickOpen.bind(this)
    this.handleClickClose=this.handleClickClose.bind(this)
    this.edituser=this.edituser.bind(this)
  }
  componentDidMount() {
   

}
    onChange(event){
    this.setState({
      position : event.target.value
    })
    }
    handleClickOpen = () =>{
      this.setState({
        showModal:true,
        position : 'A'
      })
    }
    handleClickClose = () =>{
      this.setState({
        showModal:false,
        showEdit:false
      })
    }
    edituser = () =>{
        this.setState({
          showModal:false,
          showEdit:true,
          position : 'A'
          
        })
      }
  render(){
    const uid=this.props.uid
    const { classes } = this.props;
    const DialogTitle = withStyles(styles)((props) => {
      const { children, classes, onClose, ...other } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h5">{children}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={this.handleClickClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      );
    });
    
    const positionedit = this.state.position;
    let form;
    if (positionedit == 'A')
    {
      form =
      <div>
      <div >
      <Row>
          
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>ชื่อ {uid}</label>
            <Input
            disabled
              defaultValue=""
              placeholder="ชื่อ"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>นามสกุล</label>
            <Input
            disabled
              defaultValue=""
              placeholder="นามสกุล"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row> 
      </div>
      <div>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>เบอร์โทร</label>
            <Input
            disabled
              defaultValue=""
              placeholder="เบอร์โทร"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>อีเมล</label>
            <Input
            disabled
              defaultValue=""
              placeholder="อีเมล"
              type="text"
            />
          </FormGroup>
        </Col>
        
      </Row>
      
      </div>
      </div>
    }
    else{
      form =
      <div>
      <div >
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>ชื่อ</label>
            <Input
            disabled
              defaultValue=""
              placeholder="ชื่อ"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>นามสกุล</label>
            <Input
            disabled
              defaultValue=""
              placeholder="นามสกุล"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row> 
      </div>
      <div>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>เบอร์โทร</label>
            <Input
              disabled
              defaultValue=""
              placeholder="เบอร์โทร"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>อีเมล</label>
            <Input
            disabled
              defaultValue=""
              placeholder="อีเมล"
              type="text"
            />
          </FormGroup>
        </Col>
        
      </Row>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>สำนักงาน ธ.ก.ส.</label>
            <Input type="select" name="select" id="exampleSelect" disabled>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>        
            </Input>
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>สาขา ธ.ก.ส.</label>
            <Input type="select" name="select" id="exampleSelect" disabled>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>        
            </Input>
          </FormGroup>
        </Col>
        
      </Row>
      
      </div>
      </div>
    }

    const position = this.state.position;
    let formedit;
    if (position == 'A')
    {
        formedit =
      <div>
      <div >
      <Row>
          
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>ชื่อ</label>
            <Input
            
              defaultValue=""
              placeholder="ชื่อ"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>นามสกุล</label>
            <Input
            
              defaultValue=""
              placeholder="นามสกุล"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row> 
      </div>
      <div>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>เบอร์โทร</label>
            <Input
            
              defaultValue=""
              placeholder="เบอร์โทร"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>อีเมล</label>
            <Input
            
              defaultValue=""
              placeholder="อีเมล"
              type="text"
            />
          </FormGroup>
        </Col>
        
      </Row>
      
      </div>
      </div>
    }
    else{
      formedit =
      <div>
      <div >
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>ชื่อ</label>
            <Input
            
              defaultValue=""
              placeholder="ชื่อ"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>นามสกุล</label>
            <Input
            
              defaultValue=""
              placeholder="นามสกุล"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row> 
      </div>
      <div>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>เบอร์โทร</label>
            <Input
              
              defaultValue=""
              placeholder="เบอร์โทร"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>อีเมล</label>
            <Input
            
              defaultValue=""
              placeholder="อีเมล"
              type="text"
            />
          </FormGroup>
        </Col>
        
      </Row>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>สำนักงาน ธ.ก.ส.</label>
            <Input type="select" name="select" id="exampleSelect" >
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>        
            </Input>
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>สาขา ธ.ก.ส.</label>
            <Input type="select" name="select" id="exampleSelect" >
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>        
            </Input>
          </FormGroup>
        </Col>
        
      </Row>
      
      </div>
      </div>
    }


  return (
    <div>
      <Button size="sm"  color="primary" onClick={this.handleClickOpen} icon="nc-icon nc-badge">
      <i className="nc-icon nc-single-02" />
        ดูข้อมูล
      </Button>
      <Button size="sm" color="success" onClick={this.edituser}>
      <i className="nc-icon nc-settings" />
        แก้ไข
      </Button>
      <Button size="sm" color="danger" >
      <i className="nc-icon nc-simple-remove" />
        ลบ
      </Button>
      <Dialog 
      
          fullWidth='md'
          aria-labelledby="max-width-dialog-title" 
          open={this.state.showModal}
          onClose={this.handleClickClose}
          maxWidth = 'md'
      >
        <DialogTitle 
          id="customized-dialog-title" 
          onClose={this.handleClickClose}
          >
          ข้อมูลผู้ใช้งาน
               
        </DialogTitle>
        <DialogContent dividers>
        
        
          <div>
            
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
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title"></h5>
                    
                    <p className="description"></p>
                  </div>
                  <p className="description text-center">
                  <Button color="success" onClick={this.edituser}>แก้ไขข้อมูล</Button>{' '}
                  </p>
                  <p className="description text-center">
                  <Button color="danger">รีเซ็ตรหัสผ่าน</Button>{' '}
                  </p>
                </CardBody>
                
              </Card>
              
            </Col>
            <Col md="8">
              <Card>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>สิทธิ์ผู้ใช้งาน</label>
                          <Input type="select" name="select" id="exampleSelect" onChange={this.onChange} >
                            <option value='A'>ผู้ดูแลระบบ</option>
                            <option value='B'>เจ้าหน้าที่</option>
                            <option value='A'>ผู้ใช้งานทั่วไป</option>
                            
                        </Input>
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    
                    {form}
                   
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
        
        
        </DialogContent>
        <DialogActions>

        <Button  onClick={() => this.handleClickClose()}  color="secondary">
          ยกเลิก
        </Button>

        <Button  onClick={() => this.handleClickClose()}  color='success'>
         บันทึก
        </Button>

        </DialogActions>
      </Dialog>



            <Dialog 
      
          fullWidth='md'
          aria-labelledby="max-width-dialog-title" 
          open={this.state.showEdit}
          onClose={this.handleClickClose}
          maxWidth = 'md'
      >
        <DialogTitle 
          id="customized-dialog-title" 
          onClose={this.handleClickClose}
          >
          ข้อมูลผู้ใช้งาน
               
        </DialogTitle>
        <DialogContent dividers>
        
        
          <div>
            
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
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title"></h5>
                    
                    <p className="description"></p>
                  </div>
                  <p className="description text-center">
                  <Button color="danger" >อัพโหลดรูป</Button>{' '}
                  </p>
                  
                </CardBody>
                
              </Card>
              
            </Col>
            <Col md="8">
              <Card>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>สิทธิ์ผู้ใช้งาน</label>
                          <Input type="select" name="select" id="exampleSelect" onChange={this.onChange} >
                            <option value='A'>ผู้ดูแลระบบ</option>
                            <option value='B'>เจ้าหน้าที่</option>
                            <option value='A'>ผู้ใช้งานทั่วไป</option>
                            
                        </Input>
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    
                    {formedit}
                   
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
        
        
        </DialogContent>
        <DialogActions>

        <Button  onClick={() => this.handleClickClose()}  color="secondary">
          ยกเลิก
        </Button>

        <Button  onClick={() => this.handleClickClose()}  color='success'>
         บันทึก
        </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default withStyles(modalStyle)(Viewuser);