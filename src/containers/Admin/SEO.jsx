/*
*@desc the seo container used by REDUX 
*@author Sylvia Onwukwe
*/
import { connect } from 'react-redux';
import AdminSeoComponent from '../../Admin/SEO/seo.jsx';
  
const mapStateToProps = state => ({
  front: state.front
});

const AdminSeo = connect(
  mapStateToProps,
)(AdminSeoComponent);

export default AdminSeo;
