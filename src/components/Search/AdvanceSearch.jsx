/**
 * @description The advance search for the sidebar, it's the component responsible for detail search of products in the store.
 * @author Mohammed Odunayo
 * @class AdvanceSearch
 * @name AdvanceSearch
 */

import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Nouislider from "react-nouislider";

const style = {
  sliderCon: {
    margin: "23px"
  },
  priceRange: {
    fontWeight: "bold"
  },
  right: {
    float: "right",
    display: "block"
  }
};

class AdvanceSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideRange: this.props.slideRange,
      slideState: this.props.slideState,
      slideStep: this.props.slideStep
    };
    this.slideChange = this.slideChange.bind(this);
  }

  formatCurrency(num)
  {
      num = num.toString().replace(/\$|\,/g, ''); // eslint-disable-line no-useless-escape
      if (isNaN(num))
      {
          num = "0";
      }

      let sign = (num == (num = Math.abs(num))); // eslint-disable-line eqeqeq
      num = Math.floor(num * 100 + 0.50000000001);
      let cents = num % 100;
      num = Math.floor(num / 100).toString();

      if (cents < 10)
      {
          cents = "0" + cents;
      }
      for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
      {
          num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
      }

      return (((sign) ? '' : '-') + '$' + num + '.' + cents);
  }

  slideChange(values) {
    const val = values.map(item => {
      return(
        Number(item)
      );
    });
    this.setState(...this.state, {slideState: val});
  }

  render() {
    const { classes } = this.props;

    return(
      <div className={"slider slider-info "+classes.sliderCon}>
        <p className={classes.priceRange}>
          <span>{this.formatCurrency(this.state.slideState[0])}</span>
          <span className={classes.right}>{this.formatCurrency(this.state.slideState[1])}</span>
        </p>
        <Nouislider
          start={this.state.slideState}
          connect={[false, true, false]}
          step={this.state.slideStep}
          range={this.state.slideRange}
          onSlide={this.slideChange}
        />
      </div>
    );
  }
};

export default withStyles(style)(AdvanceSearch);