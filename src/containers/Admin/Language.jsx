/*
*@desc the Language container used by REDUX 
*@author Sylvia Onwukwe
*/
import { connect } from 'react-redux';
import AdminLanguageComponent from '../../Admin/Language/languages.jsx'


const mapStateToProps = state => ({
  front: state.front
});

const AdminLanguage = connect(
  mapStateToProps,
)(AdminLanguageComponent);

export default AdminLanguage;
