//@desc This is the Social Links Component
//@author Sylvia Onwukwe
import React from "react";
import Grid from "@material-ui/core/Grid";

import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import { InputAdornment } from "@material-ui/core";
import Button from "../../../components/CustomButtons/Button";

class SocialLinks extends React.Component {
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
              <h4>Social Link</h4>
              <p>Update Social Media Links</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="facebook.com/"
                    id="facebook"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Facebook </InputAdornment>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="twitter.com/"
                    id="site-email"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Twitter </InputAdornment>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="youtube.com/"
                    id="site-title"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                  <InputAdornment> Youtube </InputAdornment>
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

export default SocialLinks;
