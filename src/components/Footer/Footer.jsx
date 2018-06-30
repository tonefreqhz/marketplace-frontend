/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles, Button } from "@material-ui/core";

import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.jsx";
import MegaFooter from "./MegaFooter.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont, topFooter } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const megaFooter = (topFooter) ? <MegaFooter /> : "" ;
  return (
    <div>
    {megaFooter}
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
              >
                <Button simple>Home</Button>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about"
              >
                <Button simple>About us</Button>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contact"
              >
                <Button simple>Contact Us</Button>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/policy"
              >
                <Button simple>Privacy Policy</Button>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/terms"
              >
                <Button simple>Terms & Conditions</Button>
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}
          <a
            href="/"
            className={aClasses}
          >
            <Button simple>Bezop Store</Button>
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
  topFooter: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
