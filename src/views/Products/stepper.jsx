//@desc this is a stepper that guides vendors in adding new product, "Add new Product" form has been added to each step
// the forms are businessdetails.jsx, productdetails.jsx and createproduct.jsx
//@author Sylvia Onwukwe
//@co author Odewale Ifeoluwa
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import _ from "lodash";
import AddPage from "./productDetails.jsx"
import BusinessDetails from './businessdetails';
import Snackbar from '@material-ui/core/Snackbar';

import Button from "../../components/CustomButtons/Button.jsx";
import BezopSnackBar from "../../assets/jss/bezop-mkr/BezopSnackBar";

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

const productInformation = {
  name: "",
  code: "",
  upc: "",
  sku: "",
  category: {
    main: "",
    sub: ""
  },
  brand: "",
  description: {
    color: [],
    unit: "",
    long: "",
    short: "",
    tag: [],
  },
  variety:{
    options: false,
    parent: "",
  },
  price: {
    deal: false,
    valuation: "FIFO",
    cost_price: "",
    unit_price: "",
    slash_price: "",
    discount: 0.0,
    discount_type: "",
    tax: 0.0,
    tax_type: "",
  },
  shipping_details: {
    cost: 0.0,
    length: "",
    height: "",
    width: "",
    weight: "",
  },
  manufacture_details: {
    make: "",
    model_number: "",
    release_date: null
  },
  download: {
    downloadable: false,
    download_name: "",
  },
  analytics:{
    featured: false,
  },
  extra_fields: []
  
};

const selectElementsDropdown = {
  selectedOption: [],
  selectedColors: [],
  selectedBrand: null,
  selectedCategory: null,
  selectedSubCategory: null,
  selectedDiscount: null,
  selectedTax: null,
  selectedValuation: null,
}

const selectStyleDropdown = {
  taxSelect: "react-select-label-hidden",
  discountSelect: "react-select-label-hidden",
  brandSelect: "react-select-label-hidden",
  categorySelect: "react-select-label-hidden",
  subCategorySelect: "react-select-label-hidden",
  tagsSelect: "react-select-label-hidden",
  colorsSelect: "react-select-label-hidden",
  valuationSelect: "react-select-label-hidden",
}

class ProductStepper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      productDetails: productInformation,
      selectElements: selectElementsDropdown,
      selectStyle: selectStyleDropdown
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
        product={product} 
        productDetails={productDetails} 
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

  componentWillReceiveProps(newProps){
    if(newProps.product.hasOwnProperty('addProduct') && _.isEqual(this.props.product.addProduct, newProps.product.addProduct) === false){
      
      this.setState({
        productDetails: productInformation,
        selectElements: selectElementsDropdown,
        selectStyle: selectStyleDropdown
      });

      this.props.onCloseModal();
    }
  }
  

  createProduct = () => {
    this.props.postProductDetails(this.state.productDetails);
  }

  render() {

    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep,
            snackBarMessageSuccess,
            snackBarOpenSuccess } = this.state;

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
                  onClick={this.createProduct}
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
        <Snackbar
            anchorOrigin={{vertical: "top", horizontal: "center"}}
            open={snackBarOpenSuccess}
            onClose={this.onCloseHandlerSuccess}
          >
              <BezopSnackBar
              onClose={this.onCloseHandlerSuccess}
              variant="success"
              message={snackBarMessageSuccess}
              />
            </Snackbar>
      </div>
    );
  }
}

ProductStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ProductStepper);