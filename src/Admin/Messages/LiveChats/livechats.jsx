//@desc this component displays all live chat messages
//@author Sylvia Onwukwe
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../../components/Grid/GridItem.jsx";
import Table from "../../../components/Table/Table.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import MessagePages from "../../../views/Messages/Pagination.jsx";
import ModalLiveChat from "./modalLiveChat"

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

class LiveChats extends React.Component {
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
            <h4 >Live Chats</h4>
            <p >
              Showing All Live Chat Messages
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["#", "Name","Email Address", "Date", "Action"]}
              tableData={[
                ["1","Anna Barley", "admin@example.com", "20-07-2018", <ModalLiveChat />],
                ["2","Esther Jones", "admin@example.com","17-07-2018", <ModalLiveChat />],
                ["3", "Kayode Musa", "admin@example.com", "15-07-2018", <ModalLiveChat />],
                ["4", "Sarah Philips", "admin@example.com","15-07-2018", <ModalLiveChat />],
                ["5", "Khlondiva Scholum","admin@example.com","13-07-2018", <ModalLiveChat />],
                ["6", "Anthony Santo","admin@example.com","12-07-2018", <ModalLiveChat />],
                ["7", "Santiago Diego","admin@example.com","12-07-2018", <ModalLiveChat />],
                ["8", "Park Min Young", "admin@gmail.com", "12-07-2018", <ModalLiveChat />]
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

export default withStyles(styles)(LiveChats);
