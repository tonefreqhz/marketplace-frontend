import { connect } from 'react-redux';
import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import ProfilePageComponent from '../views/ProfilePage/ProfilePage';

const mapStateToProps = state => ({
  info: state.info,
});

const ProfilePage = connect(
  mapStateToProps,
)(ProfilePageComponent);

export default withStyles(profilePageStyle)(ProfilePage);
