//@desc This is the 'product details' form a vendor fills when adding products. 
//@require This form requires the stepper.jsx(A stepper). It is the first step in adding new products
//@author Sylvia Onwukwe
//@author Odewale Ifeolwa
import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select2, {Creatable} from "react-select";
import { withStyles } from '@material-ui/core/styles';
import _ from "lodash";

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
      productDetails: this.props.productDetails,
      categories: [],
      brands: [],
      selectedOption: this.props.selectElements.selectedOption,
      tagsSelect: this.props.selectStyle.tagsSelect,
      selectedBrand: this.props.selectElements.selectedBrand,
      selectedCategory: this.props.selectElements.selectedCategory,
      brandSelect: this.props.selectStyle.brandSelect,
      categorySelect: this.props.selectStyle.categorySelect,
      selectedColors: this.props.selectElements.selectedColors,
      colorsSelect: this.props.selectStyle.colorsSelect,
    };
  }
  //Get the value of Input Element
  handleChange =  (event) => {
    this.setProductDetails(event.target.name, event.target.value);
  };

  //This handles the tags select element
  handleTagChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.setParentSelectElements('selectedOption', selectedOption);
    this.filterSelectedOption("tag",selectedOption, 'tagsSelect');
  }

  //This handles the tags select element
  handleColorChange = (selectedColors) => {
    this.setState({ selectedColors });
    this.props.setParentSelectElements('selectedColors', selectedColors);
    this.filterSelectedOption("color",selectedColors, 'colorsSelect');
  }

  

  //This handles the brand select element
  handleBrandChange = (selectedBrand) => {
    this.setState({ selectedBrand });
    this.props.setParentSelectElements('selectedBrand', selectedBrand);
    if(selectedBrand !== null){
      this.setProductDetails("brand_id", selectedBrand.value);
      this.setState({
        brandSelect: "react-select-label-visible"
      })
      this.props.setParentSelectStyle('brandSelect', 'react-select-label-visible')
    }else{
      this.setState({
        brandSelect: "react-select-label-hidden"
      })
      this.props.setParentSelectStyle('brandSelect', 'react-select-label-hidden')
    }
  }

  //This handles the category select element
  handleCategoryChange = (selectedCategory) => {
    this.setState({ selectedCategory });
    this.props.setParentSelectElements('selectedCategory', selectedCategory);
    if(selectedCategory !== null){
      this.setProductDetails("category_id", selectedCategory.value);
      this.setState({
        categorySelect: "react-select-label-visible"
      })
      this.props.setParentSelectStyle('categorySelect', 'react-select-label-visible')  
    }else{
      this.setState({
        categorySelect: "react-select-label-hidden"
      })
      this.props.setParentSelectStyle('categorySelect', 'react-select-label-hidden')
    }
  }
  //Get the number 
  filterSelectedOption = (type, options, selected) => {
    let newSelectedOpt =  options.map(opt => {
      return opt.value
    });
    this.setState({
      [selected] : options.length > 0 ? "react-select-label-visible" : "react-select-label-hidden"
    })
    let currentStyle = options.length > 0 ? "react-select-label-visible" : "react-select-label-hidden";

    this.props.setParentSelectStyle(selected, currentStyle);
    this.setProductDetails(type, newSelectedOpt);
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
        this.setState({ cardAnimaton: "" }),
      700
    );

    this.props.fetchProductBrands();
    this.props.fetchProductCategories();
  }

  componentWillReceiveProps(newProps){
    if(newProps.product.hasOwnProperty('productCategories') && _.isEqual(this.props.product.productCategories, newProps.product.productCategories) === false){
      this.setState({
        categories: newProps.product.productCategories,
      })
      if(this.state.selectedCategory === null){
        this.setState({
          selectedCategory: newProps.product.productCategories.filter(category => category._id === this.state.productDetails.category_id).map(category => { return{value: category._id, label: category.name}})[0]
        })
      }
    }

    if(newProps.product.hasOwnProperty('productBrands') && _.isEqual(this.props.product.productBrands, newProps.product.productBrands) === false){
      this.setState({
        brands: newProps.product.productBrands
      });
      if(this.state.selectedBrand === null){
        this.setState({
          selectedBrand: newProps.product.productBrands.filter(brand => brand._id === this.state.productDetails.brand_id).map(brand => { return{value: brand._id, label: brand.name}})[0]
        })
      }
    }
  }

  componentWillUnmount(){
    clearTimeout(this.cardAnimationSetTimeout);
    this.props.product.productCategories = {};
    this.props.product.productBrands = {};

  }
  render(){

    const {classes} = this.props;
    const {
          selectedOption,
          productDetails,
          selectedBrand,
          tagsSelect,
          brandSelect,
          categorySelect,
          selectedCategory,
          brands,
          categories,
          selectedColors,
          colorsSelect
        } = this.state;
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
                  <CustomInput
                    labelText="UPC"
                    id="upc"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: productDetails.upc,
                      name:"upc",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Product Code"
                    id="code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: productDetails.code,
                      name:"code",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedTags" className={tagsSelect}>Type or Select Product Tags</InputLabel>
                      <Creatable 
                        id="selectedOption"
                        name="selectedOption"
                        value={selectedOption}
                        multi={true}
                        placeholder="Type or Select Product Tags"
                        onChange={this.handleTagChange}
                        options={[]}
                        />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Length (Inches)"
                    id="length"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:"text",
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
                      type: "text",
                      value: productDetails.width,
                      name: "width",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Height (Inches)"
                    id="height"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps ={{
                      type: "text",
                      value: productDetails.height,
                      name: "height",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedColors" className={colorsSelect}>Type or Select Product Colors</InputLabel>
                      <Creatable 
                        id="selectedColors"
                        name="selectedColors"
                        value={selectedColors}
                        multi={true}
                        placeholder="Type or Select Product Colors"
                        onChange={this.handleColorChange}
                        options={[]}
                        />
                  </FormControl>
                </GridItem>
                
                <GridItem xs={12} sm={12} md={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedBrand" className={brandSelect}>Type or Select Product Brand</InputLabel>
                    <Select2 
                      id="selectedBrand"
                      name="selectedBrand"
                      value={selectedBrand}
                      placeholder="Type or Select Product Brand"
                      onChange={this.handleBrandChange}
                      options={brands.map((brand, key) => {
                          return {value: brand._id, label: brand.name}
                      })
                    }
                      />
                    </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedCategory" className={categorySelect}>Type or Select Product Category</InputLabel>
                    <Select2 
                      id="selectedCategory"
                      name="selectedCategory"
                      value={selectedCategory}
                      placeholder="Type or Select Product Category"
                      onChange={this.handleCategoryChange}
                      options={categories.map((category, key) => {
                          return {value: category._id, label: category.name}
                      })
                    }
                      />
                    </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Short Description"
                    id="short_description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 3,
                      name: "short_description",
                      value: productDetails.short_description,
                      onChange: this.handleChange,
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12}>
                  <CustomInput
                    labelText="Description"
                    id="description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value: productDetails.description,
                      name: "description",
                      onChange: this.handleChange,
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
