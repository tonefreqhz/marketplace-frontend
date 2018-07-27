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
import {List, ListItem, Collapse, Avatar} from "@material-ui/core";
import {ExpandLess, ExpandMore, Compare, ShoppingCart, AccountCircle, PowerSettingsNew} from '@material-ui/icons';

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Badge from '../../components/Badge/Badge.jsx';
import UsersAuth from "../Auth/UsersAuth.jsx";
import {userIs} from "../Auth/AccessControl.jsx";
import Events from "events";

class HeaderLinks extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      productOpen: false,
      accountOpen: false,
      loginOpen: false,
      signUpOpen: false,
      Cart: (localStorage.cart)? Object.keys(JSON.parse(localStorage.cart)).length : 0,
      Compare: (localStorage.compare)? JSON.parse(localStorage.compare).length : 0
    };

    if(this.props.events){
      this.props.events.on('add-to-cart', this.updateCart.bind(this));
      this.props.events.on('add-to-compare', this.updateCompare.bind(this));
    }

    this.events = new Events();

  }

  updateCart() {
    let cart = (localStorage.cart)? Object.keys(JSON.parse(localStorage.cart)).length : 0;
    this.setState(...this.state, {Cart: cart});
  }

  updateCompare() {
    let compare = (localStorage.compare)? JSON.parse(localStorage.compare).length : 0;
    this.setState(...this.state, {Compare: compare});
  }

  handleProduct = () => {
    this.setState(state => ({ productOpen: !state.productOpen }));
  };

  handleAccount = () => {
    this.setState(state => ({ accountOpen: !state.accountOpen }));
  };

  handleLogin = () => {
    this.setState(state => ({ loginOpen: !state.loginOpen }));
  };

  handleSignUp = () => {
    this.setState(state => ({ signUpOpen: !state.signUpOpen }));
  };

  render() {
    const { classes } = this.props;

  return (
    <div>
      <UsersAuth events={this.events} />
        <List className={classes.list}>
          <ListItem className={classes.listItem} onClick={this.handleAccount}>
            <a className={classes.navLink} color="transparent" >
              <Avatar alt="User Avatar" src={require('../../assets/img/faces/marc.jpg')} style={{marginRight: "10px"}} />
              <span style={{marginTop: "8px"}}>Account
              {this.state.accountOpen ? <ExpandLess style={{marginBottom: "-8px"}} /> : <ExpandMore style={{marginBottom: "-8px"}} />}</span>
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Collapse in={this.state.accountOpen} timeout="auto" unmountOnExit color="transparent">
              <List component="div" style={{marginLeft: "30px"}}>
                <ListItem button className={classes.nested}>
                  <Link to="/profile" className={classes.dropdownLink}><AccountCircle style={{marginBottom: "-8px"}} /> My Profile</Link>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <a onClick={() => this.events.emit("usersLogOut", "customer")} className={classes.dropdownLink}><PowerSettingsNew style={{marginBottom: "-8px"}} /> Logout</a>
                </ListItem>
              </List>
            </Collapse>
          </ListItem>
          <ListItem className={classes.listItem}>
          {(this.state.Cart > 0)?
            <Link to="/cart" className={classes.navLink} color="transparent">
              <ShoppingCart />&nbsp;Shopping Cart&nbsp;<Badge color="primary" className={classes.navLink}>
                <big style={{fontSize: "1.3em"}}>
                  {this.state.Cart}
                </big>
              </Badge>
            </Link>
            :
            <span className={classes.navLink} color="transparent">
              <ShoppingCart />&nbsp;Shopping Cart&nbsp;<Badge color="primary" className={classes.navLink}>
                <big style={{fontSize: "1.3em"}}>
                  {this.state.Cart}
                </big>
              </Badge>
            </span>
          }
          </ListItem>
          <ListItem className={classes.listItem}>
          {(this.state.Compare > 1)?
            <Link to="/compare" className={classes.navLink} color="transparent">
              <Compare />&nbsp;Compare&nbsp;
              <Badge color="primary" className={classes.navLink}>
                <big style={{fontSize: "1.3em"}}>
                  {this.state.Compare}
                </big>
              </Badge>
            </Link>
            :
            <span className={classes.navLink} color="transparent">
              <Compare />&nbsp;Compare&nbsp;
              <Badge color="primary" className={classes.navLink}>
                <big style={{fontSize: "1.3em"}}>
                  {this.state.Compare}
                </big>
              </Badge>
            </span>
          }
          </ListItem>
          {(!userIs(["customer"]))?
            <span>
              <ListItem className={classes.listItem} onClick={this.handleLogin}>
                <Link to="#login" className={classes.navLink} color="transparent">
                  Login {this.state.loginOpen ? <ExpandLess /> : <ExpandMore />}
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Collapse in={this.state.loginOpen} timeout="auto" unmountOnExit color="transparent">
                  <List component="div" style={{marginLeft: "30px"}}>
                    <ListItem button className={classes.nested}>
                      <a
                        className={classes.dropdownLink}
                        onClick={() => {
                          this.events.emit("usersLogin", "Customer");
                        }}
                      >
                        Customer Login
                      </a>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <a
                        className={classes.dropdownLink}
                        onClick={() => {
                          this.events.emit("usersLogin", "Vendor");
                        }}
                      >
                        Vendor Login
                      </a>
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
              <ListItem className={classes.listItem} onClick={this.handleSignUp}>
                <Link to="#register" className={classes.navLink} color="primary">
                  Sign Up {this.state.signUpOpen ? <ExpandLess /> : <ExpandMore />}
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Collapse in={this.state.signUpOpen} timeout="auto" unmountOnExit color="transparent">
                  <List component="div" style={{marginLeft: "30px"}}>
                    <ListItem button className={classes.nested}>
                      <a
                        className={classes.dropdownLink}
                        onClick={() => {
                          this.events.emit("usersSignUp", "Customer");
                        }}
                      >
                        Customer Sign Up
                      </a>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <a
                        className={classes.dropdownLink}
                        onClick={() => {
                          this.events.emit("usersSignUp", "Vendor");
                        }}
                      >
                        Vendor Sign Up
                      </a>
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
            </span>
          :
            null
          }
          <ListItem className={classes.listItem} onClick={this.handleProduct}>
            <Link to="#products" className={classes.navLink} color="transparent">
              Products {this.state.productOpen ? <ExpandLess /> : <ExpandMore />}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Collapse in={this.state.productOpen} timeout="auto" unmountOnExit color="transparent">
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
