//@desc this component displays the list of all store currencies
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
import MessagePages from "../../views/Messages/Pagination.jsx";
import EditCurrency from "./editCurrency.jsx";
import AddCurrency from "./addCurrency.jsx";


class Currency extends React.Component {
 render (){
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    </GridItem>
    <GridItem xs={6} md={2}>
    <AddCurrency />
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>Currency</h4>
            <p>
              Showing Active Currencies
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Currency Name","Code", "Kind", "Exchange Rate", "Symbol","Status", "Edit"]}
              tableData={[
                [ "Dollars", "Re32","Fiat","100","$", "Active", <EditCurrency />],
                [ "Euro", "Re43", "Fiat", "100", "Euro", "Active",<EditCurrency />],
                [ "Bitcoin", "Re34", "Digital","100","Btc", "Suspended",<EditCurrency />],
                [ "Ethereum", "Re35", "Digital", "100", "Eth", "Active",<EditCurrency />]
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
export default Currency;
