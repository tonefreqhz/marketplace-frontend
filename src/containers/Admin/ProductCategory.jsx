/*
*@desc the product category container used by REDUX 
*@author Sylvia Onwukwe
*/
import { connect } from 'react-redux';
import AdminProductCategoryComponent from '../../Admin/ProductCategory/mainPage.jsx';

const mapStateToProps = state => ({
  front: state.front
});

const AdminProductCategory = connect(
  mapStateToProps,
)(AdminProductCategoryComponent);

export default AdminProductCategory;
