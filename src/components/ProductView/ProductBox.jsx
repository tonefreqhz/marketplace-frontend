/**
 * @description The productBox component which renders the grid view for products.
 * @author Mohammed Odunayo
 * @class ProductBox
 * @name ProductBox
 */

import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import {ShoppingCart, Visibility, Favorite, FavoriteBorder, CompareArrows} from "@material-ui/icons";
import PropTypes from 'prop-types';
// core components
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Typo from "../../assets/jss/material-kit-react/components/typographyStyle.jsx";
import tooltipsStyle from "../../assets/jss/material-kit-react/tooltipsStyle.jsx";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.jsx";
import QuickView from "./QuickView.jsx";

const styles = theme => ({
        tooltips: tooltipsStyle.tooltip,
        ...imagesStyles,
        productPix: {
            width: "100%"
        },
        latestSticker: {
            width: "30%",
            position: "absolute",
            right: "0px",
            top: "0px"
        },
        featuredSticker: {
            width: "30%",
            position: "absolute",
            left: "0px",
            top: "0px"
        },
        productHead: {
            padding: "0px",
            margin: "-30px auto 0px auto",
            overflow: "hidden",
            borderRadius: "5%"
        },
        productCon: {
            padding: "0px 15px",
            backgroundColor: "#fefefe",
            transition: "box-shadow 0.4s",
            "&:hover": {
                boxShadow: "0px 0px 10px 3px rgba(125, 125, 125,0.5)"
            }
        },
        productBody: {
            padding: "10px 0px 15px 0px"
        },
        productTitle: {
            color: "#444444",
            textAlign: "center",
            display: "block",
            fontWeight: "bold",
            "&:hover": Typo.primaryText
        },
        productVendor: {
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "0px"
        },
        Cart: {
            fontWeight: "bold",
            fontSize: "1.3em"
        },
        productPrice: {
            fontSize: "1.3em",
            textAlign: "center"
        }
    });

class ProductBox extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            FavoriteProducts: false,
            QuickViewModal: false
        };

        this.FavToggle = this.FavToggle.bind(this);
        this.QuickViewToggle = this.QuickViewToggle.bind(this);
    }

    FavToggle(){
        if(this.state.FavoriteProducts){
            this.setState(...this.state, {FavoriteProducts: false});
        } else {
            this.setState(...this.state, {FavoriteProducts: true});
        }
    }

    QuickViewToggle(){
        if(this.state.QuickViewModal){
            this.setState(...this.state, {QuickViewModal: false});
        } else {
            this.setState(...this.state, {QuickViewModal: true});
        }
    }

    render() {
      const { classes, params } = this.props;
      const {FavoriteProducts, QuickViewModal} = this.state;
      
      let Fav;
      let LatestSticker;
      let FeaturedSticker;
      
      if(FavoriteProducts){
        Fav = <Favorite />;
      }else{
        Fav = <FavoriteBorder />
      }

      if(params.latest){
        LatestSticker = <img src={require("../../assets/img/NewProduct.png")} alt="New Product" className={classes.latestSticker}/>;
      }else{
        LatestSticker = null;
      }

      if(params.featured){
          FeaturedSticker = <img src={require("../../assets/img/FeaturedProduct.png")} alt="New Product" className={classes.featuredSticker}/>;
      }else{
          FeaturedSticker = null;
      }

      return (
        <div>
            <QuickView param={QuickViewModal} event={this.QuickViewToggle} />
            <Card className={classes.productCon}>
            <Card className={classes.productHead}>
                <img src={require("../../assets/img/phone2.jpg")} alt="Product" className={classes.productPix} />
                <div className={classes.imgCardOverlay}>
                    {LatestSticker}
                    {FeaturedSticker}
                </div>
            </Card>
            <CardBody className={classes.productBody}>
                <p className={classes.productVendor}>
                    <a href="#vendor-link" style={Typo.primaryText}>Bezop</a>
                </p>
                <h4>
                    <a href="#product-link" className={classes.productTitle}>Android Smart Phone</a>
                </h4>

                <div style={{margin: "0px auto", display: "block", textAlign: "center"}}>
                    <Tooltip
                        title="Quick View"
                        placement="top"
                        classes={{ tooltip: classes.tooltips }}
                    >
                    <Button round onClick={this.QuickViewToggle} justIcon simple color="primary" size="lg" style={{padding: "0px", margin: "0px auto 0px auto"}}>
                        <Visibility />
                    </Button>
                    </Tooltip>

                    <Tooltip
                        title="Compare Product"
                        placement="top"
                        classes={{ tooltip: classes.tooltips }}
                    >
                    <Button round justIcon simple color="primary" size="lg" style={{padding: "0px", margin: "0px auto 0px auto"}}>
                        <CompareArrows />
                    </Button>
                    </Tooltip>

                    <Tooltip
                        title="Add to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltips }}
                    >
                    <Button round justIcon simple onClick={this.FavToggle} color="primary" size="lg" style={{padding: "0px", margin: "0px auto 0px auto"}}>
                        {Fav}
                    </Button>
                    </Tooltip>
                </div>

                <p style={{textAlign: "center"}}>
                With supporting text below as a
                natural lead-in to additional content.
                </p>
                <p className={classes.productPrice}>
                    <del style={Typo.mutedText}>
                        <small>
                            <strong>$70,000,000</strong>
                        </small>
                    </del>
                    {" "}
                    <span style={Typo.primaryText}><strong>$50,000,000</strong></span>
                </p>
                <Button color="primary" fullWidth round className={classes.Cart}>
                    <ShoppingCart /> Add To Cart
                </Button>
            </CardBody>
            </Card>
        </div>
      );
    }
  }

  ProductBox.prototypes = {
    classes: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  };

  export default withStyles(styles)(ProductBox);
