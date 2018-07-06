/*
*@desc the container of UserProfile Setting used by REDUX 
*@author Odewale Ifeoluwa
*/
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import UserProfilesComponent from '../views/UserProfile/UserProfile';


const UserProfilesStyle = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const mapStateToProps = state => ({
  front: state.front
});

const UserProfiles = connect(
  mapStateToProps,
)(UserProfilesComponent);

export default withStyles(UserProfilesStyle)(UserProfiles);