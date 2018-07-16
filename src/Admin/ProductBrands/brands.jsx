//@desc this component displays the list of all product brands
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
import EditBrand from "./modalBrands.jsx"

class AdminBrands extends React.Component {
  render () {
 
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    </GridItem>
    <GridItem xs={6} md={2}>
    
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>Product Brands</h4>
            <p>
              Showing All Brands
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Brand Image","Brand Name","Action"]}
              tableData={[
                [ <img src="http://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-History.jpg"
                alt="Gucci Brand" width="200px"/>,"Automobile", <EditBrand />],
                [ <img src="http://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-History.jpg"
                alt="Gucci Brand" width="200px"/>,"Automobile", <EditBrand />],
                [ <img src="http://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-History.jpg"
                alt="Gucci Brand" width="200px"/>,"Automobile", <EditBrand />],
                [ <img src="http://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-History.jpg"
                alt="Gucci Brand" width="200px"/>,"Automobile", <EditBrand />],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={10}>
      <MessagePages />
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <Button color="primary"> Export </Button>
      </GridItem>
    </Grid>
  );
}
}
export default AdminBrands;
