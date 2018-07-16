//@desc this is the display settings component
//@author Sylvia Onwukwe
import React from "react";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import Button from "../../../components/CustomButtons/Button";

class Slider extends React.Component {
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
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render(){

    return (
      <div>
          <div>
          <Card>
            <CardHeader color="primary">
              <h4>Display Settings</h4>
              <p>Update Store Display Settings</p>
            </CardHeader>
            <CardBody>
              <Grid container>
              <GridItem xs={12} sm={12} md={12}>
                <img src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg" alt="First Slide"
                width="300px"/>
                </GridItem>
                <GridItem>
                  <Button color="danger"> Remove </Button>
                  </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                <img src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg" alt="" width="300px"/>
                </GridItem>
                <GridItem>
                <Button color="danger"> Remove </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                <img src="https://images.pexels.com/photos/34577/pexels-photo.jpg" alt="" width="300px"/>
                </GridItem>
                <GridItem>
                <Button color="danger"> Remove </Button>
                  </GridItem>
                
              </Grid>
            </CardBody>
            <CardFooter>
              <Button color="primary"> Update </Button>
               <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
            </CardFooter>
          </Card>
        </div>
        </div>
    );
  }
}

export default Slider;
