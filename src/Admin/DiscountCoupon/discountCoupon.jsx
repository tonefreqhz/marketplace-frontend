//@desc this component displays the list of the discount coupons and also allow admin add new coupon
//@author Sylvia Onwukwe
import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import MessagePages from "../../views/Messages/Pagination.jsx"
import CreateCoupon from "./addNewButton.jsx"

class DiscountCoupon extends React.Component{
  render (){
 
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    </GridItem>
    <GridItem xs={6} md={2}>
    
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>Discount Coupons</h4>
            <p>
              View or Add Discount Coupons
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[ "ID", "value","Description", "By Vendor", "Status"]}
              tableData={[
                [ "1","$5000", "Store opening coupon valid for first customer", "Bezop Store", "Active"],
                [ "2","$120", "Valid for products over $1000", "Bezop Store", "Active"],
                [ "3","$3000", "Store opening coupon valid for first customer", "Bezop Store", "Expired"],
                [ "4","$290", "Valid for all returning customers", "Bezop Store", "Active"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={10}>
      <MessagePages />
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <CreateCoupon />
      </GridItem>
      <GridItem xs={12} sm={12} md={1}>
      <Button color="primary"> Export </Button>
      </GridItem>
    </Grid>
  );
}
}
export default DiscountCoupon;
