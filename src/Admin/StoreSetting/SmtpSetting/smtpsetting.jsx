//@desc This is the smtp settings component
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

class Smtp extends React.Component {
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
              <h4>Smtp Settings</h4>
              <p>Update Smtp Settings</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    id="smtp-host"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Smtp Host </InputAdornment>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    id="smtp-port"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Smtp Port </InputAdornment>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    id="smtp-user"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Smtp Password</InputAdornment>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    id="smtp-password"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Smtp Password </InputAdornment>
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

export default Smtp;
