import { connect } from 'react-redux';
import loginPageStyle from "../assets/jss/material-kit-react/views/loginPage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import LoginPageComponent from '../views/LoginPage/LoginPage';

const mapStateToProps = state => ({
  info: state.info,
});

const LoginPage = connect(
  mapStateToProps,
)(LoginPageComponent);

export default withStyles(loginPageStyle)(LoginPage);
