/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Search from "@material-ui/icons/Search";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
        <CustomInput
          labelText="Search..."
          id="material"
          primary
          formControlProps={{
              fullWidth: true
          }}
          inputProps={{
              endAdornment: (<InputAdornment position="end"><Search/></InputAdornment>)
          }}
        />
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
