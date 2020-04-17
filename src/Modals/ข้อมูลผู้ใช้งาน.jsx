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
import { Button,Row,Col,CardBody,Card,FormGroup,Input,Label} from 'reactstrap';

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

class Appuserinfo extends Component {
  constructor () {
    super()

    this.state = {
      showModal:false,
    }
    this.handleClickOpen=this.handleClickOpen.bind(this)
    this.handleClickClose=this.handleClickClose.bind(this)
  }
    handleClickOpen = () =>{
      this.setState({
        showModal:true
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
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        เรียกดูข้อมูล
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
            
            
            <Card className="card-user">
            <CardBody>
              <Row>
              <Col md='4'>
              
                <div className="image">                 
                </div>
                
                  <div className="author">
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      /> 
                  </div>
                  
              </Col>
              
              <Col md ="4">
                <div>
                <FormGroup>
                  <Label>ชื่อ</Label>
                    <Input
                      disabled
                      type="text"
                      placeholder="ชื่อ"
                      defaultValue="น้องมะลิซ้อน"
                    />
                </FormGroup>
                
                <FormGroup>
                  <label>เบอร์โทร</label>
                    <Input
                      defaultValue="081-811-4459"
                      disabled
                      placeholder="เบอร์โทร"
                      type="text"
                    />
                </FormGroup>
                
                <FormGroup>
                  <label>รหัสประชาชน</label>
                    <Input
                      defaultValue="1123569874596"
                      disabled
                      placeholder="รหัสประชาชน"
                      type="text"
                    />
                </FormGroup>

                <FormGroup>
                  <label>ตำบล</label>
                    <Input
                      defaultValue="บางกระสอ"
                      disabled
                      placeholder="ตำบล"
                      type="text"
                    />
                </FormGroup>

                <FormGroup>
                  <label>จังหวัด</label>
                    <Input
                      defaultValue="นนทบุรี"
                      disabled
                      placeholder="จังหวัด"
                      type="text"
                    />
                </FormGroup>
                </div>
                
              </Col>

              <Col md ="4">
                <div>
                <FormGroup>
                  <Label>นามสกุล</Label>
                    <Input
                      disabled
                      type="text"
                      placeholder="นามสกุล"
                      defaultValue="ประกันวินาศภัย"
                    />
                </FormGroup>
                
                <FormGroup>
                  <label>อีเมล</label>
                    <Input
                      defaultValue="infuse@gmail.com"
                      disabled
                      placeholder="อีเมล"
                      type="text"
                    />
                </FormGroup>
                
                <FormGroup>
                  <label>ที่อยู่</label>
                    <Input
                      defaultValue="115/556"
                      disabled
                      placeholder="ที่อยู่"
                      type="text"
                    />
                </FormGroup>

                <FormGroup>
                  <label>อำเภอ</label>
                    <Input
                      defaultValue="เมือง"
                      disabled
                      placeholder="อำเภอ"
                      type="text"
                    />
                </FormGroup>

                <FormGroup>
                  <label>รหัสไปรษณีย์</label>
                    <Input
                      defaultValue="11000"
                      disabled
                      placeholder="รหัสไปรษณีย์"
                      type="text"
                    />
                </FormGroup>
                </div>
                
              </Col>

              </Row>
              </CardBody>
              </Card>
              
          </div>
        
        
        </DialogContent>
        <DialogActions>

        <Button  onClick={() => this.handleClickClose()}  color="secondary">
          ปิด
        </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default withStyles(modalStyle)(Appuserinfo);