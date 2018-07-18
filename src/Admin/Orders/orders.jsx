//@desc this is the Order component on admin's dashboard
//@author Sylvia Onwukwe

import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search"
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Filter from "./filter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import MessagePages from "../../views/Messages/Pagination.jsx"

class AdminOrder extends React.Component {
  render () {
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    <Filter />
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
            <h4 >All Orders</h4>
            <p >
              List of All Orders
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Vendor Name","Vendor Email Address", "Customer Name", "Customer Email Address", "Product", "Quantity","Total Cost",
              "Order Status"]}
              tableData={[
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"],
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"],
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"],
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"],
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"],
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"],
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"],
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"],
                ["Bezop Store","research@bezop.io","Anna Berley","annaberley@example.com", "Black Jean", "30", "$36,738", "Pending"]
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

export default AdminOrder;
