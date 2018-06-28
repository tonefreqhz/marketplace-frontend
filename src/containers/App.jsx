import { connect } from 'react-redux';

import AppComponent from '../views/Components/App';

const mapStateToProps = state => ({
  info: state.info,
});

const App = connect(
  mapStateToProps,
)(AppComponent);

export default App;
