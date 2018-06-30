import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from "../../components/CustomButtons/Button.jsx";

import { cardTitle } from "../../assets/jss/material-kit-react.jsx";
import Typo from "../../assets/jss/material-kit-react/components/typographyStyle";
import Cart from "@material-ui/icons/ShoppingCart";

const style = {
  cardTitle,
  productPix: {
      width: "100%"
  },
  productHead: {
      padding: "0px",
      margin: "-30px auto 0px auto",
      overflow: "hidden"
  },
  productCon: {
      padding: "0px 15px",
      backgroundColor: "#fefefe"
  },
  productBody: {
      padding: "10px 0px 15px 0px"
  },
  productTitle: {
      color: "#444444",
      textAlign: "center",
      display: "block"
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
};

class ProductBox extends React.Component {
    render() {
      const { classes } = this.props;
      return (
        <Card style={style.productCon}>
          <Card style={style.productHead}>
              <img src={require("../../assets/img/phone2.jpg")} alt="Product" style={style.productPix} />
          </Card>
          <CardBody style={style.productBody}>
            <p style={style.productVendor}>
                <a href="#vendor-link" style={Typo.primaryText}>Bezop</a>
            </p>
            <h4 className={classes.cardTitle}>
                <a href="#product-link" style={style.productTitle}>Android Smart Phone</a>
            </h4>
            <p style={{textAlign: "center"}}>
              With supporting text below as a
              natural lead-in to additional content.
            </p>
            <p style={style.productPrice}>
                <del style={Typo.mutedText}>
                    <small>
                        <strong>$70,000,000</strong>
                    </small>
                </del>
                &nbsp;
                <span style={Typo.primaryText}><strong>$50,000,000</strong></span>
            </p>
            <Button color="primary" fullWidth round style={style.Cart}>
                <Cart /> Add To Cart
            </Button>
          </CardBody>
        </Card>
      );
    }
  }
  
  export default withStyles(style)(ProductBox);  