/**
 * @description Blog stage section for the blog page.
 * @author Mohammed Odunayo
 * @class BlogStage
 * @name BlogStage
 */

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import basicsStyle from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
// import Sidebar from "../../../components/Sidebar/CategoryCard";
import MinSearch from "../../../components/Search/MinSearch";
import BlogList from "../../../components/BlogView/BlogList";
import { Hidden } from "../../../../node_modules/@material-ui/core";
import { TrendingUp } from "@material-ui/icons";

class BlogStage extends React.Component {
  
  render() {
    const { classes } = this.props;

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

    // if (data.categories.length !== 0) {
    //   content = data.categories.map((category, index) => {
    //     return(<Sidebar category={category} key={index}/>);
    //   });
    // }

    return (
      <div className={classes.sections}>
        <div style={styles.container}>
          <div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={9}>
                <div style={styles.cols}>
                  <MinSearch location="stage"/>
                  <Hidden smDown>
                    <h2 style={styles.header}><TrendingUp style={{fontSize: "1em"}} /> Trending Post</h2>
                  </Hidden>
                  <Hidden mdUp>
                    <h3 style={styles.header}><TrendingUp style={{fontSize: "1em"}} /> Trending Post</h3>
                  </Hidden>
                  {[false,true,false,true].map((item, index) => <BlogList img={item} key={index}/>)}
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <div style={styles.cols}>
                  <MinSearch location="sidebar"/>
                  {/* {content} */}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(BlogStage);
