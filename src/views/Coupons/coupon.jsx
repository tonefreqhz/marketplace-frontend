//@desc this is the discount coupon component
//@author Sylvia Onwukwe
//co author Odewale Ifeoluwa
import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CreateCoupon from "./createbutton.jsx"

function Coupons(props) {
  const { classes } = props;
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    </GridItem>
    <GridItem xs={6} md={2}>
    <CreateCoupon />
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Discount Coupons</h4>
            <p className={classes.cardCategoryWhite}>
              Manage Discounts
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Title", "Status", "Code", "Value"]}
              tableData={[
                ["0000", "Black Jean", "Used","0000", "$36,738"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Coupons;
