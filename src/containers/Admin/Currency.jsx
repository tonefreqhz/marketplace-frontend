/*
*@desc the Currency container used by REDUX 
*@author Sylvia Onwukwe
*/
import { connect } from 'react-redux';
import CurrencyComponent from '../../Admin/Currency/currency.jsx';


const mapStateToProps = state => ({
  front: state.front
});

const Currency = connect(
  mapStateToProps,
)(CurrencyComponent);

export default Currency;
