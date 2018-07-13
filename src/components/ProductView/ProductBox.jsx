/**
 * @description The productBox component which renders the grid view for products.
 * @author Mohammed Odunayo
 * @class ProductBox
 * @name ProductBox
 */

import React from "react";
import {Link} from "react-router-dom";
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
            Product: this.props.product,
            QuickViewModal: false
        };

        this.FavToggle = this.FavToggle.bind(this);
        this.QuickViewToggle = this.QuickViewToggle.bind(this);
    }

    FavToggle(){
        let pro = this.state.Product;
        if(pro.favorite){
            pro.favorite = false;
            this.setState(...this.state, {Product: pro});
        } else {
            pro.favorite = true;
            this.setState(...this.state, {Product: pro});
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(...this.state, {Product: newProps.product})
    }

    QuickViewToggle(){
        if(this.state.QuickViewModal){
            this.setState(...this.state, {QuickViewModal: false});
        } else {
            this.setState(...this.state, {QuickViewModal: true});
        }
    }

    render() {
      const { classes, data } = this.props;
      const {Product, QuickViewModal} = this.state;
      
      let Fav = {};
      let LatestSticker;
      let FeaturedSticker;
      
      if(Product.favorite){
        Fav.icon = <Favorite />;
        Fav.tooltip = "Remove From Wishlist";
      }else{
        Fav.icon = <FavoriteBorder />;
        Fav.tooltip = "Add To Wishlist";
      }

      if(Product.latest){
        LatestSticker = <img src={require("../../assets/img/NewProduct.png")} alt="New Product" className={classes.latestSticker}/>;
      }else{
        LatestSticker = null;
      }

      if(Product.featured){
          FeaturedSticker = <img src={require("../../assets/img/FeaturedProduct.png")} alt="New Product" className={classes.featuredSticker}/>;
      }else{
          FeaturedSticker = null;
      }

      return (
        <div>
            <QuickView param={QuickViewModal} favToggle={this.FavToggle} event={this.QuickViewToggle} data={data} product={Product} />
            <Card className={classes.productCon}>
            <Card className={classes.productHead}>
                <img src={Product.images[0]} alt={Product.name} className={classes.productPix} />
                <div className={classes.imgCardOverlay}>
                    {LatestSticker}
                    {FeaturedSticker}
                </div>
            </Card>
            <CardBody className={classes.productBody}>
                <p className={classes.productVendor}>
                    <Link to={"/vendor/"+Product.vendorId} style={Typo.primaryText}>{data.vendors[Product.vendorId].name}</Link>
                </p>
                <h4>
                    <Link to={"/product/"+Product.id} className={classes.productTitle}>{Product.name}</Link>
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
                        title={Fav.tooltip}
                        placement="top"
                        classes={{ tooltip: classes.tooltips }}
                    >
                    <Button round justIcon simple onClick={this.FavToggle} color="primary" size="lg" style={{padding: "0px", margin: "0px auto 0px auto"}}>
                        {Fav.icon}
                    </Button>
                    </Tooltip>
                </div>

                <p style={{textAlign: "center"}}>
                {Product.brief}
                </p>
                <p className={classes.productPrice}>
                    <del style={Typo.mutedText}>
                        <small>
                            <strong>{Product.costPrice}</strong>
                        </small>
                    </del>
                    {" "}
                    <span style={Typo.primaryText}><strong>{Product.sellingPrice}</strong></span>
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
