//@desc this displays the list of registered vendors
//@author Sylvia Onwukwe

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search"
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import MessagePages from "../../views/Messages/Pagination.jsx";
import BanVendor from "./banButton.jsx"

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "white",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Vendors extends React.Component {
  render () {
  
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
   
    </GridItem>
    <GridItem xs={6} md={2}>
    <CustomInput
          labelText="Search..."
          id="product_search"
          primary
          formControlProps={{
              fullWidth: false
          }}
          inputProps={{
              endAdornment: (<InputAdornment position="end"><Search/></InputAdornment>)
          }}
        />
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>All Vendors</h4>
            <p>
              List of All Vendors
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Vendor Name","Vendor Email Address", "Contact Number", "Contact Address", "Action", "Active"]}
              tableData={[
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road", <Button color="primary">
                Visit Vendor </Button>, <BanVendor />],
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road",<Button color="primary">
                Visit Vendor </Button>, <BanVendor />],
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road", <Button color="primary">
                Visit Vendor </Button>, <BanVendor />],
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road", <Button color="primary">
                Visit Vendor </Button>, <BanVendor />],
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road",<Button color="primary">
                Visit Vendor </Button>, <BanVendor />],
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road", <Button color="primary">
                Visit Vendor </Button>, <BanVendor />],
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road", <Button color="primary">
                Visit Vendor </Button>, <BanVendor />],
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road", <Button color="primary">
                Visit Vendor </Button>, <BanVendor />],
                ["Bezop Store","research@bezop.io","07806578909", "Plot 42, Mansion Avenue, Hallmark Road", <Button color="primary">
                Visit Vendor </Button>, <BanVendor />]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <MessagePages />
    </Grid>
  );
}
}
export default withStyles(styles)(Vendors);
