//@desc this is the product component on vendor's dashboard
//@author Sylvia Onwukwe
//@co author Odewale Ifeoluwa

import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../../components/Grid/GridItem.jsx";
import Table from "../../../components/Table/Table.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import AddNewProductCategory from "./categoryModal";



class Category extends React.Component{
  
  render(){
  const { classes } = this.props;
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    </GridItem>
    <GridItem xs={6} md={2}>
    <AddNewProductCategory/>
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>All Category</h4>
              <p className={classes.cardCategoryWhite}>List of All Categories</p>
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
    </Grid>
  );
}
}

export default Category;
