/**
 * @description The component responsible for rendering the header menus.
 * @author Mohammed Odunayo
 * @class LeftLinks
 * @name LeftLinks
 */

import React from "react";
import {NavLink} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {List, ListItem, Tooltip} from "@material-ui/core";
import {ShoppingCart, CompareArrows} from '@material-ui/icons';

import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.jsx";
import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Badge from '../../components/Badge/Badge.jsx';

class LeftLinks extends React.Component {
  
  render() {
    const { classes } = this.props;

    return (
      <div>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <CustomDropdown buttonText="Products" dropdownHeader="Products"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                dropdownList={[
                  <NavLink to="/" className={classes.dropdownLink}>All Products</NavLink>,
                  <NavLink to="/products/today" className={classes.dropdownLink}>Today's Deal</NavLink>,
                  <NavLink to="/products/featured" className={classes.dropdownLink}>Featured Products</NavLink>,
                  <NavLink to="/products/latest" className={classes.dropdownLink}>Latest Products</NavLink>,
                  <NavLink to="/products/popular" className={classes.dropdownLink}>Popular Products</NavLink>,
                ]}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <NavLink to="/categories" className={classes.navLink} color="transparent">
                Categories
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <NavLink to="/vendors" className={classes.navLink} color="transparent">
                Vendors
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <NavLink to="/brands" className={classes.navLink} color="transparent">
                Brands
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <NavLink to="/blogs" className={classes.navLink} color="transparent">
                Blogs
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <NavLink to="/login" className={classes.navLink} color="transparent">
                Login
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <NavLink to="/register" className={classes.navLink} color="primary">
                Sign Up
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip title="Compare Products" placement="bottom" classes={{ tooltip: classes.tooltip }}>
                <NavLink to="/compare" className={classes.navLink} color="transparent">
                  <CompareArrows /><Badge color="primary" className={classes.navLink}><big style={{fontSize: "1.3em"}}>0</big></Badge>
                </NavLink>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip title="View Shopping Cart" placement="bottom" classes={{ tooltip: classes.tooltip }}>
                <NavLink to="/cart" className={classes.navLink} color="transparent">
                  <ShoppingCart /><Badge color="primary" className={classes.navLink}><big style={{fontSize: "1.3em"}}>0</big></Badge>
                </NavLink>
              </Tooltip>
            </ListItem>
          </List>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(LeftLinks);
