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

class Viewuser extends Component {
  constructor () {
    super()

    this.state = {
      position :'',
      showModal:false,
      showEdit:false,
      fname:"",
      lname:"",
      tel:"",
      email:"",
      role_name:"",
      branch_name:"",
      branch_pro_name:"",
      branch_id:"",
      branch_pro_id:"",
      pro_id2:"",
      probranch:[],
      branch:[]
    }
    this.onChange=this.onChange.bind(this)
    this.onChange2=this.onChange2.bind(this)
    this.getProbranch=this.getProbranch.bind(this)
    this.getbranch=this.getbranch.bind(this)
    this.handleClickOpen=this.handleClickOpen.bind(this)
    this.handleClickClose=this.handleClickClose.bind(this)
    this.edituser=this.edituser.bind(this)
    this.deluser=this.deluser.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

    onChange(event){
    this.setState({
      position : event.target.value
    })
    }
    handleClickOpen = () =>{
 console.log(this.props.uid)
      axios.get(`http://localhost:3001/api/v1/eachwebusers`, {headers: {"pid": this.props.uid}})
      .then(res => {
        console.log(res.data.Data[0])
       this.setState({
         role_name :res.data.Data[0].role_name,
         fname:res.data.Data[0].fname,
         lname:res.data.Data[0].lname,
         tel:res.data.Data[0].tel,
         email:res.data.Data[0].email,
         role_name:res.data.Data[0].role_name,
         branch_name:res.data.Data[0].branch_name,
         branch_pro_name:res.data.Data[0].branch_pro_name,
         branch_id:res.data.Data[0].branch_id,
         branch_pro_id:res.data.Data[0].branch_pro_id,
        })
        this.getProbranch();
        this.getbranch();
        
       if(res.data.Data[0].role_name == "ผู้ดูแลระบบ"){
        this.setState({
          position:'1',
          showModal:true,
          showEdit:false,
          role_name:res.data.Data[0].role_name
        })
        //console.log(res.data.Data[0].role_name)
        console.log(this.state.position)
        
        
      }
      
      else if(res.data.Data[0].role_name == "ผู้ใช้งานทั่วไป"){
        this.setState({
          position:'3',
          showModal:true,
          showEdit:false,
          role_name:res.data.Data[0].role_name
        })
        //console.log(res.data.Data[0].role_name)
        //console.log(this.state.position)
        
      }
      else
      {
        this.setState({position:'2', showModal:true,showEdit:false,role_name:res.data.Data[0].role_name})
      }
       
      })
     
      
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
    getbranch = () => {
      axios.get(`http://localhost:3001/api/v1/branch`,{headers: {"pid": this.state.branch_pro_id}})
          .then(res => {
          console.log(res.data)
          this.setState({
            branch:res.data.Data
          })
          console.log(this.state.branch)
          
          })
    }
    onChange2(event){
      axios.get(`http://localhost:3001/api/v1/branch` ,{headers: {"pid": event.target.value}})
          .then(res => {
          console.log(res.data.Data)
          this.setState({
            branch:res.data.Data,
            branch_id:res.data.Data[0].branch_id
          })
          this.setState.
          console.log(this.state.branch)
          
          
          })
          
      }
    
      deluser = () =>{
        
        const datar = {uid:this.props.uid}
        console.log("rr ==> ",datar)
        axios({
          method: 'post',
          url: 'http://localhost:3001/api/v1/delwebuser',
          data: datar
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
      }
     
    
    handleClickClose = () =>{
      this.setState({
        showModal:false,
        showEdit:false
      })
    }
    handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
  
      this.setState({
        [name]: value
      })  

      console.log(this.state.position)
      
    }
    handleSubmit = () => {
      
      const datar = {uid:this.props.uid, org_id:this.state.position, fname:this.state.fname, 
                      lname:this.state.lname, tel:this.state.tel, email:this.state.email,
                      ubranch_id:this.state.branch_id
                    }
        axios({
          method: 'post',
          url: 'http://localhost:3001/api/v1/editwebuser',
          data: datar
      })
      console.log(datar)
      this.setState({
        showEdit:false,
        showModal:false,
      })
      
    }
    edituser = () =>{
        this.setState({
          showModal:false,
          showEdit:true,

        })
        
        axios.get(`http://localhost:3001/api/v1/eachwebusers`, {headers: {"pid": this.props.uid}})
      .then(res => {
        console.log(res.data.Data[0])
       this.setState({
         role_name :res.data.Data[0].role_name,
         fname:res.data.Data[0].fname,
         lname:res.data.Data[0].lname,
         tel:res.data.Data[0].tel,
         email:res.data.Data[0].email,
         role_name:res.data.Data[0].role_name,
         branch_name:res.data.Data[0].branch_name,
         branch_pro_name:res.data.Data[0].branch_pro_name,
         branch_id:res.data.Data[0].branch_id,
         branch_pro_id:res.data.Data[0].branch_pro_id,
        })
        this.getProbranch();
        this.getbranch();
        
       if(res.data.Data[0].role_name == "ผู้ดูแลระบบ"){
        this.setState({
          position:'1',
          
          role_name:res.data.Data[0].role_name
        })
        //console.log(res.data.Data[0].role_name)
        //console.log(this.state.position)
          
          
        }
        
        else if(res.data.Data[0].role_name == "ผู้ใช้งานทั่วไป"){
          this.setState({
            position:'3',
            role_name:res.data.Data[0].role_name
          })
          //console.log(res.data.Data[0].role_name)
          //console.log(this.state.position)
          
        }
        else
        {
          this.setState({position:'2', role_name:res.data.Data[0].role_name})
        }
         
        })
        this.getProbranch();
        
      
      }

      
  render(){
    console.log(this.state.fname)
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
    
    const position = this.state.position;
    console.log(this.state.position)
    let form;
    if (position == '1' || position == '3')
    {
      
      form =
      <div>
      <div >
      <Row>
          
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>ชื่อ </label>
            <Input
            disabled
              defaultValue={this.state.fname}
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
              defaultValue={this.state.lname}
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
              defaultValue={this.state.tel}
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
              defaultValue={this.state.email}
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
              defaultValue={this.state.fname}
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
              defaultValue={this.state.lname}
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
              defaultValue={this.state.tel}
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
              defaultValue={this.state.email}
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
            <Input type="text" name="select" id="exampleSelect" disabled  defaultValue={this.state.branch_pro_name}>

            </Input>
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>สาขา ธ.ก.ส.</label>
            <Input type="text" name="select" id="exampleSelect" disabled defaultValue={this.state.branch_name}>
                        
            </Input>
          </FormGroup>
        </Col>
        
      </Row>
      
      </div>
      </div>
    }

    const positionedit = this.state.position;
    let formedit;
    if (positionedit == '1' || position == '3')
    {
        formedit =
      <div>
      <div >
      <Row>
          
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>ชื่อ</label>
            <Input
              name="fname"
              value={this.state.fname}
              defaultValue={this.state.fname}
              onChange={this.handleChange}
              placeholder="ชื่อ"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>นามสกุล</label>
            <Input
            
              name="lname"
              value={this.state.lname}
              defaultValue={this.state.lname}
              onChange={this.handleChange}
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
              name="tel"
              value={this.state.tel}
              onChange={this.handleChange}
              defaultValue={this.state.tel}
              placeholder="เบอร์โทร"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>อีเมล</label>
            <Input
            
              name="email"
              value={this.state.email}
              defaultValue={this.state.email}
              onChange={this.handleChange}
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
              name="fname"
              value={this.state.fname}
              defaultValue={this.state.fname}
              onChange={this.handleChange}
              placeholder="ชื่อ"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>นามสกุล</label>
            <Input
              name="lname"
              value={this.state.lname}
              defaultValue={this.state.lname}
              onChange={this.handleChange}
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
              name="tel"
              value={this.state.tel}
              defaultValue={this.state.tel}
              onChange={this.handleChange}
              placeholder="เบอร์โทร"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>อีเมล</label>
            <Input
              name="email"
              value={this.state.email}
              defaultValue={this.state.email}
              onChange={this.handleChange}
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
            <Input type="select" name="select" id="exampleSelect" onChange={this.onChange2} defaultValue={this.state.branch_pro_id}>
              {this.state.probranch.map((p) => <option key={p.branch_pro_id} value={p.branch_pro_id}>{p.branch_pro_name}</option>)}        
            </Input>
          </FormGroup>
        </Col>
        <Col className="pl-1" md="6">
          <FormGroup>
            <label>สาขา ธ.ก.ส.</label>
            <Input type="select" name="select" id="exampleSelect" defaultValue={this.state.branch_id} name="branch_id"
              value={this.state.branch_id} onChange={this.handleChange}>
              {this.state.branch.map((p) => <option key={p.branch_id} value={p.branch_id}>{p.branch_name}</option>)}     
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
      <Button size="sm" color="danger" onClick={this.deluser}>
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
                          <Input type="select" name="select" id="exampleSelect" onChange={this.onChange} defaultValue={this.state.position} disabled>
                            <option value='1'>ผู้ดูแลระบบ</option>
                            <option value='2'>เจ้าหน้าที่</option>
                            <option value='3'>ผู้ใช้งานทั่วไป</option>
                            
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
                          <Input type="select" name="select" id="exampleSelect" onChange={this.onChange} defaultValue={this.state.position}>
                            <option value='1'>ผู้ดูแลระบบ</option>
                            <option value='2'>เจ้าหน้าที่</option>
                            <option value='3'>ผู้ใช้งานทั่วไป</option>
                            
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

        <Button  onClick={() => this.handleSubmit()}  color='success'>
         บันทึก
        </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default withStyles(modalStyle)(Viewuser);