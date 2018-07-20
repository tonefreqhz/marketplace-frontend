//@desc this is the add new currency modal
//@author Sylvia Onwukwe
import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import InputLabel from "@material-ui/core/InputLabel";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select"
import MenuItem from '@material-ui/core/MenuItem';
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
class AddCurrency extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      currency: '',
      name: 'hai',

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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render(){
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="primary"
          round
          onClick={this.handleClickOpen}>
          Add New Currency
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
                          fullWidth: true,
                          required: true
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
                          fullWidth: true,
                          required: true
                        }}
                        inputProps={{
                          type: "text",
                        }}
                      />
                     <InputLabel>Select Currency Kind</InputLabel>
                     <Select
                        value={this.state.currency}
                        onChange={this.handleChange}
                        inputProps={{
                        name: 'currency',
                        id: 'currencies',
                        required: true
                        }}
                    >
                        <MenuItem value="Digital">Digital</MenuItem>
                        <MenuItem value="Fiat">Fiat</MenuItem>
                    </Select>
                    <CustomInput
                        labelText="Exchange Value"
                        id="currency_exchange"
                        formControlProps={{
                          fullWidth: true,
                          required: true
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
                          fullWidth: true,
                          required: true
                        }}
                        inputProps={{
                          type: "text",
                        }}
                      />
                      <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Choose Currency icon
                        </Button>
                        </label>
                        <input style={{display: "none"}}
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        type="file"
                        />
                        <GridItem>
                      <Button color="primary"> Add </Button>
                      </GridItem>
                      </form>
                      </GridItem>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(AddCurrency);