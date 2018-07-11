//@desc This is the 'product details' form a vendor fills when adding products. 
//@require This form requires the stepper.jsx(A stepper). It is the first step in adding new products
//@author Sylvia Onwukwe
//@author Odewale Ifeolwa
import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select2 from "react-select";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import 'react-select/dist/react-select.css';
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import ImagePlaceholder from "./ImagePlaceholder";

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
  input:{
    display: "none"
  },
  fluidButton: {
    ...theme.button,
    width: "100%"
  }
});

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      categoryDetails: {
        name:"",
        description: "",
        kind: "",
        logo: {},
        banner: {},
      },
      selectedCategoryKind: null,
      categoryKindSelect: "react-select-label-hidden",
      srcImage: "https://placehold.it/1600x1200/cccccc/453422",
      srcImageThumb: "http://unsplash.it/1600/1200?random",
      
    };
    this.fileInput = React.createRef();
    this.thumbnail = React.createRef();
  }


  //Get the value of Input Element
  handleChange =  (event) => {
    this.setCategoryDetails(event.target.name, event.target.value);
  };

  //Banner File Upload
  onChangeBanner = (e) => {
    this.readURL(this.fileInput.current, "srcImage");
  }

  //Thumbnail File Upload
  onChangeThumbnail = () => {
    this.readURL(this.thumbnail.current, "srcImageThumb")
  }

  //This handles the country select element
  handleCategoryKindChange = (selectedCategoryKind) => {
    this.setState({ selectedCategoryKind });
    if(selectedCategoryKind !== null){
      this.setCategoryDetails("country", selectedCategoryKind.value);
      this.setState({
        categoryKindSelect: "react-select-label-visible"
      })
    }else{
      this.setState({
        categoryKindSelect: "react-select-label-hidden"
      })
    }
  }

  //Rendreing the Image Preview
  readURL = (input, type) => {
      if (input.files && input.files[0]) {
          if(input.files[0].type.match(/image.*/)){
              let reader = new FileReader();
              reader.onload = (e) => {
                //Create a new Image intance
              let image = new Image();
              //Assign the image uploaded to the new image instance
               image.src = e.target.result;
               image.onload = function() {
                    console.log(this.height);
               }
                this.newImageState(type, e.target.result)
              }          
              reader.readAsDataURL(input.files[0]);
          }else{
            alert("The file format is not supported");
          }
          
        }
  }

  //Setting the state of the image
  newImageState = (imageProp, src) => {
    this.setState({
      [imageProp]: src
    });
  }

  //Setting the state of all input feilds
  setCategoryDetails = (type, value) => {
    let newcategoryDetails = JSON.parse(JSON.stringify(this.state.categoryDetails));
    newcategoryDetails[type] = value
    this.setState({
        categoryDetails: newcategoryDetails
    })
  }


  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.cardAnimationSetTimeout = setTimeout(
        this.setState({ cardAnimaton: "" }),
      700
    );
  }
  //Clear the slider when moving to another page
  componentWillUnmount(){
    clearTimeout(this.cardAnimationSetTimeout);
  }
  render(){
    const {classes} = this.props;
    const {categoryDetails,
           categoryKindSelect,
           selectedCategoryKind,
           srcImage,
           srcImageThumb
          } = this.state;
    return (
      <div>
        
        <Card>
            <CardHeader color="primary">
              <div>
                <h4>Add New Product Category</h4>
              </div>
              <div>
                <p>Product Category Details</p>
              </div>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Category Name"
                    id="name"
                    inputProps={{
                      value: categoryDetails.name,
                      name:"name",
                      onChange: this.handleChange
                    }}
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectedCategoryKind" className={categoryKindSelect}>Type or Select Category Kind</InputLabel>
                    <Select2 
                      id="selectedCategoryKind"
                      name="selectedCategoryKind"
                      value={selectedCategoryKind}
                      placeholder="Type or Select Category Kind"
                      onChange={this.handleCategoryKindChange}
                      options={[
                        {value: "digital", label: "Digital"},
                        {value: "physical", label: "Physical"}
                      ]}
                      />
                  </FormControl>
                </GridItem>
              </Grid>
              <Grid container>
                <GridItem xs={12}>
                <CustomInput
                    labelText="Description"
                    id="description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                <div>
                <ImagePlaceholder srcImage={srcImage}/>
                </div>
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span" className={classes.fluidButton}>
                    Upload Category Banner
                  </Button>
                </label>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={this.onChangeBanner}
                  ref={this.fileInput}
                />
                </GridItem>
                
                <GridItem xs={12} md={6}>
                <div>
                <ImagePlaceholder srcImage={srcImageThumb}/>
                </div>
                <label htmlFor="contained-button-thumbnail">
                  <Button variant="contained" color="primary" component="span" className={classes.fluidButton}>
                    Upload Category Thumbnail
                  </Button>
                </label>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-thumbnail"
                  type="file"
                  onChange={this.onChangeThumbnail}
                  ref={this.thumbnail}
                />
                </GridItem>
                
              </Grid>
            </CardBody>
            <CardFooter>
                    <Grid container>
                      <GridItem xs={12}>
                        <Button variant="contained" color="primary" component="span" className={classes.fluidButton}>
                          Create Product Category
                        </Button>
                      </GridItem>
                    </Grid>
            </CardFooter>
          </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AddCategory);
