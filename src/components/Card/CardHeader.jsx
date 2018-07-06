//@desc this is the card header
//@author Sylvia Onwukwe
//@co author Ifeoluwa Odewale
import React, {Component} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardHeaderStyle from "../../assets/jss/material-kit-react/components/cardHeaderStyle.jsx";

class  CardHeader extends Component{
  // constructor({ ...props }){
  
  //   console.log(props);
  // }

  render(){
    const { classes, className, children, color, plain, ...rest } = this.props;
    const cardHeaderClasses = classNames({
      [classes.cardHeader]: true,
      [classes[color + "CardHeader"]]: color,
      [classes.cardHeaderPlain]: plain,
      [className]: className !== undefined
    });
    return (
      <div className={cardHeaderClasses} {...rest}>
        {children}
      </div>
    );
    }
  
}

CardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: PropTypes.bool,


};

export default withStyles(cardHeaderStyle)(CardHeader);
