import React, { Component } from 'react';
import axios from 'axios';
import { withStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from '@material-ui/core/Typography';
import FormPropsTextFields from './Textfield';
import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";
import Close from "@material-ui/icons/Close";
import { Label } from 'reactstrap';

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
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#76ff03'),
    backgroundColor: '#76ff03',
    '&:hover': {
      backgroundColor: '#64dd17',
    },
  },
}))(Button);

class CustomizedDialogs extends Component {
  constructor () {
    super()

    this.state = {
      showModal:false,
      results:"",
      status:""
      
    }
    this.handleClickOpen=this.handleClickOpen.bind(this)
    this.handleClickClose=this.handleClickClose.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.status_name =="ยืนยัน"){
      this.setState({status:"1"})
    }
    else if(this.props.status_name =="ไม่ยืนยัน"){
      this.setState({status:"2"})
    }
  }
    handleClickOpen = () =>{
      this.setState({
        showModal:true
      })
    }
      
    handleClickClose = () =>{
      this.setState({
        showModal:false,

      })
    }
    handleSubmit = () =>{
      const datar = {warranty_id:this.props.uid,warranty_status:this.state.results
                    }
        axios({
          method: 'post',
          url: 'http://localhost:3001/api/v1/editwarrantyisinarea',
          data: datar
      })
      console.log(datar)
      this.setState({
        showModal:false,
      })
    }
    
  render(){
    let form2;
    let form3;
    console.log(this.props.status_name)
    if (this.props.status =="ยืนยัน")
    {
      
      form2 =
      
      <ColorButton  variant="contained" >
            ยืนยัน
      </ColorButton>
      form3 =
      <div>#ยืนยันโดย น้องมะลิซ้อน  ประกันวินาศภัย เบอร์ติดต่อ 080-123-4567  ณ วันที่ 30 มีนาคม 2563</div>
      }


    else if (this.props.status =="ไม่ยืนยัน")
    {
      
      form2 =
      <Button autoFocus onClick={() => this.handleClickClose()} variant="contained" color="secondary">
            ไม่ยืนยัน
      </Button>
      form3 =
      <div>#ยืนยันโดย น้องมะลิซ้อน  ประกันวินาศภัย เบอร์ติดต่อ 080-123-4567  ณ วันที่ 30 มีนาคม 2563</div>
      }

    const form =<FormPropsTextFields uid={this.props.uid} print={(eiei)=>this.setState({results:(eiei)})}/>;

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
      fullScreen
          fullWidth='xl'
          aria-labelledby="max-width-dialog-title" 
          open={this.state.showModal}
          onClose={this.handleClickClose}
          maxWidth = 'xl'
      >
        <DialogTitle 
          id="customized-dialog-title" 
          onClose={this.handleClickClose}
          >
          คำร้องลำดับที่ ({this.props.uid})
          {form2}
          {form3}
        </DialogTitle>
        
        <DialogContent dividers>
        
          {form}
        
        </DialogContent>
        <DialogActions>
      
          <ColorButton autoFocus onClick={() =>this.handleSubmit()} variant="contained" >
            ส่งข้อมูล
          </ColorButton>
     
          <Button autoFocus onClick={() => this.handleClickClose()} variant="contained" color="secondary">
            ปิด
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default withStyles(modalStyle)(CustomizedDialogs);