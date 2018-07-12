//@desc this is the product component on admin's dashboard
//@author Sylvia Onwukwe

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search"
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Filter from "../../views/Products/filter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import MessagePages from "../../views/Messages/Pagination.jsx"
import ModalProduct from "./modalProducts.jsx"

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

class AdminProducts extends React.Component {
  render() {
  
  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    <Filter />
    </GridItem>
    <GridItem xs={6} md={2}>
    <CustomInput
          labelText="Search..."
          id="product_search"
          primary
          formControlProps={{
              fullWidth: false
          }}
          inputProps={{
              endAdornment: (<InputAdornment position="end"><Search/></InputAdornment>)
          }}
        />
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>All Products</h4>
            <p>List of All Products</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID","Image", "Name", "Quantity", "Price", "Status"]}
              tableData={[
                ["0001",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />],
                ["0002",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />],
                ["0003",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />],
                ["0004",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />],
                ["0005",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />],
                ["0006",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />],
                ["0007",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />],
                ["0008",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />],
                ["0009",<img alt="Shoe and Shirt"src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                width="70px"/>, "Black Jean", "30", "$36,738",<ModalProduct />]
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

export default withStyles(styles)(AdminProducts);
