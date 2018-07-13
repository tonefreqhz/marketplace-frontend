/**
 * @description The component responsible for rendering the responsive header menus.
 * @author Mohammed Odunayo
 * @class HeaderLinks
 * @name HeaderLinks
 */

import React from "react";
import {Link} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {List, ListItem, Collapse} from "@material-ui/core";
import {ExpandLess, ExpandMore, CompareArrows, ShoppingCart} from '@material-ui/icons';

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Badge from '../../components/Badge/Badge.jsx';

class HeaderLinks extends React.Component {

  state = { open: false };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

  return (
    <div>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Link to="/cart" className={classes.navLink} color="transparent">
              <ShoppingCart />&nbsp;Shopping Cart&nbsp;<Badge color="primary" className={classes.navLink}><big style={{fontSize: "1.3em"}}>0</big></Badge>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/compare" className={classes.navLink} color="transparent">
              <CompareArrows />&nbsp;Compare&nbsp;<Badge color="primary" className={classes.navLink}><big style={{fontSize: "1.3em"}}>0</big></Badge>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/login" className={classes.navLink} color="transparent">
              Login
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/register" className={classes.navLink} color="primary">
              Sign Up
            </Link>
          </ListItem>
          <ListItem className={classes.listItem} onClick={this.handleClick}>
            <Link to="#products" className={classes.navLink} color="transparent">
              Products {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit color="transparent">
            <List component="div" style={{marginLeft: "30px"}}>
              <ListItem button className={classes.nested}>
                <Link to="/" className={classes.dropdownLink}>All Products</Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/products/today" className={classes.dropdownLink}>Today's Deal</Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/products/featured" className={classes.dropdownLink}>Featured Products</Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/products/latest" className={classes.dropdownLink}>Latest Products</Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/products/popular" className={classes.dropdownLink}>Popular Products</Link>
              </ListItem>
            </List>
          </Collapse>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/categories" className={classes.navLink} color="transparent">
              Categories
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/vendors" className={classes.navLink} color="transparent">
              Vendors
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/brands" className={classes.navLink} color="transparent">
              Brands
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/blogs" className={classes.navLink} color="transparent">
              Blogs
            </Link>
          </ListItem>
        </List>
    </div>
  );
}
}

export default withStyles(headerLinksStyle)(HeaderLinks);
