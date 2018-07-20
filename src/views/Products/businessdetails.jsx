//@desc This is the 'business details' form a vendor fills when adding products. 
//@require This form requires the stepper.jsx(A stepper). It is the second step in adding new products
//@author Sylvia Onwukwe
import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select2 from "react-select";

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


class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      productDetail: {

      },
      cardAnimation: "cardHidden",
      taxSelect: "react-select-label-hidden",
      discountSelect: "react-select-label-hidden",
      selectedDiscount: null,
      selectedTax: null,
      discountType: "",
    };
  }

  //This handles the discount select element
  handleDiscountChange = (selectedDiscount) => {
    this.setState({ selectedDiscount });
    if(selectedDiscount !== null){
      this.setProductDetails("discount", selectedDiscount.value);
      this.setState({
        discountSelect: "react-select-label-visible"
      })
    }else{
      this.setState({
        discountSelect: "react-select-label-hidden"
      })
    }
  }

  //This handles the tax select element
  handleTaxChange = (selectedTax) => {
    this.setState({ selectedTax });
    if(selectedTax !== null){
      this.setProductDetails("tax", selectedTax.value);
      this.setState({
        taxSelect: "react-select-label-visible"
      })
    }else{
      this.setState({
        taxSelect: "react-select-label-hidden"
      })
    }
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
    const {
      selectedDiscount,
      selectedTax,
      taxSelect,
      discountSelect
    } = this.state;
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
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedDiscount" className={discountSelect}>Type or Select Product Discount</InputLabel>
                    <Select2 
                      id="selectedDiscount"
                      name="selectedDiscount"
                      value={selectedDiscount}
                      placeholder="Type or Select Discount"
                      onChange={this.handleDiscountChange}
                      options={['Fixed', 'Percent'].map((discount, key) => {
                          return {value: discount.toLowerCase(), label: discount}
                      })
                    }
                      />
                    </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedTax" className={taxSelect}>Type or Select Product Tax</InputLabel>
                    <Select2 
                      id="selectedTax"
                      name="selectedTax"
                      value={selectedTax}
                      placeholder="Type or Select Tax"
                      onChange={this.handleTaxChange}
                      options={['Fixed', 'Percent'].map((tax, key) => {
                          return {value: tax.toLowerCase(), label: tax}
                      })
                    }
                      />
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
