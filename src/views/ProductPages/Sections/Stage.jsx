/**
 * @description The stage section for the product page.
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
import DetailView from "../../../components/ProductView/DetailView";

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
    if(!this.props.singleProduct) {
      if (newProps.products.length > 0) {
        this.setState(...this.state, {priceRange: this.getPriceRange(newProps.products)});
      }
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
    const { classes, ...data } = this.props;

    let priceRange = [1,2];

    if(!data.singleProduct){
      priceRange = (data.products.length > 0)? this.getPriceRange(data.products) : [1,2];
    }

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

    let content = null;

    if(!data.singleProduct) {
      if (data.categories.length !== 0) {
        content = data.categories.map((category, index) => {
          return(<Sidebar category={category} key={index}/>);
        });
      }
    }

    return (
      <div className={classes.sections}>
        <div style={styles.container}>
          <div>
            <GridContainer justify="center">
                  <MinSearch location="stage"/>
                  {(data.singleProduct)?
                    <GridItem sm={12}>
                      <div style={styles.cols}>
                        <DetailView product={data.product} vendor={data.vendor} brand={data.brand} />
                      </div>
                    </GridItem>
                    :
                    <GridItem xs={12} sm={12} md={9}>
                      <div style={styles.cols}>
                        <ProductView products={data.products} range={this.state.priceRange} data={data} all={true} heading={data.heading}/>
                      </div>
                    </GridItem>
                  }
                
                  {(data.singleProduct)?
                    null
                    :
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
                  }
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(Stage);
