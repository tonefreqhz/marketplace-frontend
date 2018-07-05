import { connect } from 'react-redux';
import componentsStyle from "../assets/jss/material-kit-react/views/components.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import CategoryComponent from '../views/CategoryPage/Category';

const mapStateToProps = state => ({
  front: state.front
});

const Category = connect(
  mapStateToProps,
)(CategoryComponent);

export default withStyles(componentsStyle)(Category);
