import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// nodejs library to set properties for components

import Button from '../../components/CustomButtons/Button.jsx';
import More from "@material-ui/icons/ViewList"
import { Hidden } from "@material-ui/core";
import basicsStyle from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";

import ProductBox from "./ProductBox.jsx";

class ProductView extends React.Component {
    render() {
        const { params } = this.props;

        const styles = {
            cols:{
            display: "block",
            marginBottom: "30px"
            },
            container:{
            padding: "0px 30px"
            },
            header:{
            borderBottom: "1px solid lightgray"
            },
            bigMore:{
            float: "right", fontSize: "0.4em"
            },
            smallMore:{
            float: "right",
            fontSize: "0.6em",
            marginTop: "-10px"
            },
            productArea:{
                padding: "30px 0px"
            }
        }

        return (
            <div>
                <Hidden smDown>
                    <h2 style={styles.header}>{params.name}
                    <Button color="primary" size="sm" round style={styles.bigMore}><More />
                        { (params.moreText) ? params.moreText : "More..." }
                    </Button>
                    </h2>
                </Hidden>
                <Hidden mdUp>
                    <h3 style={styles.header}>{params.name}
                    <Button color="primary" size="sm" round style={styles.smallMore}><More />
                        { (params.moreText) ? params.moreText : "More..." }
                    </Button>
                    </h3>
                </Hidden>
                <GridContainer style={styles.productArea}>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <ProductBox />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <ProductBox />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <ProductBox />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <ProductBox />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <ProductBox />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <ProductBox />
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
  }
  
  export default withStyles(basicsStyle)(ProductView);