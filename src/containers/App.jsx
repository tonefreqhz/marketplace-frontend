import { connect } from 'react-redux';

import AppComponent from '../views/HomePage/App';

const mapStateToProps = state => ({
  info: state.info,
});

const App = connect(
  mapStateToProps,
)(AppComponent);

export default App;
