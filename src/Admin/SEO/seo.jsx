//@desc This is the seo component
//@author Sylvia Onwukwe
import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Note from "@material-ui/icons/Note";
// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx"

class AdminSeo extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.cardAnimation =setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount(){
       clearTimeout(this.cardAnimation);
  }
  render() {
    return (
      <div>
          <div>
            <GridContainer justify="center">
              <GridItem>
                <Card>
                  <form>
                  <CardHeader color="primary">
              <h4>Search Engine Optimization</h4>
              <p>Update Your SEO</p>
            </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Meta Keywords"
                        id="keywords"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 10,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Note
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                       <Button color="primary"> Update</Button>
                       <CustomInput
                        labelText="Site Description"
                        id="description"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 10,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Note
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                      <Button color="primary"> Update</Button>
                       <CustomInput
                        labelText="Google Analytics Script"
                        id="analytics"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 10,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Note
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                      <Button color="primary"> Update</Button>
                      <CustomInput
                        labelText="Alexa Ranking"
                        id="analytics"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type:"text",
                          value:"2500",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Note
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                    <Button color="primary"> Refresh </Button>
                    </CardBody>
                  </form>
                  
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}

export default AdminSeo;
