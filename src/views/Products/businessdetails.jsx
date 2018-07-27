//@desc This is the 'business details' form a vendor fills when adding products. 
//@require This form requires the stepper.jsx(A stepper). It is the second step in adding new products
//@author Sylvia Onwukwe
import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select2 from "react-select";
import _ from "lodash";

import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons
import Check from "@material-ui/icons/Check";
//core components
import checkboxAdnRadioStyle from "../../assets/jss/material-kit-react/checkboxAdnRadioStyle";

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
  ...checkboxAdnRadioStyle
});


class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      productDetails: this.props.productDetails,
      cardAnimation: "cardHidden",
      taxSelect: this.props.selectStyle.taxSelect,
      selectedValuation: this.props.selectElements.selectedValuation,
      valuationSelect: this.props.selectStyle.valuationSelect,
      selectedTax: this.props.selectElements.selectedTax,
      discountSelect: this.props.selectStyle.discountSelect,
      selectedDiscount: this.props.selectElements.selectedDiscount,
    };
  }

  //This handles the discount select element
  handleDiscountChange = (selectedDiscount) => {
    this.props.setParentSelectElements('selectedDiscount', selectedDiscount);
    this.setState({ selectedDiscount });
    let currentStyle = '';
    if(selectedDiscount !== null){
      this.setProductDetails("discount_type", selectedDiscount.value);
      this.setState({
        discountSelect: "react-select-label-visible"
      });
      currentStyle = 'visible';
    }else{
      this.setState({
        discountSelect: "react-select-label-hidden"
      })
      currentStyle = 'hidden';
    }

    this.props.setParentSelectStyle('discountSelect', `react-select-label-${currentStyle}`);
  }

  handleValuationChange = (selectedValuation) => {
    this.props.setParentSelectElements('selectedValuation', selectedValuation);
    this.setState({ selectedValuation });
    let currentStyle = '';
    if(selectedValuation !== null){
      this.setProductDetails("valuation", selectedValuation.value);
      this.setState({
        valuationSelect: "react-select-label-visible"
      });
      currentStyle = 'visible';
    }else{
      this.setState({
        valuationSelect: "react-select-label-hidden"
      })
      currentStyle = 'hidden';
    }

    this.props.setParentSelectStyle('valuationSelect', `react-select-label-${currentStyle}`);
  }

  //This handles the tax select element
  handleTaxChange = (selectedTax) => {
    this.setState({ selectedTax });
    this.props.setParentSelectElements('selectedTax', selectedTax);
    let currentStyle = '';
    if(selectedTax !== null){
      this.setProductDetails("tax_type", selectedTax.value);
      this.setState({
        taxSelect: "react-select-label-visible"
      })
      currentStyle = 'visible';
    }else{
      this.setState({
        taxSelect: "react-select-label-hidden"
      })
      currentStyle = 'hidden';
    }

    this.props.setParentSelectStyle('taxSelect', `react-select-label-${currentStyle}`);
  }

  handleChange = event => {
    this.setProductDetails(event.target.name, event.target.value);
  };

  handleCheckboxChange = event => {
    let boolVal = event.target.value === "unchecked";
    this.setProductDetails(event.target.name, boolVal);
  }

  setProductDetails = (type, value) => {
    let newProductDetails = JSON.parse(JSON.stringify(this.state.productDetails));
    newProductDetails[type] = value
    this.setState({
        productDetails: newProductDetails
    })
    
    this.props.setParentProductDetails(newProductDetails);
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.cardAnimationSetTimeout = setTimeout(
      function() {
        this.setState({ cardAnimation: "" });
      }.bind(this),
      700
    );
  }

  componentWillReceiveProps(newProps){
    if(newProps.product.hasOwnProperty('addProduct') && _.isEqual(this.props.product.addProduct, newProps.product.addProduct) === false){
      this.props.onCloseModal();
    }
  }

  componentWillUnmount(){
    clearTimeout(this.cardAnimationSetTimeout);
  }


  render(){
    const {classes, productDetails} = this.props;
    const {
      selectedDiscount,
      selectedTax,
      taxSelect,
      discountSelect,
      valuationSelect,
      selectedValuation
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
                    labelText="Unit Cost"
                    id="unit_cost"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type:"number",
                      value: productDetails.unit_cost,
                      name: "unit_cost",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Unit Price"
                    id="unit_price"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type:"number",
                      value: productDetails.unit_price,
                      name: "unit_price",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Alt Price"
                    id="alt_price"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type:"number",
                      value: productDetails.alt_price,
                      name: "alt_price",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Shipping Cost"
                    id="shipping_cost"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type:"number",
                      value: productDetails.shipping_cost,
                      name: "shipping_cost",
                      onChange: this.handleChange,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedDiscount" className={discountSelect}>Type or Select Product Discount Type</InputLabel>
                    <Select2 
                      id="selectedDiscount"
                      name="selectedDiscount"
                      value={selectedDiscount}
                      placeholder="Type or Select Discount Type"
                      onChange={this.handleDiscountChange}
                      options={['Fixed', 'Percent'].map((discount, key) => {
                          return {value: discount.toLowerCase(), label: discount}
                      })
                    }
                      />
                    </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Discount"
                    id="discount"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type:"number",
                      value: productDetails.discount,
                      name: "discount",
                      onChange: this.handleChange,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedTax" className={taxSelect}>Type or Select Product Tax Type</InputLabel>
                    <Select2 
                      id="selectedTax"
                      name="selectedTax"
                      value={selectedTax}
                      placeholder="Type or Select Tax Type"
                      onChange={this.handleTaxChange}
                      options={['Fixed', 'Percent'].map((tax, key) => {
                          return {value: tax.toLowerCase(), label: tax}
                      })
                    }
                      />
                    </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Tax"
                    id="tax"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type:"number",
                      name: "tax",
                      value: productDetails.tax,
                      onChange: this.handleChange,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedValuation" className={valuationSelect}>Type or Select Product Valuation</InputLabel>
                    <Select2 
                      id="selectedValuation"
                      name="selectedValuation"
                      value={selectedValuation}
                      placeholder="Type or Select Valuation"
                      onChange={this.handleValuationChange}
                      options={['FIFO', 'LIFO', "AVCO"].map((valuation, key) => {
                          return {value: valuation, label: valuation}
                      })
                    }
                      />
                    </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Unit (eg dozen)"
                    id="unit"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type:"text",
                      value: productDetails.unit,
                      name: "unit",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControlLabel
                  control={<Checkbox
                      checked={productDetails.download}
                      tabIndex={-1}
                      onClick={this.handleCheckboxChange}
                      checkedIcon={<Check className={classes.checkedIcon}/>}
                      icon={<Check className={classes.uncheckedIcon}/>}
                      classes={{
                          checked: classes.checked,
                      }}
                      value={productDetails.download === true? "checked": "unchecked"}
                      inputProps={{
                        name: "download"
                      }}
                  />}
                  label="Downloadable Product" 
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControlLabel
                  control={<Checkbox
                      checked={productDetails.deal}
                      tabIndex={-1}
                      onClick={this.handleCheckboxChange}
                      checkedIcon={<Check className={classes.checkedIcon}/>}
                      icon={<Check className={classes.uncheckedIcon}/>}
                      classes={{
                          checked: classes.checked,
                      }}
                      value={productDetails.deal === true? "checked": "unchecked"}
                      inputProps={{
                        name: "deal"
                      }}
                  />}
                  label="Deal of the Day" 
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControlLabel
                  control={
                  <Checkbox
                      checked={productDetails.featured}
                      tabIndex={-1}
                      onClick={this.handleCheckboxChange}
                      checkedIcon={<Check className={classes.checkedIcon}/>}
                      icon={<Check 
                        className={classes.uncheckedIcon}/>}
                      classes={{
                          checked: classes.checked,
                      }}
                      value={productDetails.featured === true? "checked": "unchecked"}
                      inputProps={{
                        name: "featured"
                      }}
                  />}
                  label="Feature Product" 
                  />
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
