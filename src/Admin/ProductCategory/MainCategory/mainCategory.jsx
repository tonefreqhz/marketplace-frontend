//@desc this component displays the list of all product main categories
//@author Sylvia Onwukwe
import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../../components/Grid/GridItem.jsx";
import Table from "../../../components/Table/Table.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import MessagePages from "../../../views/Messages/Pagination.jsx"
import EditMainCategory from "./modalMainCategory.jsx"


class MainCategory extends React.Component {
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
            <h4>Main Categories</h4>
            <p>
              Showing Product Main Categories
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[ "#","Category Name", "Url Slug","Edit"]}
              tableData={[
                [ "1","Automobile", "automobile", <EditMainCategory />],
                [ "2","Automobile", "automobile", <EditMainCategory />],
                [ "3","Phones", "phones", <EditMainCategory />],
                [ "4","Utensil", "utensil", <EditMainCategory />]
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
export default MainCategory;
