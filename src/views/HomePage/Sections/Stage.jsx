/**
 * @description The stage section for the home page.
 * @author Mohammed Odunayo
 * @class Stage
 * @name Stage
 */

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import basicsStyle from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import ProductView from "../../../components/ProductView/ProductView";
import Sidebar from "../../../components/Sidebar/CategoryCard";
import MinSearch from "../../../components/Search/MinSearch";
import AdvanceSearch from "../../../components/Search/AdvanceSearch";

class Stage extends React.Component {
  
  render() {
    const { classes, categories } = this.props;

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
      }
    }

    const params = [
      {
        name: "Today's Deal",
        productProps: {
          featured: false,
          latest: false,
          discount: false,
          outOfStock: false
        }
      },
      {
        name: "Featured Products",
        productProps: {
          featured: true,
          latest: false,
          discount: false,
          outOfStock: false
        }
      },
      {
        name: "Latest Products",
        productProps: {
          featured: false,
          latest: true,
          discount: false,
          outOfStock: false
        }
      },
      {
        name: "Popular Products",
        productProps: {
          featured: false,
          latest: false,
          discount: false,
          outOfStock: false
        }
      }
    ];

    let content = null;

    if (categories.length !== 0) {
      content = categories.map((category, index) => {
        return(<Sidebar category={category} key={index}/>);
      });
    }

    return (
      <div className={classes.sections}>
        <div style={styles.container}>
          <div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={9}>
                <div style={styles.cols}>
                  <MinSearch location="stage"/>
                  {params.map((param, index) => {
                    return(<ProductView params={param} key={index}/>);
                  })}
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <div style={styles.cols}>
                  <MinSearch location="sidebar"/>
                  <AdvanceSearch
                    slideRange={{min: 10000, max: 100000000}}
                    slideState={[20000000, 80000000]}
                    slideStep={1000}
                  />
                  {content}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(Stage);
