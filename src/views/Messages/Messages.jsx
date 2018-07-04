//@desc This is the message component; vendors can view, send or delete messages from here
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
import Filter from "./Filter.jsx";
import AddNew from "./AddNew";
import ReadMore from "./ReadMore.jsx"
import DeleteMessage from "./DeleteMessage";
import MessagePages from "./Pagination";

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

function Messages(props) {
  const { classes } = props;
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    <Filter />
    </GridItem>
    <GridItem xs={6} md={2}>
    <AddNew />

    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Messages</h4>
            <p className={classes.cardCategoryWhite}>
              View Messages
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "","Subject","", "Type","","Sender","", "Status","","Email Address"]}
              tableData={[
                ["001", "", "Black Jean","","Contact", "","Anne Barley", "","Unread","","AnneBarley@example.com", <ReadMore />,
            <DeleteMessage /> ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

    <MessagePages />
    </Grid>
  );
}

export default withStyles(styles)(Messages);
