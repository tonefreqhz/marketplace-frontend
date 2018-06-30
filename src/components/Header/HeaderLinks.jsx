/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Search from "@material-ui/icons/Search";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

import CartIcon from '@material-ui/icons/ShoppingCart';
import Button from "../CustomButtons/Button";
import Badge from '../../components/Badge/Badge.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;

  return (
    <div>
        <CustomInput
          labelText="Search..."
          id="material"
          primary
          formControlProps={{
              fullWidth: false
          }}
          inputProps={{
              endAdornment: (<InputAdornment position="end"><Search/></InputAdornment>)
          }}
        />
        <Button variant="contained" simple color="primary" style={{fontSize: "3em"}} round size="lg">
          <CartIcon /><Badge color="danger">4</Badge>
        </Button>
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
