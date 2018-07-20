//@desc this is the product component on vendor's dashboard
//@author Sylvia Onwukwe
//@co author Odewale Ifeoluwa

import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import _ from "lodash";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Filter from "./filter.jsx";
import AddNew from "./modal";
import AddStock from "./addstock.jsx"


import EnhancedTable from "../../bezopComponents/Table/EnhancedTable";


const columnData = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Product Brand' },
  { id: 'short_description', numeric: false, disablePadding: true,  label: 'Short Description' },
  { id: 'category_id', numeric: false, disablePadding: true,  label: 'Category' },
  { id: 'brand_id', numeric: false, disablePadding: true,  label: 'Brand' },
  { id: 'images',  numeric: false, disablePadding: true,  label: 'Product Images' },
];

const properties = [{name: "name", component: true, padding: true, numeric: false, img: false},
{name: "short_description", component: false, padding: false, numeric: false, img: false},
{name: "category_id", component: false, padding: false, numeric: false, img:false},
{name: "brand_id", component: false, padding: false, numeric: false, img: false},
{name: "images", component: false, padding: false, numeric: false, img: false, imgPanel: true},
]

class  Products extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
          product: [],
          data: [],
          categories: [],
          brands: [],
          snackBarOpenSuccess: false,
          snackBarMessageSuccess: "Yet to decide the action",
          deletedCategory: 0,
      }
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  componentWillReceiveProps(newProps){

    if(newProps.product.hasOwnProperty('getAll') && _.isEqual(this.props.product.getAll, newProps.product.getAll) === false){
      this.setState({
        data: newProps.product.getAll
      })
    }

  }


  componentWillUnmount(){
    this.props.product.getAll = {};
  }

  render(){
  const { classes, fetchProductBrands, fetchProductCategories, product } = this.props;
  const {data} = this.state;

  return (
    <Grid container>
    <GridItem xs={12} md={10}>
    <Filter />
    </GridItem>
    <GridItem xs={6} md={2}>
    <AddNew fetchProductBrands={fetchProductBrands} fetchProductCategories={fetchProductCategories}
    product={product}/>
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>All Products</h4>
              <p className={classes.cardCategoryWhite}>List of All Products</p>
          </CardHeader>
          <CardBody>
            <EnhancedTable
              orderBy="name"
              columnData={columnData}
              data={data}
              tableTitle="All Products"
              properties={properties}
              editButton={this.editButtonDisplay}
              onDeleteClickSpec={this.handleDeleteClick}
              currentSelected = {[]}
              itemName={{single : "Product", plural: "Products"}}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} md={10}>
      <h1 hidden="hidden"> hhh</h1>
      </GridItem>
      <GridItem xs={6} md={2}>
      <AddStock />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Product Stock</h4>
            <p className={classes.cardCategoryWhite}>Manage Product Stock</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Title","Total Cost", "Quantity", "Description"]}
              tableData={[
                ["1", "First Stock", "$36,738", "300", "My First Stock"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}
}

export default Products;
