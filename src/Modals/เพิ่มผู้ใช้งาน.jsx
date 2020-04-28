import React, { Component } from 'react';
import { withStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
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

class Adduser extends Component {
  constructor () {
    super()

    this.state = {
      position :'A',
      showModal:false,
      probranch:[],
      branch:[]
      
    }
    this.onChange=this.onChange.bind(this)
    this.onChange2=this.onChange2.bind(this)
    this.handleClickOpen=this.handleClickOpen.bind(this)
    this.handleClickClose=this.handleClickClose.bind(this)
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
      this.getProbranch();
    }
    getProbranch = () => {
      axios.get(`http://localhost:3001/api/v1/allprobranch`)
          .then(res => {
          console.log(res.data)
          this.setState({
            probranch:res.data.Data
          })
          console.log(this.state.probranch)
          
          })
    }
    onChange2(event){
      axios.get(`http://localhost:3001/api/v1/branch` ,{headers: {"pid": event.target.value}})
          .then(res => {
          console.log(res.data)
          this.setState({
            branch:res.data.Data
          })
          console.log(this.state.branch)
          })
      
      }
    handleClickClose = () =>{
      this.setState({
        showModal:false
      })
    }
    
  render(){
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

    const position = this.state.position;
    let form;
    if (position == 'A')
    {
      form =
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
            <label>รหัสผ่าน</label>
            <Input
            type="password"
              defaultValue=""
              placeholder="รหัสผ่าน"
              
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>ยืนยันรหัสผ่าน</label>
            <Input
            type="password"
              defaultValue=""
              placeholder="ยืนยันรหัสผ่าน"
              
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
      <div>
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
            <Input type="select" name="select" id="exampleSelect" onChange={this.onChange2}>
              {this.state.probranch.map((p) => <option key={p.branch_pro_id} value={p.branch_pro_id}>{p.branch_pro_name}</option>)}        
            </Input>
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>สาขา ธ.ก.ส.</label>
            <Input type="select" name="select" id="exampleSelect" >
              {this.state.branch.map((p) => <option key={p.branch_id} value={p.branch_id}>{p.branch_name}</option>)}     
            </Input>
          </FormGroup>
        </Col>
        
      </Row>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>รหัสผ่าน</label>
            <Input
            type="password"
              defaultValue=""
              placeholder="รหัสผ่าน"
              
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>ยืนยันรหัสผ่าน</label>
            <Input
            type="password"
              defaultValue=""
              placeholder="ยืนยันรหัสผ่าน"
              
            />
          </FormGroup>
        </Col>
        
      </Row>
      </div>
      </div>
    }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        เพิ่มผู้ใช้งาน
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
                  <Button color="danger">อัพโหลดรูปภาพ</Button>{' '}
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
    </div>
  );
}
}

export default withStyles(modalStyle)(Adduser);