/**
 * @description The search dropdown for the sidebar, it's the component responsible for detail search of products in the store.
 * @author Mohammed Odunayo
 * @class SearchDropdown
 * @name SearchDropdown
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, ListItem, Checkbox, ListItemText, Avatar, ListItemSecondaryAction } from '../../../node_modules/@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class SearchDropdown extends React.Component {
  state = {
    expanded: null,
    checkedSubCategories: [],
    subCategories: [],
    checkedVendors: [],
    vendors: [],
    checkedBrands: [],
    brands: []
  };

  componentWillReceiveProps() {
    const { categories, vendors, brands } = this.props.data;
    
    this.setState({ subCategories: categories, vendors: vendors, brands: brands });
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleSubCategories = value => () => {
    const { checkedSubCategories } = this.state;
    const currentIndex = checkedSubCategories.indexOf(value);
    const newChecked = [...checkedSubCategories];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checkedSubCategories: newChecked,
    });
  };

  handleVendors = value => () => {
    const { checkedVendors } = this.state;
    const currentIndex = checkedVendors.indexOf(value);
    const newChecked = [...checkedVendors];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checkedVendors: newChecked,
    });
  };

  handleBrands = value => () => {
    const { checkedBrands } = this.state;
    const currentIndex = checkedBrands.indexOf(value);
    const newChecked = [...checkedBrands];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checkedBrands: newChecked,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Sub&nbsp;Categories</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              {this.state.subCategories.map((value, index) =>  (
                <ListItem key={index} dense button className={classes.listItem} onClick={this.handleSubCategories(index)}>
                  <Avatar alt="Image" src={value.image} />
                  <ListItemText primary={value.name} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      onClick={this.handleSubCategories(index)}
                      checked={this.state.checkedSubCategories.indexOf(index) !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Vendors</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              {this.state.vendors.map((value, index) =>  (
                <ListItem key={index} dense button className={classes.listItem} onClick={this.handleVendors(index)}>
                  <Avatar alt="Image" src={value.image} />
                  <ListItemText primary={value.name} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      onClick={this.handleVendors(index)}
                      checked={this.state.checkedVendors.indexOf(index) !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Brands</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              {this.state.brands.map((value, index) =>  (
                <ListItem key={index} dense button className={classes.listItem} onClick={this.handleBrands(index)}>
                  <Avatar alt="Image" style={{height: "auto", borderRadius: "0px"}} src={value.image} />
                  <ListItemText primary={value.name} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      onClick={this.handleBrands(index)}
                      checked={this.state.checkedBrands.indexOf(index) !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

SearchDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchDropdown);
