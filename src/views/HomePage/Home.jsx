import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import LeftLink from "../../components/Header/LeftLinks.jsx";
import Stage from "./Sections/Stage.jsx";
import Slider from "../../components/Parallax/Slider.jsx";
import {getSliders, getCategories} from "../../actions/actions_front.jsx";
import {PageLoader} from "../../components/PageLoader/PageLoader.jsx";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loader: "block"
    }
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getSliders());
    dispatch(getCategories())
      .then(
        () => {
          this.setState(...this.state, {loader: "none"})
        }
      );
  }

  render() {
    const { classes, front, ...rest } = this.props;

    return (
      <div>
        <PageLoader display={this.state.loader} />
        <Header
          brand="Bezop Store"
          rightLinks={<HeaderLinks />}
          leftLinks={<LeftLink />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <Slider classes={classes} slides={front.sliders} />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <Stage categories={front.categories} />
        </div>
        <Footer topFooter={true} />
      </div>
    );
  }
}


export default Home;
