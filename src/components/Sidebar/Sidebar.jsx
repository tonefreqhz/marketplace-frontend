//@desc This is the sidebar component
//@author Sylvia Onwukwe
//@co author Odewale Ifeoluwa

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";


// material UI icon
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
// core components
import HeaderLinks from "../Header/HeaderLinks.jsx";

import sidebarStyle from "./sidebarStyle.jsx";

class Sidebar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      open: true
    }

  }
  // verifies if routeName is the one active (in browser input)
  activeRoute = (routeName) => {
    return this.props.match.url === routeName ? true : false;
  }

  activeParentMenu = (parentPath, subMenuPath) => {
      return subMenuPath.search(parentPath) !== -1 ? true : false;
  }


  //The Submenu Toggle
  handleClick = () => {
    this.setState(state => ({ open: !this.state.open }));
  };

  render(){
  const { classes, color, logo, image, logoText, routes } = this.props;
//To check parent main 
  let activeClass;

  let subMenuActiveClass;
  let links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        //Check if prop has resirect property if so return null
        
        if (prop.redirect) return null;

        if(prop.path !== "/upgrade-to-pro"){
          activeClass = classNames({ [" " + classes[color]]: this.activeRoute(prop.path) });
          if(prop.hasOwnProperty("subMenu")){
            activeClass = classNames({ [" " + classes[color]]: this.activeParentMenu(prop.path, this.props.match.url) });
          }
        }

        const whiteFontClasses = classNames({[" " + classes.whiteFont]: this.activeRoute(prop.path)});
        //Check if prop has subMenu property
        if(!prop.hasOwnProperty("subMenu")){

        return (
          <NavLink
            to={prop.path}
            className={classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + activeClass}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                <prop.icon />
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText + whiteFontClasses}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      }else{//If prop has submenu the create a submenu
        subMenuActiveClass = classNames({ [" " + classes[color]]: this.activeRoute(prop.path) });
        return (
        <div key={key}>
          <ListItem button className={classes.itemLink + activeClass} onClick={this.handleClick} key={key}>
            <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
              <prop.icon />
            </ListItemIcon>
            <ListItemText
              inset
              primary={prop.sidebarName}
              className={classes.itemText + whiteFontClasses}
              disableTypography={true}
            />
            {this.state.open ? <ExpandLess className="expand"/> : <ExpandMore className="expand"/>}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit style={{margin: "10px"}}>
          {
            //Do the create the submenu
          }
          {prop.subMenu.map((submenu, subkey) => {
            subMenuActiveClass = classNames({ [" " + classes[color]]: this.activeRoute(submenu.path) });
            return (
              
              <NavLink
            to={submenu.path}
            className={classes.item}
            activeClassName="active"
            key={`${key}.${subkey+1}`}
          >
                <List component="div" disablePadding>
                  <ListItem button className={`${classes.nested}${subMenuActiveClass}`}>
                    <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                      <StarBorder className="marginLeft" />
                    </ListItemIcon>
                    <ListItemText  primary={submenu.sidebarName}
                        className={classes.itemText + whiteFontClasses}
                        disableTypography={true} />
                  </ListItem>
                </List>
              </NavLink>
            )
          })}
            
          </Collapse>
        </div>
        );
      }
      })}
    </List>
  );

  let brand = (
    <div className={classes.logo}>
      <a href="#products" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={this.props.open}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={this.props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  )
}
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
