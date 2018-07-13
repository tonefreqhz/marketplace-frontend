//@desc This is the 'business details' form a vendor fills when adding products. 
//@require This form requires the stepper.jsx(A stepper). It is the second step in adding new products
//@author Sylvia Onwukwe
import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import { withStyles } from "@material-ui/core";


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimation: "cardHidden",
      taxType: "",
      discountType: "",
      currency: "",
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.cardAnimationSetTimeout = setTimeout(
      function() {
        this.setState({ cardAnimation: "" });
      }.bind(this),
      700
    );
  }

  componentWillUnmount(){
    clearTimeout(this.cardAnimationSetTimeout);
  }


  render(){
    const {classes} = this.props;
    const {discountType, taxType, currency} = this.state;
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
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="currency">Select Currency</InputLabel>
                <Select
                  value={currency}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'currency',
                    id: 'currency',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {
                    currencies.map( (currency, key) => {
                      return <MenuItem value={currency.value} key={key}>{currency.label}</MenuItem>
                    })
                  }
                </Select>
                  </FormControl>
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
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="discount-type">Discount Type</InputLabel>
                  <Select
                    value={discountType}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'discountType',
                      id: 'discountType',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {["Fixed", "Percentage"].map((discountType, key) => {
                      return <MenuItem value={discountType.toLowerCase()} key={key}>{discountType}</MenuItem>
                    })
                    }
                  </Select>
                </FormControl>
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
                  <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="taxType">Tax Type</InputLabel>
                      <Select
                        value={taxType}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'taxType',
                          id: 'taxType',
                        }}
                      >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"fixed"}>Fixed</MenuItem>
                          <MenuItem value={"percentage"}>Percentage</MenuItem>
                      </Select>
                    </FormControl>
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

export default withStyles(styles)(BusinessDetails);
