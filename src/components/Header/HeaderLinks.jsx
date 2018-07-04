/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import CartIcon from '@material-ui/icons/ShoppingCart';
import CompareIcon from '@material-ui/icons/CompareArrows';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
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
              <CartIcon />&nbsp;Shopping Cart&nbsp;<Badge color="primary" className={classes.navLink}><big style={{fontSize: "1.3em"}}>0</big></Badge>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/compare" className={classes.navLink} color="transparent">
              <CompareIcon />&nbsp;Compare&nbsp;<Badge color="primary" className={classes.navLink}><big style={{fontSize: "1.3em"}}>0</big></Badge>
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
            <Link to="/products" className={classes.navLink} color="transparent">
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
                <Link to="/product/today" className={classes.dropdownLink}>Today's Deal</Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/product/featured" className={classes.dropdownLink}>Featured Products</Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/product/latest" className={classes.dropdownLink}>Latest Products</Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/product/popular" className={classes.dropdownLink}>Popular Products</Link>
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
            <Link to="/categories" className={classes.navLink} color="transparent">
              Blogs
            </Link>
          </ListItem>
        </List>
    </div>
  );
}
}

export default withStyles(headerLinksStyle)(HeaderLinks);
