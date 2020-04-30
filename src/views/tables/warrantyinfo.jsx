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
          คำร้องลำดับที่ {this.props.uid}
               
        </DialogTitle>
        <DialogContent dividers>
        
          <FormPropsTextFields uid={this.props.uid} print={(eiei)=>console.log(eiei)}/>
        
        </DialogContent>
        <DialogActions>
      
          <ColorButton autoFocus onClick={this.handleClickClose} variant="contained" >
            พื้นที่ประสบภัย
          </ColorButton>
     
          <Button autoFocus onClick={() => this.handleClickClose()} variant="contained" color="secondary">
            ไม่เป็นพื้นที่ประสบภัย
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default withStyles(modalStyle)(CustomizedDialogs);