//@desc This is the 'business details' form a vendor fills when adding products. 
//@require This form requires the stepper.jsx(A stepper). It is the second step in adding new products
//@author Sylvia Onwukwe
import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

class BusinessDetails extends React.Component {
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
              <h4>Add New Product</h4>
              <p>Business Details</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel htmlFor="currency">Select Currency</InputLabel>
          <Select
            native
            value={this.state.category}
            onChange={this.handleChange('currency')}
            inputProps={{
              name: 'currency',
              id: 'currency',
            }}
          >
            <option value="" />
            <option value={10}>Dollars</option>
            <option value={20}>Euro</option>
            <option value={30}>Pounds</option>
          </Select>
        
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Cost Price"
                    id="cost-price"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps ={{
                        type: "number"
                      }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Selling Price"
                    id="selling-price"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps ={{
                      type: "number"
                    }}
                  />
                </GridItem>
              </Grid>
              <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Shipping Cost"
                    id="shipping-cost"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{type:"number"}}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Discount"
                    id="discount"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{type:"number"}}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel htmlFor="discount-type">Discount Type</InputLabel>
          <Select
            native
            value={this.state.category}
            onChange={this.handleChange('discount-type')}
            inputProps={{
              name: 'discount-type',
              id: 'discount-type',
            }}
          >
            <option value="" />
            <option value={10}>Fixed</option>
            <option value={20}>Percentage</option>
          </Select>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Tax"
                    id="tax"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps ={{
                      type: "number"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel htmlFor="tax-type">Tax Type</InputLabel>
          <Select
            native
            value={this.state.category}
            onChange={this.handleChange('ctax-type')}
            inputProps={{
              name: 'tax-type',
              id: 'tax-type',
            }}
          >
            <option value="" />
            <option value={10}>Fixed</option>
            <option value={20}>Percentage</option>
          </Select>
                </GridItem>
    
              </Grid>
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
        </div>
        </div>
    );
  }
}

export default BusinessDetails;
