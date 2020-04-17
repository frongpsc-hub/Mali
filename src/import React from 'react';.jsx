import React from 'react';
import { withStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormPropsTextFields from './Textfield';


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

 
  
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#76ff03'),
    backgroundColor: '#76ff03',
    '&:hover': {
      backgroundColor: '#64dd17',
    },
  },
}))(Button);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        เรียกดูข้อมูล
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}  maxWidth = 'xl'>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          คำร้องลำดับที่ 1
        </DialogTitle>
        <DialogContent dividers>
        
          <FormPropsTextFields/>
        
        </DialogContent>
        <DialogActions>
      
          <ColorButton autoFocus onClick={handleClose} variant="contained" >
            พื้นที่ประสบภัย
          </ColorButton>
     
          <Button autoFocus onClick={handleClose} variant="contained" color="secondary">
            ไม่เป็นพื้นที่ประสบภัย
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

<IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClickClose}
          >
            <Close className={classes.modalClose} />
          </IconButton>    