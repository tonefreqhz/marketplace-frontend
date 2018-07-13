//@desc this component displays the list of the blog posts from a vendor
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
import DeleteBlog from "./deleteModal";
import NewPost from "./createModal"



class Blog extends React.Component {
  render () {
 
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    </GridItem>
    <GridItem xs={6} md={2}>
    <NewPost />
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>Blog Posts</h4>
            <p>
              View or Create A New Blog Post
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Featured Image","Title","Category", "Date", "Action"]}
              tableData={[
                [ <img src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg" alt="Featured"
                width="200" />,"Professional and Health Benefits of Shopping Online", "Business", "12-08-2019", 
              <DeleteBlog />],
                [ <img src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg" alt="Featured"
                width="200" />,"Professional and Health Benefits of Shopping Online", "LifeStyle", "12-08-2019", <DeleteBlog />],
                [ <img src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg" alt="Featured"
                width="200" />,"Professional and Health Benefits of Shopping Online", "Fashion", "12-08-2019", <DeleteBlog />],
                [ <img src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg" alt="Featured"
                width="200" />,"Professional and Health Benefits of Shopping Online", "Business", "12-08-2019", <DeleteBlog />]
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
export default Blog;
