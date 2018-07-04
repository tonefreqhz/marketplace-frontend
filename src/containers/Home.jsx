import { connect } from 'react-redux';
import componentsStyle from "../assets/jss/material-kit-react/views/components.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import HomeComponent from '../views/Components/Home';

const mapStateToProps = state => ({
  front: state.front
});

const Home = connect(
  mapStateToProps,
)(HomeComponent);

export default withStyles(componentsStyle)(Home);
