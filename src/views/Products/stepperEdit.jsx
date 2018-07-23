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
        tag: this.props.eachData.tag || [],
        category_id: this.props.eachData.category_id,
        brand_id: this.props.eachData.brand_id,
        description: this.props.eachData.description,
        short_description: this.props.eachData.short_description,
        unit_cost: this.props.eachData.unit_cost,
        unit_price: this.props.eachData.unit_price,
        alt_price: this.props.eachData.alt_price,
        shipping_cost: this.props.eachData.shipping_cost || 0.0,
        unit: this.props.eachData.unit,
        length: this.props.eachData.length,
        height: this.props.eachData.height,
        width: this.props.eachData.width,
        color: this.props.eachData.color || [],
        discount: this.props.eachData.discount || 0.00,
        discount_type: this.props.eachData.discount_type || "fixed",
        tax: this.props.eachData.tax || 0.00,
        tax_type: this.props.eachData.tax_type || "fixed",
        download: this.props.eachData.download || false,
        download_name: this.props.eachData.download_name,
        deal: this.props.eachData.deal || false,
        featured: this.props.eachData.featured || false,
        valuation: this.props.eachData.valuation,
      },
      selectElements: {
        selectedOption: this.props.eachData.tag.length > 0 ? this.props.eachData.tag.map(tag => { return {value: tag, label: tag}}) : [],
        selectedColors: this.props.eachData.color.length > 0 ? this.props.eachData.color.map(color => { return {value: color, label: color}}) : [],
        selectedBrand: null,
        selectedCategory: null,
        selectedDiscount: this.props.eachData.tax_type.length > 0 ? {value: this.props.eachData.discount_type, label: this.props.eachData.discount_type.replace(/^\w/, c => c.toUpperCase())} :null,
        selectedTax: {value: this.props.eachData.tax_type, label: this.props.eachData.tax_type.replace(/^\w/, c => c.toUpperCase())},
        selectedValuation: {value: this.props.eachData.valuation, label: this.props.eachData.valuation},
      },
      selectStyle: {
        taxSelect: `react-select-label-${this.props.eachData.tax_type.length > 0 ? "visible" : "hidden"}`,
        discountSelect: `react-select-label-${this.props.eachData.discount_type.length > 0 ? "visible" : "hidden"}`,
        brandSelect: `react-select-label-${this.props.eachData.brand_id.length > 0 ? "visible" : "hidden"}`,
        categorySelect: `react-select-label-${this.props.eachData.category_id.length > 0 ? "visible" : "hidden"}`,
        tagsSelect: `react-select-label-${this.props.eachData.tag.length > 0 ? "visible" : "hidden"}`,
        colorsSelect: `react-select-label-${this.props.eachData.color.length > 0 ? "visible" : "hidden"}`,
        valuationSelect: `react-select-label-${this.props.eachData.valuation.length > 0 ? "visible" : "hidden"}`,
      },
      productId: this.props.eachData._id,
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