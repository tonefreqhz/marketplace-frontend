//@desc this component displays the list of active languages
//@author Sylvia onwukwe
import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import MessagePages from "../../views/Messages/Pagination.jsx";
import AllLanguages from "./modalViewLanguages.jsx";
import AddLanguage from "./addLanguage.jsx";
import ViewWord from "./viewLanguage.jsx";

class AdminLanguage extends React.Component {
  render () {
 
  return (
    <Grid container>
    <GridItem xs={12} sm={12} md={10}>
    <AllLanguages />
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>Languages</h4>
            <p>
              Showing Active Languages
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[ "Word","English", "French", "Chinese", "Spanish", "Arabic","Status", "Action"]}
              tableData={[
                [ "Hello","Hello", "Bonjour", "Nǐ hǎo","Hola", "مرحبا","Active",<ViewWord />],
                [ "Hello","Hello", "Bonjour", "Nǐ hǎo","Hola", "مرحبا","Active",<ViewWord />],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={10}>
      <MessagePages />
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <AddLanguage />
      </GridItem>
    </Grid>
  );
}
}
export default AdminLanguage;
