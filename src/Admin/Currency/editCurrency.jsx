//@desc this is the edit currency modal
//@author Sylvia Onwukwe
import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "../../components/CustomButtons/Button.jsx";
import modalStyle from "../../assets/jss/material-kit-react/modalStyle.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx"


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class EditCurrency extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  handleClickOpen = () =>  {
    this.setState({
      modal: true
    });
  }
  handleClose = () => {
    this.setState({
      modal: false
    })
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="primary"
          round
          onClick={this.handleClickOpen}>
          Edit
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
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
            <GridItem>
                  <form>
                  <CustomInput
                        labelText="Currency Name"
                        id="newcurrency"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                        }}
                      />
                       <CustomInput
                        labelText="Code"
                        id="code"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                        }}
                      />
                      <CustomInput
                        labelText="Description"
                        id="currency_description"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                        }}
                      />
                    <CustomInput
                        labelText="Exchange Value"
                        id="currency_exchange"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
                        }}
                      />
                      <CustomInput
                        labelText="View Count"
                        id="view_count"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
                        }}
                      />
                       <CustomInput
                        labelText="Symbol"
                        id="currency-symbol"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                        }}
                      />
                      <Button color="primary"> Update </Button>
                      <Button color="info"> Suspend </Button>
                      <Button color="danger"> Delete </Button>
                      </form>
                      </GridItem>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(EditCurrency);