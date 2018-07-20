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
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddPage from "./productDetails.jsx"
import BusinessDetails from './businessdetails';
import CreateProduct from './createproduct';

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



class ProductStepper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      productDetails: {
        name: "",
        cose: "",
        upc: "",
        sku: "",
        tag: [],
        category_id: "",
        brand_id: "",
        description: "",
        short_description: "",
        unit_cost: "",
        unit_price: "",
        alt_price: "",
        shopping_cost: "",
        unit: "",
        length: "",
        height: "",
        color: "#3d28ac",
        discount: 0.0,
        discount_type: "",
        tax: 0.0,
        tax_type: "",
        download: false,
        download_name: "",
        deal: false,
        valuation: "",
        featured: false,
      }
    };
  }

  getSteps() {
    return ['Product Details', 'Business Details', 'Create Product'];
  }

  getStepContent(step) {
    const {fetchProductBrands, fetchProductCategories, product} = this.props;
    const {productDetails} = this.state;

    switch (step) {
      case 0:
        return <AddPage fetchProductBrands={fetchProductBrands} fetchProductCategories={fetchProductCategories}
        product={product} productDetails={productDetails} setParentProductDetails={this.setParentProductDetails}/>;
      case 1:
        return <BusinessDetails productDetails={productDetails}setParentProductDetails={this.setParentProductDetails}/>;
      case 2:
        return <CreateProduct/>;
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

  render() {
    console.log(this.state.productDetails);
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ProductStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ProductStepper);