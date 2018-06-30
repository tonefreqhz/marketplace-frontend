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

class ProductBox extends React.Component {

    constructor(props){
        super(props);

        this.state = {style :
                        {
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
                                backgroundColor: "#fefefe",
                                boxShadow: null,
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
                        }
          }

          this.handleMouseOver = this.handleMouseOver.bind(this);
          this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(){
        const style = {...this.state.style, productCon: {
            padding: "0px 15px",
            backgroundColor: "#fefefe",
            boxShadow: "0px 0px 10px 3px rgba(125, 125, 125,0.3)",
        }};
        this.setState({style: style});

        
    }

    handleMouseOut(){
        const style = {...this.state.style, productCon: {
            padding: "0px 15px",
            backgroundColor: "#fefefe",
            boxShadow: null,
        }};
        
        this.setState({style: style});

        
    }

    render() {
      const { classes } = this.props;
      const {style} = this.state;
      return (
        <Card style={style.productCon} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
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
  
  const product = new ProductBox();

  export default withStyles(product.state.style)(ProductBox);  