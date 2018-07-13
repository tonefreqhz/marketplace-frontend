//@desc This is the sidebar component
//@author Sylvia Onwukwe
//@co author Odewale Ifeoluwa
//@co author Mohammed Odunayo

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
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
import sidebarStyle from "./sidebarStyle.jsx";

class Sidebar extends React.Component{

  render(){
  const { classes, color, routes } = this.props;
//To check parent main 
  let activeClass;

  let subMenuActiveClass;

  return (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        //Check if prop has resirect property if so return null
        
        if (prop.redirect) return null;

        if(prop.path !== "/upgrade-to-pro"){
          activeClass = classNames({ [" " + classes[color]]: this.props.activeRoute(prop.path) });
          if(prop.hasOwnProperty("subMenu")){
            activeClass = classNames({ [" " + classes[color]]: this.props.activeParentMenu(prop.path, this.props.match.url) });
          }
        }

        const whiteFontClasses = classNames({[" " + classes.whiteFont]: this.props.activeRoute(prop.path)});
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
        subMenuActiveClass = classNames({ [" " + classes[color]]: this.props.activeRoute(prop.path) });
        return (
        <div key={key}>
          <ListItem button className={classes.itemLink + activeClass} onClick={this.props.handleClick} key={key}>
            <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
              <prop.icon />
            </ListItemIcon>
            <ListItemText
              inset
              primary={prop.sidebarName}
              className={classes.itemText + whiteFontClasses}
              disableTypography={true}
            />
            {(this.props.open) ?
                <ExpandLess className="expand"/>
                :
                <ExpandMore className="expand"/>
            }
          </ListItem>
          <Collapse in={this.props.open} timeout="auto" unmountOnExit style={{margin: "10px"}}>
          {
            //Do the create the submenu
          }
          {prop.subMenu.map((submenu, subkey) => {
            subMenuActiveClass = classNames({ [" " + classes[color]]: this.props.activeRoute(submenu.path) });
            return (
              
              <NavLink
            to={submenu.path}
            className={classes.item}
            activeClassName="active"
            key={key + "." + (subkey+1)}
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
}
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
