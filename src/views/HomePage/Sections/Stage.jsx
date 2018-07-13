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

  constructor(props) {
    super(props);

    this.state = {
      priceRange: [1,2]
    }

    this.getPriceRange = this.getPriceRange.bind(this);
    this.setPriceRange = this.setPriceRange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.products.length > 0) {
      this.setState(...this.state, {priceRange: this.getPriceRange(newProps.products)});
    }
  }
  
  getPriceRange(arr) {
    let min = arr[0].discountPrice, max = arr[0].discountPrice;
  
    for (let i = 1, len=arr.length; i < len; i++) {
      let v = arr[i].discountPrice;
      min = (v < min) ? v : min;
      max = (v > max) ? v : max;
    }

    min = Math.floor((min + 1) / 100) * 100;
    max = Math.ceil((max + 1) / 100) * 100;

    return ([min, max]);
  }

  setPriceRange(values) {
    this.setState(...this.state, {priceRange: values});
  }
  
  render() {
    const { classes, products, ...data } = this.props;

    let priceRange = [1,2];
    priceRange = (products.length > 0)? this.getPriceRange(products) : [1,2];

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

    const todaysDeal = products.filter(product => product.todaysDeal === true);
    const featured = products.filter(product => product.featured === true);
    const latest = products.filter(product => product.latest === true);
    const popular = products.filter(product => product.popular === true);

    let content = null;

    if (data.categories.length !== 0) {
      content = data.categories.map((category, index) => {
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
                  <ProductView products={todaysDeal} moreLink="/products/today" range={this.state.priceRange} data={data} heading="Today's Deals"/>
                  <ProductView products={featured} moreLink="/products/featured" range={this.state.priceRange} data={data} heading="Featured Products"/>
                  <ProductView products={latest} moreLink="/products/latest" range={this.state.priceRange} data={data} heading="Latest Products"/>
                  <ProductView products={popular} moreLink="/products/popular" range={this.state.priceRange} data={data} heading="Popular Products"/>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <div style={styles.cols}>
                  <MinSearch location="sidebar"/>
                  <AdvanceSearch
                    slideRange={{min: priceRange[0], max: priceRange[1]}}
                    slideState={this.state.priceRange}
                    slideStep={(priceRange[1] / priceRange[0])}
                    data={data}
                    slideEvent={this.setPriceRange}
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
