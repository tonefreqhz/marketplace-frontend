import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';

import { fetchInfo } from '../../actions/actions_info.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInfo());
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption: selectedOption || '',
    });
  }

  render() {
    const { info } = this.props;
    const selectList = info.map(item => ({ value: item.name, label: item.name }));
    const { selectedOption } = this.state;

    return (
      <div>
        <Select
          name="form-field-name"
          value={selectedOption.value}
          onChange={this.handleChange}
          options={selectList}
        />
        <hr />
        <table style={{ borderCollapse: 'collapse', border: '1px' }}>
          <thead>
            <tr>
              <th>
Name
              </th>
              <th>
Address
              </th>
              <th>
Age
              </th>
              <th>
Company
              </th>
            </tr>
          </thead>
          <tbody>
            {info.map((item) => {
              if (selectedOption === '' || item.name === selectedOption.value) {
                return (
                  <tr key={`item-${item.name}`}>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.address}
                    </td>
                    <td>
                      {item.age}
                    </td>
                    <td>
                      {item.company}
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

App.defaultProps = {
  info: PropTypes.node,
  dispatch: PropTypes.func,
};

App.propTypes = {
  info: PropTypes.node,
  dispatch: PropTypes.func,
};

export default App;