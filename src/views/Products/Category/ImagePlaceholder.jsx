import React from "react";
import { withStyles } from '@material-ui/core/styles';
import validator from "../../../helpers/validator";
import Snackbar from '@material-ui/core/Snackbar';
import BezopSnackBar from "../../../assets/jss/bezop-mkr/BezopSnackBar";

import Button from "../../../components/CustomButtons/Button.jsx";

const styles = theme => ({
    input:{
      display: "none"
    },
    fluidButton: {
        ...theme.button,
        width: "100%",
        fontSize: "12px",
        background: "#464646",
        backgroundColor: "#464646"
      },
    sizeButton: {
        ...theme.button,
        width: "100%",
        fontSize: "11px"
    },
    imgWrapper:{
        position: "relative",
    },
    imgClose:{
        position: "absolute",
        color: "#ffffff",
        zIndex: "10",
        right:"-10px",
        top: "-5px",
        fontSize: "12px",
        fontWeight: "bolder",
        cursor: "pointer",
        background: "#f43b3b",
        padding: "1px 10px",
        borderRadius: "50%",
        "&:hover":{
            boxShadow: "0px 2px 4px #444444"
        },
}});

class ImagePlaceholder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            [this.props.fileInput]: this.props.srcImage,
            snackBarOpen: false,
            snackBarMessage: ""

        }
        this[this.props.fileInput] = React.createRef();
    }

     //Render the Image Preview
  readURL = (input, type, width = 0, height = 0) => {
    if (input.files && input.files[0]) {
      
        if(input.files[0].type.match(/image.*/)){
          if(input.files[0].size < (1 * 1024 * 1024)){
            let reader = new FileReader();
            reader.onload = (e) => {
              //Create a new Image intance
            let image = new Image();
            //Assign the image uploaded to the new image instance
             image.src = e.target.result;
             let that = this;
             image.onload = function() {
                if(validator.minHeight(this.height, height) || validator.minWidth(this.width, width)){
                  that.setState({
                    snackBarOpen: true,
                    snackBarMessage: `Either the height of the image is less than ${height} or width less than ${width}`
                  })
                }else{
                  that.newImageState(type, e.target.result);
                }
             }
              
            }  
            
            reader.readAsDataURL(input.files[0]);
          }else{
            this.setState({
              snackBarOpen: true,
              snackBarMessage: `Sorry, only image size should not be more than 1MB`
            })
          }
            
            
        }else{
          this.setState({
            snackBarOpen: true,
            snackBarMessage: `Sorry, only "jpeg, jpg, gif and png is allowed"`
          })
        }
        
      }
    }


    //Setting the state of the image preview
    newImageState = (imageProp, src) => {
        this.setState({
        [imageProp]: src
        });
    }

     //File Upload
    onChangeFile = (e) => {
        this.readURL(this[this.props.fileInput].current, this.props.fileInput, this.props.width, this.props.height);

    }

    onCloseHandler = () => {
        this.setState({ snackBarOpen: false });
    }


    componentWillReceiveProps(newProps){
        if(this.props[this.props.fileInput] !== newProps[this.props.fileInput]){
            this.setState({
                [this.props.fileInput]: newProps[this.props.fileInput]
            })
        }
    }

    componentDidUpdate(prevProps){
        //console.log(this.props.srcImage)
        if(this.props[this.props.fileInput] !== prevProps[this.props.fileInput]){
            this.setState({
                [this.props.fileInput] : this.props[this.props.fileInput]
            })
        }
    }

    handleImageRemoval = imgSrc => {
        this.setState({
            [imgSrc] : this.props.srcImage
        })
    }


    render(){
        const {snackBarMessage, snackBarOpen} = this.state;
        const style = {width: "150px", marginBottom: "10px", marginTop: "10px"};
        const {classes, label} = this.props;
        return (
            <div>
                <div className={classes.imgWrapper}>
                    <div>
                        <img src={this.state[this.props.fileInput]} alt="" style={style}/>
                    </div>
                    
                    {
                    this.state[this.props.fileInput] !== undefined && this.state[this.props.fileInput].startsWith("data")
                    ?
                    (
                        <div>
                        <span className={`${classes.imgClose} not-selectable`} onClick={() => this.handleImageRemoval(this.props.fileInput)}>X</span>
                        <Button variant="contained" color="primary" component="span" className={classes.sizeButton} >
                            Upload {label}
                        </Button>
                    </div>
                    )
                    :
                    (
                      
                    <div>
                        {
                            /**
                             * The htmlFor attribute of the label element
                             * need to be the same with id attribute of input
                             * but must be unique for every time this component
                             * is initiated on the same page
                             */
                        }
                        <div className="img-size-display">{`${this.props.width} X ${this.props.height}`}</div>
                        <label htmlFor={this.props.fileInput}>
                            <Button variant="contained" component="span" className={classes.fluidButton}>
                            Choose File
                            </Button>
                        </label>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id={this.props.fileInput}
                            type="file"
                            onChange={this.onChangeFile}
                            ref={this[this.props.fileInput]}
                            name={this.props.fileInput}
                        />
                    </div>
                    )
                    }
                    
                </div>
                <Snackbar
                    anchorOrigin={{vertical: "top", horizontal: "center"}}
                    open={snackBarOpen}
                    onClose={this.onCloseHandler}
                >
                    <BezopSnackBar
                    onClose={this.onCloseHandler}
                    variant="error"
                    message={snackBarMessage}
                    />
                    </Snackbar>
            </div>

                
            )
    }
}

export default withStyles(styles)(ImagePlaceholder);
