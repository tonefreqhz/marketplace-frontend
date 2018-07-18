import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import DeleteIcon from '@material-ui/icons/Delete';
// @material-ui/icons
import Close from "@material-ui/icons/Close";

import modalStyle from "../../assets/jss/material-kit-react/modalStyle.jsx";



function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DeleteTableItemModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
    const { classes, itemName, numberOfItems, onDeleteItem } = this.props;
    return (
      <div>
        <Tooltip title="Delete">
            <IconButton aria-label="Delete">
            <DeleteIcon onClick={this.handleClickOpen}/>
            </IconButton>
        </Tooltip>
        <Dialog
        fullScreen={false}
        fullWidth={true}
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}>
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}>
              <Close className={classes.modalClose} />
            </IconButton>

          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}>
            <Card>
                <CardHeader color="danger">
                <div>
                <Typography variant="display2" gutterBottom color="textSecondary">Delete {numberOfItems === 1 ? itemName.single : itemName.plural}</Typography>
                </div>
                </CardHeader>
                <CardBody>
                <Grid container>
                    <GridItem xs={12}>
                      <Typography variant="display1" gutterBottom>
                        You are about to delete {numberOfItems} {numberOfItems === 1 ? itemName.single : itemName.plural}
                    </Typography>
                    </GridItem> 
                </Grid>
                </CardBody>
                <CardFooter>
                    <Grid container>
                      <GridItem xs={12}>
                        <Button variant="contained" color="secondary" component="span" className={classes.fluidButton} onClick={onDeleteItem}>
                          Delete {numberOfItems} {numberOfItems === 1 ? itemName.single : itemName.plural}
                        </Button>
                      </GridItem>
                    </Grid>
            </CardFooter>
            </Card>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  }
  
  export default withStyles(modalStyle)(DeleteTableItemModal);