//@desc this is a stepper that guides vendors in adding new product, "Add new Product" form has been added to each step
// the forms are businessdetails.jsx, productdetails.jsx and createproduct.jsx
//@author Sylvia Onwukwe
//@co author Odewale Ifeoluwa
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import _ from "lodash";
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import AddPage from "./productDetails.jsx"
import BusinessDetails from './businessdetails';

import Button from "../../components/CustomButtons/Button.jsx";

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class ProductStepperEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      productDetails: {
        name: this.props.eachData.name,
        code: this.props.eachData.code,
        upc: this.props.eachData.upc,
        sku: this.props.eachData.sku,
        category: {
          main: this.props.eachData.category.main,
          sub: this.props.eachData.category.sub
        },
        brand: this.props.eachData.brand,
        description: {
          color: this.props.eachData.description.color,
          unit: this.props.eachData.description.unit,
          long: this.props.eachData.description.long,
          short: this.props.eachData.description.short,
          tags: this.props.eachData.description.tags,
        },
        variety:{
          options: this.props.eachData.variety.options,
          parent: this.props.eachData.variety.parent
        },
        price: {
          deal: this.props.eachData.price.deal,
          valuation:this.props.eachData.price.valuation,
          cost_price: this.props.eachData.price.cost_price,
          unit_price: this.props.eachData.price.unit_price,
          slash_price: this.props.eachData.price.slash_price,
          discount: this.props.eachData.price.discount,
          discount_type: this.props.eachData.price.discount_type,
          tax: this.props.eachData.price.tax,
          tax_type: this.props.eachData.price.tax_type,
        },
        shipping_details: {
          cost: this.props.eachData.shipping_details.cost,
          length: this.props.eachData.shipping_details.length,
          height: this.props.eachData.shipping_details.height,
          width: this.props.eachData.shipping_details.width,
          weight: this.props.eachData.shipping_details.weight,
        },
        manufacture_details: {
          make: this.props.eachData.manufacture_details.make,
          model_number: this.props.eachData.manufacture_details.model_number,
          release_date: this.props.eachData.manufacture_details.release_date.match(/^\d{4}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])/)[0]
        },
        download: {
          downloadable: this.props.eachData.download.downloadable,
          download_name: this.props.eachData.download.download_name,
        },
        analytics:{
          featured: this.props.eachData.analytics.featured,
        },
        extra_fields: this.props.eachData.extra_fields
        
      },
      selectElements: {
        selectedOption: this.props.eachData.description.tag &&this.props.eachData.description.tag.length > 0 ? this.props.eachData.description.tag.map(tag => { return {value: tag, label: tag}}) : [],
        selectedColors: this.props.eachData.description.color.length > 0 ? this.props.eachData.description.color.map(color => { return {value: color, label: color}}) : [],
        selectedParents: this.props.eachData.variety.options.length > 0 ? this.props.eachData.variety.parent.map(color => { return {value: color, label: color}}) : [],
        selectedBrand: null,
        selectedCategory: null,
        selectedSubCategory: null,
        selectedDiscount: this.props.eachData.price.discount_type, label: this.props.eachData.price.discount_type.length > 0 ? {value: this.props.eachData.price.discount_type, label: this.props.eachData.price.discount_type.replace(/^\w/, c => c.toUpperCase())} :null,
        selectedTax: {value: this.props.eachData.price.tax_type, label: this.props.eachData.price.tax_type.replace(/^\w/, c => c.toUpperCase())},
        selectedValuation: {value: this.props.eachData.price.valuation, label: this.props.eachData.price.valuation},
      },
      selectStyle: {
        taxSelect: `react-select-label-${this.props.eachData.price.tax_type.length > 0 ? "visible" : "hidden"}`,
        discountSelect: `react-select-label-${this.props.eachData.price.discount_type.length > 0 ? "visible" : "hidden"}`,
        brandSelect: `react-select-label-${this.props.eachData.brand && this.props.eachData.brand.length > 0 ? "visible" : "hidden"}`,
        categorySelect: `react-select-label-${this.props.eachData.category.main &&this.props.eachData.category.main.length > 0 ? "visible" : "hidden"}`,
        subCategorySelect: `react-select-label-${this.props.eachData.category.sub && this.props.eachData.category.sub.length > 0 ? "visible" : "hidden"}`,
        tagsSelect: `react-select-label-${this.props.eachData.description.tag && this.props.eachData.description.tag.length > 0 ? "visible" : "hidden"}`,
        colorsSelect: `react-select-label-${this.props.eachData.description.color && this.props.eachData.description.color.length > 0 ? "visible" : "hidden"}`,
        parentSelect: `react-select-label-${this.props.eachData.variety.parent.length > 0 ? "visible" : "hidden"}`,
        valuationSelect: `react-select-label-${this.props.eachData.price.valuation.length > 0 ? "visible" : "hidden"}`,
      },
      productId: this.props.eachData.id,
    };
  }

  getSteps() {
    return ['Product Details', 'Business Details'];
  }

  getStepContent(step) {
    const {fetchProductBrands, fetchProductCategories, product} = this.props;
    const {productDetails, selectElements, selectStyle} = this.state;

    switch (step) {
      case 0:
        return <AddPage 
        fetchProductBrands={fetchProductBrands} fetchProductCategories={fetchProductCategories}
        product={product}
        productDetails={productDetails} setParentProductDetails={this.setParentProductDetails}
        selectElements={selectElements}
        setParentSelectElements={this.setParentSelectElements}
        selectStyle={selectStyle}
        setParentSelectStyle={this.setParentSelectStyle}
        />;
      case 1:
        return <BusinessDetails 
        productDetails={productDetails}
        product={product}
        setParentProductDetails={this.setParentProductDetails}
        selectElements={selectElements}
        setParentSelectElements={this.setParentSelectElements}
        selectStyle={selectStyle}
        setParentSelectStyle={this.setParentSelectStyle}
        onCloseModal={this.props.onCloseModal}
        />;
      default:
        return 'Unknown step';
    }
  }

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }


  
 setParentProductDetails = (productDetails) => {
    this.setState({
      productDetails: productDetails
    })
  }

  setParentSelectElements = (type, selectElements) => {
    let newSelectElement = JSON.parse(JSON.stringify(this.state.selectElements));
    newSelectElement[type] = selectElements;
    this.setState({
      selectElements: newSelectElement
    })
  }

  setParentSelectStyle = (type, selectStyle) => {
    let newSelectStyle = JSON.parse(JSON.stringify(this.state.selectStyle));
    newSelectStyle[type] = selectStyle;
    this.setState({
      selectStyle: newSelectStyle
    })
  }

  updateProduct = () => {
    this.props.putProductDetails(this.state.productDetails, this.state.productId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.product.hasOwnProperty('updateProduct') && _.isEqual(this.props.product.updateProduct, newProps.product.updateProduct) === false){
      this.props.onCloseModal();
    }
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;
    console.log(this.state.productId);
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - your product has been added
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Add New
              </Button>
            </div>
          ) : (
            <div>
              {this.getStepContent(activeStep)}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                {
                  activeStep === steps.length - 1
                ?
                (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.updateProduct}
                  className={classes.button}
                >
                 Finish
                </Button>
                )
                :
                  (<Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                   Next
                  </Button>
                  )
                }
              </div>
            </div>
          )}
        </div>
       
      </div>
    );
  }
}

ProductStepperEdit.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ProductStepperEdit);