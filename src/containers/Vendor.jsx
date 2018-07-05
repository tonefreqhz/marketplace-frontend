import { connect } from 'react-redux';
import componentsStyle from "../assets/jss/material-kit-react/views/components.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import VendorComponent from '../views/VendorPage/Vendor';

const mapStateToProps = state => ({
  front: state.front
});

const Vendor = connect(
  mapStateToProps,
)(VendorComponent);

export default withStyles(componentsStyle)(Vendor);
