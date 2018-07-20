//@desc This is the general settings component where admin can set general store settings
//@author Sylvia Onwukwe
import React from "react";
import Grid from "@material-ui/core/Grid";
//import InputLabel from "@material-ui/core/InputLabel";
//import Select from "@material-ui/core/Select";

import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import { InputAdornment } from "@material-ui/core";
import Button from "../../../components/CustomButtons/Button";

class GeneralSettings extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.cardAnimation = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillMount (){
    clearTimeout (this.cardAnimation)
  }
  render(){

    return (
      <div>
          <div>
          <Card>
            <CardHeader color="primary">
              <h4>General Settings</h4>
              <p>Update Store Settings</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Bezop Store"
                    id="site-name"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Site Name </InputAdornment>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="research@bezop.io"
                    id="site-email"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Site Email Address </InputAdornment>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Bezop Store"
                    id="site-title"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Site Title </InputAdornment>
                  </GridItem>
                  <GridItem>
                    <img src="../../../assets/img/logo.png" alt="Logo" />
                    <CustomInput
                    labelText="Bezop Store"
                    id="site-title"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps ={{
                      type:"file"
                    }}
                  />
                  <InputAdornment> Store Logo </InputAdornment>
                    </GridItem>
                    <GridItem>
                    <img src="../../../assets/img/logo.png" alt="Favicon" />
                    <CustomInput
                    labelText="Bezop Store"
                    id="site-title"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps ={{
                      type:"file"
                    }}
                  />
                  <InputAdornment> Store Favicon </InputAdornment>
                    </GridItem>
              </Grid>
            </CardBody>
            <CardFooter>
              <Button color="primary"> Update </Button>
            </CardFooter>
          </Card>
        </div>
        </div>
    );
  }
}

export default GeneralSettings;
