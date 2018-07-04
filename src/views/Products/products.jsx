//@desc this is the product component on vendor's dashboard
//@author Sylvia Onwukwe

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Filter from "./filter.jsx";
import AddNew from "./modal";
import AddStock from "./addstock.jsx"

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

function Products(props) {
  const { classes } = props;
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    <Filter />
    </GridItem>
    <GridItem xs={6} md={2}>
    <AddNew/>
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>All Products</h4>
            <p className={classes.cardCategoryWhite}>
              List of All Products
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID","Image", "Name", "Quantity", "Price", "Status"]}
              tableData={[
                ["0001","An Image", "Black Jean", "30", "$36,738","Suspended"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} md={10}>
      <h1 hidden="hidden"> hhh</h1>
      </GridItem>
      <GridItem xs={6} md={2}>
      <AddStock />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Product Stock
            </h4>
            <p className={classes.cardCategoryWhite}>
              Manage Product Stock
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Title","Total Cost", "Quantity", "Description"]}
              tableData={[
                ["1", "First Stock", "$36,738", "300", "My First Stock"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default withStyles(styles)(Products);
