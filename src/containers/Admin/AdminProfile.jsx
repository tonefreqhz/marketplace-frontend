/*
*@desc the container of the Admin Profile used by REDUX 
*@author Sylvia Onwukwe
*/
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import AdminProfileComponent from '../../Admin/AdminProfile/adminProfile.jsx';


const styles = {
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

const AdminProfile = connect(
  mapStateToProps,
)(AdminProfileComponent);

export default withStyles(styles)(AdminProfile);
