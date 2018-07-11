//@desc This is the 'product details' form a vendor fills when adding products. 
//@require This form requires the stepper.jsx(A stepper). It is the first step in adding new products
//@author Sylvia Onwukwe
//@author Odewale Ifeolwa
import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select2, {Creatable} from "react-select";
import { withStyles } from '@material-ui/core/styles';
import countries from "country-list";

import 'react-select/dist/react-select.css';
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

//The component Style
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

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      productDetails: {
        category:'',
        name: "",
        tags: [],
        sku: "",
        color: "#7843ba",
        weight: "",
        height: "",
        width: "",
        length: "",
        country: ""
      },
      selectedOption: [],
      selectedCountry: null,
      countrySelect: "react-select-label-hidden",
      tagsSelect: "react-select-label-hidden"
    };
  }
  //Get the value of Input Element
  handleChange =  (event) => {
    this.setProductDetails(event.target.name, event.target.value);
  };

  //This handles the tags select element
  handleTagChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.filterSelectedOption("tags",selectedOption);
  }

  //This handles the country select element
  handleCountryChange = (selectedCountry) => {
    this.setState({ selectedCountry });
    if(selectedCountry !== null){
      this.setProductDetails("country", selectedCountry.value);
      this.setState({
        countrySelect: "react-select-label-visible"
      })
    }else{
      this.setState({
        countrySelect: "react-select-label-hidden"
      })
    }
  }
  //Get the number 
  filterSelectedOption = (type, options) => {
    let newSelectedOpt =  options.map(opt => {
      return opt.value
    });
    this.setState({
      tagsSelect: options.length > 0 ? "react-select-label-visible" : "react-select-label-hidden"
    })
    this.setProductDetails(type, newSelectedOpt);
  }

  setProductDetails = (type, value) => {
    let newProductDetails = JSON.parse(JSON.stringify(this.state.productDetails));
    newProductDetails[type] = value
    this.setState({
        productDetails: newProductDetails
    })
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.cardAnimationSetTimeout = setTimeout(
        this.setState({ cardAnimaton: "" }),
      700
    );
  }

  componentWillUnmount(){
    clearTimeout(this.cardAnimationSetTimeout);
  }
  render(){
    const {classes} = this.props;
    const {selectedOption,
           productDetails,
           selectedCountry,
           tagsSelect,
           countrySelect} = this.state;
    return (
      <div>
          <div>
          <Card>
            <CardHeader color="primary">
              <div>
                <h4>Add New Product</h4>
              </div>
              <div>
                <p>Product Details</p>
              </div>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Product Title"
                    id="name"
                    inputProps={{
                      value: productDetails.name,
                      name:"name",
                      onChange: this.handleChange
                    }}
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="SKU"
                    id="sku"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: productDetails.sku,
                      name:"sku",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedCountry" className={tagsSelect}>Type or Select Product Tags</InputLabel>
                      <Creatable 
                        id="selectedOption"
                        name="selectedOption"
                        value={selectedOption}
                        multi={true}
                        placeholder="Type or Select Product Tags"
                        onChange={this.handleTagChange}
                        options={[
                              { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                        ]}
                        />
                  </FormControl>
                </GridItem>
              </Grid>
              <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Quantity"
                    id="quantity"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type:"number",
                      value: productDetails.quantity,
                      name: "quantity",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Length (Inches)"
                    id="length"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:"number",
                      value: productDetails.length,
                      name: "length",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Width (Inches)"
                    id="width"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "number",
                      value: productDetails.width,
                      name: "width",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Weight (KG)"
                    id="weight"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps ={{
                      type: "number",
                      value: productDetails.weight,
                      name: "weight",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Color"
                    id="length"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps ={{
                      type: "color",
                      value: productDetails.color,
                      name: "color",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Width"
                    id="width"
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
                    labelText="Length"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps ={{
                      type: "dropdown"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedCountry" className={countrySelect}>Type or Select Country</InputLabel>
                    <Select2 
                      id="selectedCountry"
                      name="selectedCountry"
                      value={selectedCountry}
                      placeholder="Type or Select Country"
                      onChange={this.handleCountryChange}
                      options={countries().getNames().map((country, key) => {
                          return {value: country.toLowerCase(), label: country}
                      })
                    }
                      />
                    </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Length"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps ={{
                      type: "number"
            
                    }}
                  />
                </GridItem>
          
              
    
                <GridItem xs={12} sm={12} md={6}>
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="product-category">Select Product Category</InputLabel>
                    <Select
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'category',
                        id: 'product-category',
                        value: productDetails.category
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Short Description"
                    id="product-description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 3
                    }}
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

export default withStyles(styles)(AddPage);
