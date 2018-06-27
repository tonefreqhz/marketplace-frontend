import { connect } from 'react-redux';

import AppComponent from '../components/App.jsx';

const mapStateToProps = state => ({
  info: state.info,
});

const App = connect(
  mapStateToProps,
)(AppComponent);

export default App;
