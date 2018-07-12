//@desc this component displays the list of the blogs and also allow admin create new blog post
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
import Button from "../../components/CustomButtons/Button.jsx";
import MessagePages from "../../views/Messages/Pagination.jsx";

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

class Blog extends React.Component {
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
            <h4>Blog Posts</h4>
            <p>
              View or Create New Blog Post
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[ "ID", "Featured Image","Title","Category", "By Vendor", "Date"]}
              tableData={[
                [ "1", <img src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg" alt="Featured"
                width="200" />,"Professional and Health Benefits of Shopping Online", "Business","Bezop Store", "12-08-2019"],
                [ "1", <img src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg" alt="Featured"
                width="200" />,"Professional and Health Benefits of Shopping Online", "LifeStyle","Bezop Store", "12-08-2019"],
                [ "1", <img src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg" alt="Featured"
                width="200" />,"Professional and Health Benefits of Shopping Online", "Fashion","Bezop Store", "12-08-2019"],
                [ "1", <img src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg" alt="Featured"
                width="200" />,"Professional and Health Benefits of Shopping Online", "Business","Bezop Store", "12-08-2019"]
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
export default withStyles(styles)(Blog);
