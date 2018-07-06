/**
 * @description The QuickView component which render a product brief details.
 * @author Mohammed Odunayo
 * @class QuickView
 * @name QuickView
 */

import React from 'react';
import Carousel from "react-slick";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import {Select, IconButton, FormControl, MenuItem, InputLabel, Chip, DialogActions, DialogContent, DialogTitle, Slide, Dialog} from "@material-ui/core";
// @material-ui/icons
import {Close, ShoppingCart, Pageview, CompareArrows, FavoriteBorder} from "@material-ui/icons";

import Button from "../../components/CustomButtons/Button.jsx";
import Typo from "../../assets/jss/material-kit-react/components/typographyStyle.jsx"
import modalStyle from "../../assets/jss/material-kit-react/modalStyle.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import ProductInfo from "./ProductInfo.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class QuickView extends React.Component{
    state = {
        quantity: 1
    };

    quantityChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

  render(){
    const { classes, param, event } = this.props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    const style = {
        productTitle: {
            margin: "0px",
            fontWeight: "bold"
        },
        chip: {
            margin: "0px 4px 4px 0px",
        },
        formControl: {
            minWidth: "130px"
        }
    };
    return (
      <div>
        <Dialog classes={{
            root: classes.center,
            paper: classes.modal
          }} open={param} TransitionComponent={Transition} keepMounted onClose={event} aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          
          <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
            <IconButton className={classes.modalCloseButton} key="close" aria-label="Close" color="inherit" onClick={event}>
              <Close className={classes.modalClose} />
            </IconButton>
            <h3 className={classes.modalTitle}>Quick View</h3>
          </DialogTitle>
          
          <DialogContent id="modal-slide-description" className={classes.modalBody}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={5}>
                <Carousel {...settings}>
                    <img className="slick-image" src={require("../../assets/img/phone1.jpg")} alt="img" />
                    <img className="slick-image" src={require("../../assets/img/phone2.jpg")} alt="img" />
                    <img className="slick-image" src={require("../../assets/img/img3.jpg")} alt="img" />
                    <img className="slick-image" src={require("../../assets/img/img4.jpg")} alt="img" />
                    <img className="slick-image" src={require("../../assets/img/img5.jpg")} alt="img" />
                </Carousel>
                <Button onClick={event} color="primary" round><CompareArrows/> Compare</Button>
                <Button onClick={event} color="primary" round><FavoriteBorder/> Add To Wishlist</Button>
              </GridItem>
              <GridItem xs={12} sm={7}>
                <h2 style={style.productTitle}>Android Smart Phone</h2>
                <h3 className={classes.productPrice}>
                    <del style={Typo.mutedText}>
                        <small>
                            <strong>$70,000,000</strong>
                        </small>
                    </del>
                    {" "}
                    <span style={Typo.primaryText}><strong>$50,000,000</strong></span>
                </h3>
                <form className={classes.root} autoComplete="off">
                    <FormControl style={style.formControl}>
                        <InputLabel htmlFor="product-quantity">Product Quantity</InputLabel>
                        <Select
                            value={this.state.quantity}
                            onChange={this.quantityChange}
                            inputProps={{ 
                                name: "quantity",
                                id: "product-quantity"
                            }}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Button onClick={event} color="primary" round><ShoppingCart/> Add To Cart</Button>
                <br/><br/>
                <ProductInfo />
                <h3>Related Tags</h3>
                <Chip
                    label="Related Tags"
                    style={style.chip}
                    component="a"
                    href="#"
                    clickable
                />
                <Chip
                    label="Related Tags"
                    style={style.chip}
                    component="a"
                    href="#"
                    clickable
                />
                <Chip
                    label="Related Tags"
                    style={style.chip}
                    component="a"
                    href="#"
                    clickable
                />
                <Chip
                    label="Related Tags"
                    style={style.chip}
                    component="a"
                    href="#"
                    clickable
                />
              </GridItem>
            </GridContainer>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button onClick={event} round><Pageview/> View Details</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(QuickView);